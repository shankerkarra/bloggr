<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1>{{ bloggr.title }}</h1>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { bloggrsService } from '../services/BloggrsService'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await bloggrsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      bloggrs: computed(() => AppState.bloggrs)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
