<template>
    <div class="btnMenu">
        <div>
            <el-button type="primary" size="mini" @click="insertPage">新增</el-button>
            <el-button type="primary" size="mini">修改</el-button>
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="warning" size="mini">导入</el-button>
            <el-button type="warning" size="mini">导出</el-button>
        </div>
        <div>
            <el-input
                    v-show="showSerachInfo"
                    size="mini"
                    placeholder="请输入内容"
                    @clear="clearSearchInfo"
                    v-model.trim="searchInfo"
                    @keyup.enter.native="loadInfo"
                    @input="inputSearch"
                    >
                    <i slot="suffix"
                     class="el-icon-search"
                     style="font-size: 16px;"
                     @click="loadInfo"
                    
                     >
                    </i>
                </el-input>
        </div>
       
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchInfo:'',
        }
    },
    props:{
        showSerachInfo:false,
    },
    methods:{
        insertPage(){
            this.$emit('insertPage');
        },
        clearSearchInfo(){

        },
        loadInfo(){

        },
        inputSearch(){

        },
    }
}
</script>
<style lang="scss">
    .btnMenu{
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    .el-input__suffix{
        display: flex;
        align-items: center;
    }
</style>