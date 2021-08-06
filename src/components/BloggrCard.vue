<template>
  <div class="col-12">
    <div class="d-flex mt-2 shadow-light bg-gray border border-light" data-toggle="modal" :data-target="'#bloggr-modal-'+ bloggr.id">
      <img class="cover-img" :src="bloggr.imgUrl" alt=" Sorry image had problem to be diplayed " srcset="">
      <div class="d-flex flex-grow-1 text-left">
        <P class="py-2 px-3">
          Title: {{ bloggr.title }}<br>
          Tags: {{ bloggr.tags }}<br>
          Body: {{ bloggr.body }}<br>
          Published: {{ bloggr.published }}<br>
          CreatorId:{{ bloggr.creatorId }}
        </P>
        <div class="align-self-end" v-if="account.id === bloggr.creatorId">
          <button class="btn btn-danger" @click.stop="">
            <h1>
              delete
            </h1>
          </button>
        </div>
        <router-link router-link :to="{ name: 'Profile', params: {id: bloggr.creator.id } }" @click.stop="" class="creator p-3 align-self-end">
          <img class="h-100 rounded-pill" :src="bloggr.creator.picture" alt="Source is crupted (:" srcset="">
          {{ bloggr.creator.name }}
        </router-link>
      </div>
    </div>
  </div>
  data-toggle="modal" :data-target="'#project-modal-'+project.id"
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
