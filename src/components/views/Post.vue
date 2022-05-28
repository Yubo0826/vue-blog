<script setup>
import PostInfo from '../PostInfo.vue'
import Markdown from 'vue3-markdown-it'
</script>

<template>
    <div>
        <h1>{{ post.title }}</h1>
        <PostInfo :post="post" />
        <img :src="postCoverImgUrl(post.image.data.attributes.url)" class="image" style="width:100%;height:40%;object-fit:cover">

    </div>
</template>
<script>
import axios from 'axios'

export default {
    // components: {
    //     Markdwon
    // },
    data() {
        return {
            post: {}
        }
    },
    created() {
        const post_id = this.$route.params.id
        axios.get(`https://yubo-blog-strapi.herokuapp.com/api/articles/${post_id}?populate=*`)
            .then((res) => {
                this.post = res.data.data.attributes
                console.log(res);
            })
    },
    methods: {
        postCoverImgUrl(imgUrl) {
            const domain = 'https://yubo-blog-strapi.herokuapp.com'
            return domain + imgUrl
        },
    },
}
</script>
<style>
    
</style>