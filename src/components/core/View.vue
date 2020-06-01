<template>
  <v-content>
    <router-view />
  </v-content>
</template>

<script lang="ts">
import { Vue, Component } from '@/lib/VuePropertyDecorator';

@Component({
  components: {},
})
export default class CoreView extends Vue {}
</script>

<style lang="scss" scoped></style>
