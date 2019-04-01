<template>
    <div align="center">
		<div align="center">
			 <div align="center">
			  	<el-select class="two"
          style="width:200px;"
          v-model="listQuery.projectName"
          @change="selectProNameChange"
          placeholder="请选择">
			  	  <el-option v-for="item in genderOptions" :key="item.label" :label="item.label" :value="item.label"></el-option>
				  </el-select>
					<el-button type="text" width="100px" @click="runTestCases" class="five">Run</el-button>
				  <el-select class="four"
          style="width:200px;"
          v-model="listQuery.planid"
          @change="planTimeChange"
          placeholder="请选择">
				     <el-option v-for="item in planTimeList" :key="item.id" :label="item.plantime" :value="item.id"  selected></el-option>
				  </el-select>
		   </div>
			 <div v-if="progress.showPrise" style="">
				 <el-progress :text-inside="true" :stroke-width="18" :percentage="progress.percentage" style="width: 95%;">
         </el-progress>
			 </div>
		</div>
    <el-table
    :data="tableData5"
    row-style="height: 1px"
    border
    row-key="interfaceName"
		:expand-row-keys="expands"
		@row-click="rowClick"
		style="width: 95%;"
		:row-class-name="selectOneClass">
        <el-table-column type="expand">
            <template slot-scope="props">
               <el-table
							      style="width: 100%"
                    :data="props.row.result"
                    :row-class-name="selectTwoClass"
                    :show-header=false>
                    <el-table-column
                        :show-overflow-tooltip="true"
												fixed width="550"
                        label="">
                        <template slot-scope="oscope">{{oscope.row.testcaseid}}_{{ oscope.row.testpoint }}</template>
                    </el-table-column>
                    <el-table-column
												fixed width="400"
                        label="">
                        <template slot-scope="oscope">{{ oscope.row.resultSign | TypeFilter }}</template>
                    </el-table-column>
										<el-table-column fixed width="130"  label="view" prop="errordes">
										    <template slot-scope="props">
													<el-popover placement="bottom"
													title="异常信息"
													width="600"
													trigger="click"
													content="">
													<div class="divcss555">
															{{ props.row.errordes }}
													</div>
														<el-button slot="reference">查看详细</el-button>
													</el-popover>
											</template>
										</el-table-column>
										<el-table-column fixed width="100"  label="log" >
										  <template slot-scope="scope">
												 <el-button type="text" @click="downLogFile(scope.row.interfacename)">down</el-button>
											</template>
										</el-table-column>
               </el-table>
          </template>
        </el-table-column>
        <el-table-column fixed width="600"   label="Test Group/Test case"  prop="interfaceName">
        </el-table-column>
        <el-table-column fixed width="100" label="total" prop="total">
        </el-table-column>
        <el-table-column fixed width="100" label="pass"  prop="success">
        </el-table-column>
        <el-table-column fixed width="100" label="fail"  prop="fail">
        </el-table-column>
        <el-table-column fixed width="100" label="error" prop="error">
        </el-table-column>
        <el-table-column fixed width="130" label="view"  prop="">
        </el-table-column>
        <el-table-column fixed width="103" label="log" >
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reqPlanTimeList, reqTestReport, reqDownLogFile, reqRunTestcases ,reqCheckRunProgressOrState} from '../api/testmgr';
import { clearInterval, setInterval } from 'timers';
export default {
  data() {
    return {
			progress:{
						showPrise: false,
            percentage: 0,
            tokenId: null,
            startTime: null,
            timer: null
			},
			genderOptions: [{
            value: "1",
            label: "steam亲子教育"
          },
          {
            value: "2",
            label: "小红巢"
          },
          {
            value: "0",
            label: "请选择"
          }
        ],
      tableData5:
	  [
       {
		"error": 1,
		"fail": 1,
		"interfaceName": "/featured/index/configs/pageQueryPositionShows",
		"result": [{
			"errordes": "ffffsss",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/pageQueryPositionShows",
			"resultSign": "1",
			"testcaseid": "home_page_1",
			"testpoint": "\u7528\u6237\u6d4f\u89c8\u9996\u9875-\u70ed\u95e8\u63a8\u8350\u8fd0\u8425\u4f4d\u914d\u7f6e\u5185\u5bb9"
		}],
		"success": 1,
		"total": 3
	   }, {
		"error": 0,
		"fail": 0,
		"interfaceName": "/featured/index/configs/queryShowConfigs",
		"result": [{
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_page_1",
			"testpoint": "测试场景1"
		}],
		"success": 8,
		"total": 8
	   }, {
		"error": 0,
		"fail": 0,
		"interfaceName": "/match-service/member/apply",
		"result": [{
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_1",
			"testpoint": "测试场景6"
		}],
		"success": 10,
		"total": 10
	   }, {
		"error": 0,
		"fail": 0,
		"interfaceName": "/match-service/member/apply/cancel",
		"result": [{
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply/cancel",
			"resultSign": "0",
			"testcaseid": "match_apple_1",
			"testpoint": "测试场景16"
		}],
		"success": 2,
		"total": 2

	   }],
    expands:[],
		planTimeList:[
			{
				id: 1,
			  plantime: '2018-08-22 11:10:02'
			}
		],
	  listQuery: {
                currentPage: 1,
                projectName: 'steam亲子教育',
                planid: 657,
                pageSize: 10,
                nickName: null,
                phone: null,
                sex: null,
                followState: null,
                followBeginTime: null,
                followEndTime: null,
                registerBeginTime: null,
                registerEndTime: null,
                createBeginTime: null,
                createEndTime: null,
                registerState: null,
                pointLessThan: null,
                pointGreatThan: null,
                orderType:'NORMAL'//按用户积分排序 默认正常
           },
	  curValue:'',
	  value:"已取消"
    };
  },
  filters:{
      TypeFilter(val){
        if(val=='0'){
            return 'pass'
        }else if(val=='1'){
            return 'fail'
        }else if(val=='2'){
            return 'error'
        }else{
            return '未知'
        }
      }
  },
  created() {
    // alert("litaojun-created");
    this.getPlanTimeList(this.listQuery.projectName);
  },

  methods:{
		  downLogFile(interfaceName)
			{
				reqDownLogFile({planId: this.listQuery.planid,interfacename: interfaceName}).then(res => {
					//alert("downFile")
					//alert(res.data)
					this.download(res.data,interfaceName+".log")
				})
			},
			download (data,name) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name)
        document.body.appendChild(link)
        link.click()
    },
			runTestCases()
			{
           reqRunTestcases({projectname: this.listQuery.projectName}).then(res => {
          // alert("litaojun-created-1");
          if(res.data.sign==='000000'){
              this.progress.tokenId = res.data.token,
              this.progress.startTime = res.data.starttime
              this.progress.showPrise = true
              this.progress.percentage = 0
              this.progress.timer = setInterval(this.checkRunProgressOrState,5000)
              // this.planTimeList.push(this.progress.startTime)
          }
        })
      },
      checkRunProgressOrState()
      {
        reqCheckRunProgressOrState({projectname: this.listQuery.projectName,
                                    token: this.progress.tokenId}).then(res => {
           if(res.data.status==1)
           {
             if(this.progress.percentage<96)
                this.progress.percentage = this.progress.percentage + 1
           }
           else if(res.data.status==2)
           {
             //alert(this.progress.percentage)
             this.progress.percentage=100
             clearInterval(this.progress.timer)
             this.selectProNameChange(this.listQuery.projectName)
           }
        })
      },
      selectProNameChange(optionValue)
      {
           //alert(optionValue)
           this.getPlanTimeList(optionValue)
      },
      planTimeChange(optionValue)
      {
            //alert(optionValue)
            this.listQuery.planid=optionValue
            this.getTestReportByPlanId(optionValue)

      },
      getPlanTimeList(proName)
      {
          //alert("litaojun-created-0");
          const data = {
                            projectname: proName
                       };
          reqPlanTimeList(data).then(res => {
          if(res.data.code==='000000'){
            //alert("litaojun-created-2");
            this.planTimeList = res.data.listplan;
            let num = this.planTimeList.length
            if(num>0)
            {
               this.listQuery.planid=this.planTimeList[num-1].id;
               alert(JSON.stringify(this.listQuery.planid))
               this.getTestReportByPlanId(this.planTimeList[num-1].id)
            }
            else{
               this.tableData5=[]
               this.planTimeList=[]
            }
          }
          })
      },
      getTestReportByPlanId(planid)
      {
          reqTestReport({'planid': planid}).then(res => {
          // alert("litaojun-created-1");
          if(res.data.code==='000000'){
            // alert("litaojun-created-2");
            this.tableData5=res.data.testrst
            // alert(JSON.stringify(this.listQuery.id))
          }
          })
      },
      editInfo(interfaceName){  //编辑
          this.$router.push({ name: 'Elementtab', params: { plan: interfaceName }})
      },
      selectOneClass(row, rowIndex){
        if(row.row.total == 0)
           return 'notTestClass'
        if(row.row.total == row.row.success)
            return 'passClass';
        else if(row.row.fail>0)
            return 'failClass';
        else
            return 'errorClass';
      },
      selectTwoClass(row, index){
        if(row.row.resultSign == '0')
            return 'passCase'
        else if(row.row.resultSign=='1')
            return 'failCase'
        else
            return 'errorCase'
      },
	  handleFilter(curValue){
		     this.value=curValue
             this.curValue=curValue
	  },
      rowClick(row, event, column) {   //控制展开行
        // var NoIndex = column.type.indexOf("expand");
        //if (NoIndex == 0 && row.child.length <= 0) {
        if (row.result.length <= 0) {
            this.expands = [];
            return;
        }
        if (row.result.length > 0) {
            Array.prototype.remove = function(val) {
            let index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
            };
            if (this.expands.indexOf(row.interfaceName) < 0) {  //确保只展开一行
                this.expands.push(row.interfaceName);
            } else {
                this.expands.shift();
            }
        } else {
            return;
        }
       }
      }
    }
</script>

<style>
/* -- report ------------------------------------------------------------------------ */
#show_detail_line {
  /*  margin-top: 3ex;
    margin-bottom: 1ex; */
}
#casetable {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #777;
    text-align:center;
}
.casetabletd {
    border: 1px solid #777;
    padding: 2px;
}
    #buttontab {
	        text-align:center;
	    }

.result_table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #777;
    text-align:center;
}
#interface_table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #777;
    text-align:center;
}
#header_row {
    font-weight: bold;
    color: white;
    background-color: #777;
}
.result_table_td {
    border: 1px solid #777;
    padding: 2px;
}
#interface_table td {
    border: 1px solid #777;
    padding: 2px;
}
#total_row  { font-weight: bold; }
.statusTableOne  { color: #7B68EE;font-size: 5px; }
.statusTableTwo  { color: #00CED1;font-size: 10px; }
.statusTableThree  { color: red;font-size: 15px; }
.el-table .passClass  { background-color: #6c6; }
.el-table .failClass  { background-color: #c60; }
.el-table .errorClass { background-color: #c00; }
.el-table .notTestClass { background-color: rgb(230, 215, 86); }
.interfaceClass  { background-color: #1E90FF; }
.el-table .passCase   { color: #6c6; }
.el-table .failCase   { color: #c60; font-weight: bold; }
.el-table .errorCase  { color: #c00; font-weight: bold; }
.el-table .notTestCase  { color: rgb(134, 19, 82); font-weight: bold; }
.hiddenRow  { display: none; }
.testcase   { margin-left: 2em; }
</style>

<style type="text/css">
.one
{
position:fixed;
left:10px;
top:20px;
}
.two
{
position:fixed;
top:10px;
left:150px;
}
.three
{
position:fixed;
left:380px;
top:20px;
}
.four
{
position:fixed;
top:10px;
left:420px;
}
.five
{
position:fixed;
top:10px;
left:370px;
}
.six
{
position:fixed;
top:10px;
left:850px;
}
</style>
<style type="text/css">
.clsInterface
{
position:fixed;
left:60000px;
width:1000
}
.clsCount
{
position:fixed;
left:150px;
width:100
}
.clsPass
{
position:fixed;
left:400px;
width:100
}
.clsFail
{
position:fixed;
width:100;
left:500px;
}
.clsError
{
position:fixed;
width:100;
left:500px;
}
.clsView
{
position:fixed;
width:100;
left:500px;
}
.clsRun
{
position:fixed;
width:100;
left:500px;
}
</style>
