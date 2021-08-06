<template>
  <div class="col-12">
    <div class="d-flex mt-2 shadow-light bg-gray border border-light">
      <img class="cover-img" :src="bloggr.imgUrl" alt=" Sorry image had problem to be diplayed " srcset="">
      <div class="d-flex flex-grow-1 text-left">
        <P class="py-2 px-3">
          Title: {{ bloggr.title }}<br>
          Tags: {{ bloggr.tags }}<br>
          Body: {{ bloggr.body }}<br>
          Published: {{ bloggr.published }}<br>
          ImgUrl: {{ bloggr.imgUrl }}<br>
          CreatorId:{{ bloggr.creatorId }}
        </P>
        <div class="align-self-end" v-if="account.id === bloggr.creatorId">
          <button class="btn btn-danger" @click="destroy">
            delete
          </button>
        </div>
        <router-link router-link :to="{ name: 'Profile', params: {id: bloggr.creator.id } }" @click="destroy" class="creator p-3 align-self-end">
          <img class="h-100 rounded-pill" :src="bloggr.creator.picture" alt="Source is crupted (:" srcset="">
          {{ bloggr.creator.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    bloggr: {
      type: Object,
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
