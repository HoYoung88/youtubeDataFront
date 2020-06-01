<template>
  <v-app>
    <core-app-bar></core-app-bar>

    <!-- <core-drawer></core-drawer> -->

    <core-view></core-view>
    <core-snackbar></core-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from '@/lib/VuePropertyDecorator';

@Component({
  components: {
    CoreAppBar: () => import('@/components/core/AppBar.vue'),
    CoreDrawer: () => import('@/components/core/Drawer.vue'),
    CoreView: () => import('@/components/core/View.vue'),
    CoreSnackbar: () => import('@/components/core/Snackbar.vue'),
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped></style>
