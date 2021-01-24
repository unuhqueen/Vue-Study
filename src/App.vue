<template>
  <div id="app">
    <!-- Header Component 삽입 -->
    <Header />
    <!-- router를 이용하여 이 부분만 화면을 갱신함 -->
    <div id = "content" class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: 'App',
  //import한 Component를 넣어줌
  components: {
    Header,
  }
}
</script>

<style>
</style>
