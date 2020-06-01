<template>
  <v-snackbar v-model="snackbar" top :color="getColor">
    {{ getText }}
    <v-btn dark text @click="snackbar = false">
      닫기
    </v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component, Getter, Mutation } from '@/lib/VuePropertyDecorator';

@Component({ components: {} })
export default class CoreSnackbar extends Vue {
  @Getter('getSnackbar', { namespace: 'snackbar' })
  getSnackbar!: boolean;

  @Getter('getText', { namespace: 'snackbar' })
  getText!: string;

  @Getter('getColor', { namespace: 'snackbar' })
  getColor!: string;

  @Mutation('setSnackbar', { namespace: 'snackbar' })
  setSnackbar!: (val: boolean) => void;

  get snackbar() {
    return this.getSnackbar;
  }

  set snackbar(val: boolean) {
    this.setSnackbar(val);
  }
}
</script>

<style lang="scss" scoped></style>
