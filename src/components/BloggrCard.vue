<template>
  <div class="col-12">
    <div class="d-flex mt-2 shadow-light bg-gray border border-light">
      <img class="cover-img" :src="bloggr.imgUrl" alt="" srcset="">
      <div class="d-flex flex-grow-1 text-left">
        <h4 class="py-2 px-3">
          Title: {{ bloggr.title }}<br>
          Tags: {{ bloggr.tags }}<br>
          Body: {{ bloggr.body }}<br>
          Published: {{ bloggr.published }}
          <!-- {{ bloggr.creatorId }} -->
        </h4>
        <router-link router-link :to="{ name: 'Profile', params: {id: bloggr.creator.id } }" @click.stop="" class="creator p-3 align-self-end">
          <img class="h-100 rounded-pill" :src="bloggr.creator.picture" alt="" srcset="">
          {{ bloggr.creator.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { bloggrsService } from '../services/BloggrsService'

export default {
  props: {
    bloggr: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      async destroy() {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-img {
  height: 200px;
  width: 200px;
  object-fit: cover;
  text-align:left;
}
a {
  color: inherit;
  text-decoration: inherit;
}
.creator{
  height:3em;
}
</style>
