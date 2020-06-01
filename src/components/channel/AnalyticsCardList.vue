<template>
  <v-sheet tile elevation="0">
    <!-- <div class="d-flex justify-end align-center pt-2">
      <v-btn class="" text icon>
        <v-icon>fas fa-plus</v-icon>
      </v-btn>
    </div> -->
    <v-row>
      <v-col cols="2">
        <pre>{{ draggableList }}</pre>
      </v-col>
      <v-col>
        <vue-draggable
          ghost-class="blue-background-class"
          @start="drag = true"
          @end="drag = false"
          v-bind="dragOptions"
          v-model="draggableList"
          tag="div"
          class="row"
          handle=".handle"
          @update="onUpdate"
        >
          <template v-for="(item, index) in getDraggableList">
            <v-col cols="12" xs="12" sm="12" md="4" lg="3" :key="index">
              <channel-analytics-card
                :item-data="item"
                :item-index="index"
                @on-card-remove="handleCardRemove"
              ></channel-analytics-card>
            </v-col>
          </template>
        </vue-draggable>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Getter,
  Mutation,
  Action,
} from '@/lib/VuePropertyDecorator';
import { SnackbarOpt } from '../../store/modules/snackbar';

@Component({
  components: {
    ChannelAnalyticsCard: () =>
      import('@/components/channel/AnalyticsCard.vue'),
  },
})
export default class ChannelAnalyticsCardList extends Vue {
  @Getter('getCards', { namespace: 'channel' })
  getCards!: [];

  @Getter('getDraggableList', { namespace: 'draggable' })
  getDraggableList!: [];

  @Mutation('setDraggableList', { namespace: 'draggable' })
  setDraggableList!: (item: Api.ChannelItem) => void;

  @Action('showSnackbar', { namespace: 'snackbar' })
  showSnackbar!: (option: SnackbarOpt) => void;

  get draggableList(): Api.ChannelItem[] {
    return this.getDraggableList;
  }

  set draggableList(item: Api.ChannelItem[]) {
    this.setDraggableList(item);
  }

  drag = false;
  get dragOptions() {
    return {
      animation: 200,
      disabled: false,
      ghostClass: 'ghost',
    };
  }

  created() {
    this.setDraggableList(this.getCards);
  }

  handleCardRemove(itemIndex: number) {
    console.log(itemIndex);

    this.showSnackbar({
      color: 'success',
      text: this.$t('message.success', { msg: 'hello' }).toString(),
    });

    this.draggableList.splice(itemIndex, 1);

    this.draggableList.forEach((item, index) => {
      item.order = index;
    });
  }

  onUpdate() {
    this.draggableList.forEach((item, index) => {
      item.order = index;
    });
  }
}
</script>

<style lang="scss">
.blue-background-class {
  div.v-card {
    // background: transparent;
    z-index: 1;
    box-shadow: none !important;
    transition: none;
    .card-ghost-sheet {
      z-index: 3;
      position: absolute !important;
      top: 0.3rem;
      bottom: 0.3rem;
      left: 0.3rem;
      right: 0.3rem;
    }
    .card-ghost-sheet2 {
      position: absolute !important;
      z-index: 2;

      border: 0.2rem dashed #c8ebfb;
      animation-duration: 0.8s;
      animation-name: blink;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
@keyframes blink {
  from {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
