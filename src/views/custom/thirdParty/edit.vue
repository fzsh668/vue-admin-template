<template>
    <el-row style="padding:15px">
        <btnMenu>

        </btnMenu>
        <el-form label-width="80px" :model="custom" ref="custom">
           
             
            <div class="pageTitle">填写政府客户档案</div>
                <el-row class="row">
                   
                <el-form-item label="建档年"
                :rules="[
                    { required: true, message: '请输入建档年', trigger: 'blur' },
                ]"
                >
                    <el-date-picker
                            v-model="custom.year"
                            type="year"
                            placeholder="选择年">
                            </el-date-picker>
                </el-form-item>
      
                <el-form-item label="单位">
                    <el-input v-model="custom.unit">

                    </el-input>

                </el-form-item>
                <el-form-item label="部门">
                    <el-input v-model="custom.department">

                    </el-input>
                </el-form-item>
               

                <el-form-item label="姓名">
                    <el-input v-model="custom.name">

                    </el-input>
                </el-form-item>
        
                <el-form-item label="代码">
                    <el-input v-model="custom.code">

                    </el-input>
                </el-form-item>
               
          
           
                <el-form-item label="星级">
                    <el-input v-model="custom.star">

                    </el-input>
                </el-form-item>
            
   
        </el-row>

        <el-row>
                <div class="pageTitle">基本信息</div>
                <el-row class="row">
                    <el-form-item label="性别">
                    <el-input v-model="custom.sex">

                    </el-input>
                    </el-form-item>
                    <el-form-item label="职务">
                    <el-input v-model="custom.post">

                    </el-input>
                </el-form-item>

                <el-form-item label="电话">
                    <el-input v-model="custom.mobile">

                    </el-input>
                </el-form-item>


                <el-form-item label="手机">
                    <el-input v-model="custom.phone">

                    </el-input>
                </el-form-item>

                <el-form-item label="办公地点">
                    <el-input v-model="custom.address">

                    </el-input>
                </el-form-item>


                <el-form-item label="职能">
                    <el-input v-model="custom.function">

                    </el-input>
                </el-form-item>
                </el-row>
                <el-row class="row">
            
                <el-form-item label="专项">
                    <el-input v-model="custom.special">

                    </el-input>
                </el-form-item>
                <el-form-item label="专项类别">
                    <el-input v-model="custom.specialCategory">

                    </el-input>
                </el-form-item>
                <el-form-item label="从业经历">
                    <el-input v-model="custom.experience">

                    </el-input>
                </el-form-item>

                <el-form-item label="家庭住址">
                    <el-input v-model="custom.homeAddress">

                    </el-input>
                </el-form-item>

                <el-form-item label="出生日期">
                
                    <el-date-picker
                        v-model="custom.birthday"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="籍贯">
                    <el-input v-model="custom.nativePlace">

                    </el-input>
                </el-form-item>
                </el-row>
                <el-row class="row">
                    <el-form-item label="学历">
                    <el-input v-model="custom.rofs">

                    </el-input>
                </el-form-item>
                <el-form-item label="健康状况">
                    <el-input v-model="custom.health">

                    </el-input>
                </el-form-item>
                </el-row>
        </el-row>

        <el-row>
                    <div class="pageTitle">性格及兴趣爱好</div>
                    <el-row class="row">
                        <el-form-item label="性格特点">
                            <el-input v-model="custom.nature">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="兴趣">
                            <el-input v-model="custom.interest">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="喜好">
                            <el-input v-model="custom.like">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="饮食特点">
                            <el-input v-model="custom.eats">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="独特禁忌">
                            <el-input v-model="custom.taboo">
                            </el-input>
                        </el-form-item>
                        
                    </el-row>
        </el-row>

        <el-row>
                    <div class="pageTitle">社交关系情况</div>
                    <el-row class="row">
                        <el-form-item label="第一次会面">
                            <el-input v-model="custom.FirstMeeting">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="家庭情况">
                            <el-input v-model="custom.family">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="对企业的态度和成见">
                            <el-input v-model="custom.aapte">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="社会关系">
                            <el-input v-model="custom.hris">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="体制内关系">
                            <el-input v-model="custom.rwts">
                            </el-input>
                        </el-form-item>
                       
                    </el-row>
        </el-row>
        <el-row>
            <div class="pageTitle">
                备注
            </div>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="21" :xl="18">
                    <el-form-item label="备注">
                    <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="请输入内容"
                    v-model="custom.note">
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
            custom:{
                year:'',
                unit:'',//单位
                department:'',
                name:'',
                code:'',
                star:'',
                sex:0,
                post:'',
                mobile:'',
                phone:'',
                address:'',
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
        }
      
    },
    components:{
        btnMenu,
    },
    methods:{
    }
}
</script>