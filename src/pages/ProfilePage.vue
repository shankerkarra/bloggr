<template>
  <div class="profile-page container-fluid">
    <BloggrThread :bloggr="bloggrs" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { bloggrsService } from '../services/BloggrsService'
import pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'

export default {
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await bloggrsService.getAll({ creatorId: router.params.id })
      } catch (error) {
        pop.toast(error, 'error')
      }
    })
    return {
      bloggrs: computed(() => AppState.bloggrs)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
