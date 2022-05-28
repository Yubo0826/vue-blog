<script setup>

</script>
<template>
    <div>
        <h1>David's Blog</h1>
        <h2>I write articles or take notes about Web Development</h2>
        <el-input v-model="input4" class="w-50 m-2" placeholder="Type something">
            <template #prefix>
            <el-icon class="el-input__icon"><search /></el-icon>
            </template>
        </el-input>
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>