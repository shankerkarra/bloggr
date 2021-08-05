<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="https://cdn.pixabay.com/photo/2014/08/27/08/11/blogging-428955__480.jpg" alt="ES bloggr">
    <!-- <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
       <span class="mx-2 text-white">Vue 3 Starter</span>
    </h1> -->
  </div>
</template>

<script>
export default {
  name: 'Home'
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
