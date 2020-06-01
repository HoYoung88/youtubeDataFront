<template>
  <v-footer>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from '@/lib/VuePropertyDecorator';

@Component({ components: {} })
export default class CoreFooter extends Vue {}
</script>

<style lang="scss" scoped></style>
