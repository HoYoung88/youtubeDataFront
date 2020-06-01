<template>
  <v-container class="error-page fill-height" tag="section">
    <v-row class="text-center" justify="center">
      <v-col cols="auto">
        <h1 class="title font-weight-black">
          404
        </h1>

        <div class="display-3 mb-5 mt-10">
          Page not found
        </div>

        <v-btn depressed to="/">
          Get me out of here!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({ components: {} })
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.error-page {
  h1 {
    font-size: 12rem;
  }
}
</style>
