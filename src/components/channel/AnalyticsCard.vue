<template>
  <v-card min-height="400" flat elevation="1">
    <v-sheet class="card-ghost-sheet"></v-sheet>
    <v-sheet class="card-ghost-sheet2" width="100%" height="100%"></v-sheet>
    <v-card-title>
      {{ itemData.title }}, {{ itemData.type }}
      <v-spacer></v-spacer>
      <v-btn class="handle" text icon>
        <v-icon size="18">fas fa-arrows-alt</v-icon>
      </v-btn>
      <v-btn class="" text icon @click="onCardRemove">
        <v-icon size="18">fas fa-trash</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <!-- <component
      v-bind:is="`${itemData.viewType}-chart`"
      :series="itemData.datas"
      :options="{}"
      :categories="itemData.categories"
    ></component> -->
    <!--
    <template v-if="itemData.viewType == 'line'">
      <line-chart :series="itemData.datas" :order="itemData.order"></line-chart>
    </template>
    <template v-else-if="itemData.viewType == 'bar'">
      <bar-chart :series="itemData.datas" :order="itemData.order"> </bar-chart>
    </template>
    <template v-else-if="itemData.viewType == 'pie'">
      <pie-chart :series="itemData.datas" :order="itemData.order"> </pie-chart>
    </template>
    -->
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from '@/lib/VuePropertyDecorator';
// import BarChart from '../chart/BarChart.vue';
// import LineChart from '../chart/LineChart.vue';
// import PieChart from '../chart/PieChart.vue';
// import ColumnChart from '../chart/ColumnChart.vue';

@Component({ components: {} })
export default class ChannelDetailCard extends Vue {
  @Prop({ type: Object, required: true }) itemData!: { [key: string]: string };
  @Prop({ type: Number, required: true }) itemIndex!: number;

  @Emit()
  onCardRemove() {
    return this.itemIndex;
  }
}
</script>

<style lang="scss" scoped></style>
