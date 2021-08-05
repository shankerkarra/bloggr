<template>
  <div class="row">
    <BloggrCard v-for="b in bloggrs" :key="b.id" :bloggr="b" />
  </div>
</template>

<script>
export default {
  name: 'Thread',
  props: {
    bloggrs: {
      type: Array,
      required: true
    }
  }
}
</script>
