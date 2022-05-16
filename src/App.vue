<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <router-view></router-view>


    <!-- main -->
    <el-row :gutter="40">
      <el-col :span="18">
        <router-view></router-view>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card" style="text-align: center">
          <template #header>
            <el-avatar :size="200" src="https://i.ytimg.com/vi/td_YpM2mowo/maxresdefault.jpg" />
          </template>
          <div style="font-weight:200">David Chou</div>
          <div>Web Front End</div>
          <div>
            <img src="./assets/github-brands.svg" alt="" class="profilo-icon">
            <img src="./assets/linkedin-brands.svg" alt="" class="profilo-icon">
            <img src="./assets/instagram-brands.svg" alt="" class="profilo-icon">
          </div>
        </el-card>
      </el-col>
    </el-row>

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
.image {
  width: 100%;
  display: block;
}
.profilo-icon {
  width: 25px;
  height: 25px;
}
</style>
