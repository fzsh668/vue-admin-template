<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.main{
  width: 100%;
  height: 100%;
}
.el-table{
  height: 100%;
}
 .el-date-editor{
  width: 100% !important;
  .el-input{
    width: 100% !important;
  }
}
.el-input__icon{
  height: 30px;
  line-height: 30px;
}
.el-input__inner{
  width: 160px;
  height: 30px;
  line-height: 30px;
}
.el-form-item__label{
  display: flex;
  height: 30px;
  line-height: 15px;
  justify-content: right;
    align-items: center;
}
.el-form-item__content{
  line-height: 30px;
}
.pageTitle{
  padding: 0 0 15px 0;
}
.row{
  display: flex;
  flex-wrap: wrap;
}
.el-table{
  .el-table__cell{
    padding: 5px 0;
  }
}
.custom-tree-node{
  font-size: 14px;
  .el-icon-user-solid{
    font-size: 12px;
  }
}
.cell{
  i{
    font-size: 18px;
  }
}

</style>
