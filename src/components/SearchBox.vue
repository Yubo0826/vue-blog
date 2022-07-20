<template>
    <div id="searchbox">
        <div class="close" @click="$emit('close')"></div>
        <el-input v-model="searchWord" class="w-50 m-2" placeholder="Type something">
            <template #prefix>
                <el-icon class="el-input__icon"><search /></el-icon>
            </template>
        </el-input>
        <!-- 給以後的我: 把 post list 和 搜尋 分離成兩個元件 -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #searchbox {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 150px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 5;
    }
    .close {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        cursor: pointer;
    }
    .close:hover {
        opacity: 1;
    }
    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }
    .close:before {
        transform: rotate(45deg);
    }
    .close:after {
        transform: rotate(-45deg);
    }

</style>