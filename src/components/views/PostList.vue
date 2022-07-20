<template>
    <h1>David's Blog</h1>
    <h2>I write articles or take notes about Web Development</h2>
    <el-input v-model="searchWord" class="w-50 m-2" placeholder="Type something" @click="searchBox = true">
        <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
        </template>
    </el-input>
    <transition>
        <SearchBox @close="closeSearchBox" v-if="searchBox" />
    </transition>
    <div class="flex justify-space-between mb-4">
    <button
        v-for="(item, index) in category"
        :key="item"
        class="filter-category-btn"
        :class="{active: categoryInActive[index]}"
        @click="handleFilterCategoryBtn(index)"
        >{{ item }}</button
    >
    </div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
        <el-row :gutter="20">
            <el-col 
                :xs="24" :sm="24" :md="12" :lg="8" :xl="8"
                v-for="post in filterPostsByCategory"
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
import SearchBox from '../SearchBox.vue'
import { ProgressiveImage } from "vue-progressive-image"

export default {
    components: {
        Markdown,
        PostInfo,
        ProgressiveImage,
        SearchBox
    },
    computed: {
        filterPosts() {
            return this.posts.filter(el => el.attributes.title.includes(this.searchWord))
        },
        filterPostsByCategory() {
            if(this.currentCategory) {
                return this.posts.filter(el => el.attributes.title.includes(this.currentCategory))
            }
            return this.posts
        }
    },
    data() {
        return {
            posts: [],
            busy: false,
            loading: false,
            postSize: 0,
            searchWord: '',
            category: ['Front-End', 'Javascript', 'Vue', 'API工具'],
            categoryInActive: [false, false, false, false],
            currentCategory: null,
            searchBox: false
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
        },
        handleFilterCategoryBtn(index) {
            if(this.categoryInActive[index]) {
                this.categoryInActive[index] = !this.categoryInActive[index]
                this.currentCategory = null
            } else {
                this.categoryInActive.forEach((el, ins, arr) => {
                    arr[ins] = false
                })
                this.categoryInActive[index] = true
                this.currentCategory = this.category[index]
            }
        },
        closeSearchBox() {
            this.searchBox = false
            console.log(this.searchBox);
        }
    },
}
</script>
<style scoped>
    .title:hover {
        text-decoration: underline;
        cursor: pointer;
    }
    .filter-category-btn {
        padding: 8px;
        margin: 5px;
        color: #409eff;
        background-color: #f5f7fa;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
    }
    .active {
        color: #fff;
        background-color: #409eff;
    }
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.25s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
    
</style>