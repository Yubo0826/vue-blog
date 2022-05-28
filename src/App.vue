<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from './components/Navbar.vue'
import 'element-plus/theme-chalk/display.css'
</script>

<template>
  <div>
    <Navbar />
    <router-view name="SearchPost"></router-view>

    <!-- main -->
    <el-row :gutter="40">
      <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
        <router-view></router-view>
      </el-col>

      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="hidden-sm-and-down">
        <router-view name="Profile"></router-view>
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
