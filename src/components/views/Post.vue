<script setup>
import PostInfo from '../PostInfo.vue'
import Markdown from 'vue3-markdown-it'
import { ProgressiveImage } from "vue-progressive-image"
</script>

<template>
    <div>
        <h1>{{ post.title }}</h1>
        <PostInfo :post="post" />
        <ProgressiveImage
            lazy-placeholder
            :placeholder-src="post.image.data.attributes.formats.thumbnail.url"
            :src="post.image.data.attributes.url"
        />
        <p>Author by <a :href="post.image.data.attributes.caption">{{ post.image.data.attributes.alternativeText }}</a></p>
        <Markdown :source="post.content" />
        <vue-utterances repo="Yubo0826/vue-blog" theme="github-light" issue-term="title" />
    </div>
</template>
<script>
import axios from 'axios'
import VueUtterances from "vue-utterances"
import 'highlight.js/styles/base16/eva.css';

export default {
    components: {
        VueUtterances
    },
    data() {
        return {
            post: {}
        }
    },
    created() {
        const post_id = this.$route.params.id
        axios.get(this.$strapiURL + `/api/articles/${post_id}?populate=*`)
            .then((res) => {
                this.post = res.data.data.attributes
                window.document.title = this.post.title
            })
    },
    methods: {

    },
}
</script>
<style>
    pre code.hljs{
        border-radius: 8px;
    }
</style>