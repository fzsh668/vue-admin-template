<template>
    <el-row style="padding:15px">
        <btnMenu>

        </btnMenu>
        <el-form label-width="180px" :model="project" ref="project">
                <el-row class="row">
                   
                <el-form-item label="序号"
                :rules="[
                    { required: true, message: '请输入建档年', trigger: 'blur' },
                ]"
                >
                <el-input v-model="project.number">

                </el-input>
                </el-form-item>
      
                <el-form-item label="档案文件夹名称">
                    <el-input v-model="project.name">

                    </el-input>

                </el-form-item>
                <el-form-item label="项目/资质/补贴">
                    <el-input v-model="project.project">

                    </el-input>
                </el-form-item>
                </el-row>
                <el-row class="row">
               

                <el-form-item label="项目经理">
                    <el-input v-model="project.manager">

                    </el-input>
                </el-form-item>
        
                <el-form-item label="项目执行期">
                    <el-input v-model="project.phase">

                    </el-input>
                </el-form-item>
               
          
           
                <el-form-item label="项目牵头/课题牵头/参与/独家">
                    <el-input v-model="project.leader">

                    </el-input>
                </el-form-item>
            
   
        </el-row>

        <el-row>
                <el-row class="row">
                    <el-form-item label="归档档案阶段">
                    <el-input v-model="project.stage">

                    </el-input>
                    </el-form-item>
                    <el-form-item label="预计检查时间（年月）">
                    <el-input v-model="project.duration">

                    </el-input>
                </el-form-item>

                <el-form-item label="归档时间（年月日）">
                    <el-input v-model="project.archiveTime">

                    </el-input>
                </el-form-item>
                </el-row>

                <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="21" :xl="18">
                        <el-form-item label="电子档案缺失及原因">
                            <el-input
                            type="textarea"
                            :rows="6"
                            placeholder="请输入内容"
                            v-model="project.eaMiss">
                            </el-input>
                        </el-form-item>
                </el-col>
                
               
                </el-row>

                <el-row>

                    <el-col :xs="24" :sm="24" :md="24" :lg="21" :xl="18">
                        <el-form-item label="纸质档案缺失及原因">
                            <el-input
                            type="textarea"
                            :rows="6"
                            placeholder="请输入内容"
                            v-model="project.paMiss">
                            </el-input>
                        </el-form-item>
                </el-col>
                </el-row>
        </el-row>

       
        
    </el-form>
</el-row>
</template>
<script>
import btnMenu from '@/components/btns/btnMenu.vue';
export default {
    data(){
        return{
            project:{
                number:'123',
                unit:'',//单位
                department:'',
                name:'',
                project:'',
                manager:'',//项目经理
                phase:0,//项目执行期
                leader:'',//项目牵头/课题牵头/参与/独家
                stage:'',//阶段
                duration:0,//时长
                archiveTime:'',
                eaMiss:'',//电子档案缺失及原因
                paMiss:'',
                note:'',//备注

            }
        }
      
    },
    components:{
        btnMenu,
    },
    methods:{
    }
}
</script>