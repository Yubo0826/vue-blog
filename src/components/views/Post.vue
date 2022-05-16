!<template lang="">
    <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
        <el-card :body-style="{ padding: '0px' }">
            <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="image" alt="">
            <div style="padding: 15px;">
            <h2>無關鍵字賦值? | 整理無關鍵字、let、var的不同</h2>
            <p style="letter-spacing: 1.5px;">var是全域變數宣告?這句可能你覺得很對的一句話，實際上是個的錯誤...</p>
            <div>
                <el-button color="#626aef" size="small" round>Vue</el-button>
                <el-button color="#626aef" size="small" round>Javascript</el-button>
            </div>
            <div >
                <el-avatar size="50" src="https://i.ytimg.com/vi/td_YpM2mowo/maxresdefault.jpg" />
                <div style="font-weight:200">David Chou</div>
                <div>Tue May 03 2022</div>
                <div> 4 min read</div>
            </div>
            </div>
        </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content bg-purple-light" style="height: 50px;background-color:brown"/></el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content bg-purple" style="height: 50px;background-color:cadetblue"/></el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8"><div class="grid-content bg-purple-light" style="height: 50px;background-color:brown"/></el-col>
    </el-row>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>