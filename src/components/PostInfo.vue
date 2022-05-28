<template>
    <div>
        <el-avatar :size="50" src="https://i.ytimg.com/vi/td_YpM2mowo/maxresdefault.jpg" />
        <div style="font-weight:200">David Chou</div>
        <div>{{ post.publishedAt }}</div>
        <div> {{ readingTime(post.content) }} min read</div>
    </div>
</template>
<script>
export default {
    props: [ 'post' ],
    methods: {
        readingTime(txt) {
            const wpm = 60     // 粗估一分鐘讀幾個字
            const filterPost = txt.replace(/[#`*]/g, '')
            const words = filterPost.trim().split(/\s+/).length
            return Math.ceil(words / wpm)
        }
    },
}
</script>
<style>
    
</style>