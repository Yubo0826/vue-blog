<template>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
        <el-row :gutter="20">
            <el-col 
                :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
                v-for="post in posts"
                :key="post.id"
                >
                <el-card :body-style="{ padding: '0px' }">
                    <ProgressiveImage
                        lazy-placeholder
                        :placeholder-src="post.attributes.image.data.attributes.formats.thumbnail.url"
                        :src="post.attributes.image.data.attributes.url"
                    />
                    <div style="padding: 15px;">
                        <h2 class="title" @click="$router.push(`/posts/${post.id}`)">{{ post.attributes.title }}</h2>
                        <!-- <Markdown :source="post.attributes.content"/> -->
                        <p style="line-height:1.7rem">{{ handlePost(post.attributes.content) }}</p>
                        <div>
                            <el-button color="#626aef" size="small" round
                                v-for="tag in post.attributes.tags.data"
                                :key="tag.id"
                            >
                                {{ tag.attributes.name }}
                            </el-button>
                        </div>
                        <div>
                            <PostInfo :post="post.attributes" />
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <div v-if="loading">
            <img src="../../assets/Eclipse-1s-45px.svg" alt="">
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Markdown from 'vue3-markdown-it'
import PostInfo from '../PostInfo.vue'
import { ProgressiveImage } from "vue-progressive-image"

export default {
    components: {
        Markdown,
        PostInfo,
        ProgressiveImage
    },
    data() {
        return {
            posts: [],
            busy: false,
            loading: false,
            postSize: 0,
        }
    },
    created() {

    },
    methods: {
        handlePost(txt) {
            const len = 40      // 文章預覽字數
            if(txt != null && txt != '') {
                return txt.replace(/[#`*]/g, '').substring(0, len) + '...'
            }
            return ''
        },
        loadMore() {
            // busy false 執行loadMore；busy true 不執行
            this.busy = true
            this.loading = true
            this.postSize += 6
            axios.get(this.$strapiURL + `/api/articles?populate=*&pagination[pageSize]=${this.postSize}`)
                .then((res) => {
                    // if 加載完畢
                    if(JSON.stringify(this.posts) === JSON.stringify(res.data.data)) {
                        this.busy = true
                        this.loading = false
                    } else {
                        this.posts = res.data.data
                        this.busy = false
                        this.loading = false
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
}
</script>
<style scoped>
    .title:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>