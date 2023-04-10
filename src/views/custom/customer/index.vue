<template>
    <div class="main">
        <btnMenu
        :showSerachInfo="showSerachInfo"
        @insertPage="insertPage"
        >

        </btnMenu>
        <el-row style="display: flex;">
            <div style="width: 120px; flex-shrink: 0;">
                            <el-tree 
                            :data="cusTypes"
                            :props="defaultProps"
                            @node-click="handleNodeClick"
                            style="width:100%; height: 100%;"
                            >
                            <span class="custom-tree-node" slot-scope="{ data }">
                                    <div style="">
                                    <i :class="data.icon" style="font-size:16px; margin-right: 5px;"></i>{{ data.name}}
                                    </div>
                            </span>
                            </el-tree>
            </div>
            <el-table
                :data="projectData"
                style="width: 100%"
                @row-dblclick="dblclick"
            >
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
                prop="year"
                label="建档年"
                width="">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位"
                width="">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="">
            </el-table-column>
            <el-table-column
                prop="star"
                label="星级"
                width="">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="手机号码"
                width="">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="职务"
                width="">
            </el-table-column>
            <el-table-column
                prop="address"
                label="办公地点"
                width="">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button> -->
                    <i class="el-icon-edit"></i>
                    <i class="el-icon-delete" style="margin: 0 8px;"></i>
                    <i class="el-icon-more"></i>
                </template>
                </el-table-column>


            </el-table>
        </el-row>
    </div>
</template>
<script>
import btnMenu from '@/components/btns/btnMenu.vue';
export default {
    data(){
        return{
            showSerachInfo:true,
            projectData:[
                {
                    year:'2023',
                    unit:'公司',//单位
                    department:'财务',
                    name:'测试',
                    code:'123',
                    star:'5',
                    sex:0,
                    post:'',
                    mobile:'',
                    phone:'15858856988',
                    address:'武汉市',
                    function:'',
                    special:'',//专项
                    specialCategory:'',//专项类别
                    experience:'',//从业经历
                    homeAddress:'',
                    birthday:'',
                    nativePlace:'',
                    rofs:'',//学历
                    health:'',

                    nature:'',
                    interest:'',
                    like:'',//喜好
                    eats:'',
                    taboo:'',//独特禁忌

                    FirstMeeting:'',
                    family:'',//家庭情况
                    aapte:'',//
                    hris:'',//社会关系
                    rwts:'',

                    note:'',//备注   
                }
            ],
            cusTypes:[
                {
                    id:'1',
                    name:'地区',
                    icon:'el-icon-house',
                },
                {
                    id:'2',
                    name:'单位',
                    icon:'el-icon-user',
                },
                {
                    id:'3',
                    name:'国家级',
                    icon:'el-icon-user',
                },
                {
                    id:'4',
                    name:'省级',
                    icon:'el-icon-user',
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'name'
            },
        }
    },
    components:{
        btnMenu,
    },
    methods:{
        insertPage(){
            this.$router.push({
                name:'customEdit',
            })
        },
        handleNodeClick(){

        },
        dblclick(){
            this.$router.push({
                name:'customEdit',
            })
        }
    }
}
</script>