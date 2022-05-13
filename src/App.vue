<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import SearchPost from './components/SearchPost.vue';
</script>

<template>
  <div>
    <Navbar />
    <h1>yubo0826 Blog</h1>
    <h2>I write articles about Web Development</h2>
    <SearchPost />
    <div class="flex justify-space-between mb-4">
      <el-button
        v-for="tag in tags"
        :key="tag"
        type="primary"
        size="small"
        text
        bg
        >{{ tag }}</el-button
      >
    </div>
    <div>
      
    </div>
    <main></main>
    <aside></aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['HTML', 'CSS', 'VUE']
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px;
}
</style>
