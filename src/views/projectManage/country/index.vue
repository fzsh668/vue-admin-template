<template>
    <div>
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
                prop="number"
                label="序号"
                width="">
            </el-table-column>
            <el-table-column
                prop="name"
                label="文件夹名称"
                width="">
            </el-table-column>
            <el-table-column
                prop="project"
                label="项目/资质/补贴"
                width="">
            </el-table-column>
            <el-table-column
                prop="manager"
                label="项目经理"
                width="">
            </el-table-column>
            <el-table-column
                prop="phase"
                label="项目执行期"
                width="">
            </el-table-column>
            <el-table-column
                prop="stage"
                label="归档档案阶段"
                width="">
            </el-table-column>
            <el-table-column
                prop="duration"
                label="预计检查时间"
                width="">
            </el-table-column>

            <el-table-column
                prop="archiveTime"
                label="归档年月"
                width="">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
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
                number:'002',
                unit:'',//单位
                department:'',
                name:'政府',
                project:200,
                manager:'王经理',//项目经理
                phase:15,//项目执行期
                leader:'',//项目牵头/课题牵头/参与/独家
                stage:'第一阶段',//阶段
                duration:'2022-4-10',//时长
                archiveTime:'2022-4-11',
                eaMiss:'',//电子档案缺失及原因
                paMiss:'',
                note:'',//备注
                }
            ],
            cusTypes:[
                {
                    id:'1',
                    name:'河南',
                    icon:'el-icon-house',
                },
                {
                    id:'2',
                    name:'河北',
                    icon:'el-icon-user',
                },
                {
                    id:'3',
                    name:'江西',
                    icon:'el-icon-user',
                },
           
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
                name:'countryEdit',
            })
        },
        handleNodeClick(){

        },
        dblclick(){
            this.$router.push({
                name:'countryEdit',
            })
        }
    }
}
</script>