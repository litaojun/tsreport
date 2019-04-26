<template>
    <el-table
    :data="interfaceProxyTscase"
    border
    row-key="interfaceName"
		:expand-row-keys="expands"
		@row-click="rowClick"
		style="width: 88%;"
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
                        prop="title"
                        label="">
                    </el-table-column>
                    <el-table-column
												fixed width="150"
                        label="">
                        <template slot-scope="scope">
                          <el-button type="text" @click="downFile(scope.row.fmtReqPath,scope.row.localName)">down</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column fixed width="150" label="" >
                          <template slot-scope="scope">
                              <el-button type="text" @click="downFile(scope.row.fmtRspPath,scope.row.localName)">down</el-button>
                          </template>
                  </el-table-column>
                  <el-table-column fixed width="147" >
                          <template slot-scope="scope">
                              <el-button type="text" @click="downFile(scope.row.casePath,scope.row.localName)">down</el-button>
                          </template>
                  </el-table-column>
               </el-table>
          </template>
        </el-table-column>
        <el-table-column fixed width="600"   label="接口地址"  prop="interfaceName">
        </el-table-column>
        <el-table-column fixed width="150" label="请求json格式" prop="">
        </el-table-column>
        <el-table-column fixed width="150" label="响应json格式"  prop="">
        </el-table-column>
        <el-table-column fixed width="150" label="测试用例"  prop="">
        </el-table-column>
    </el-table>
</template>

<script>
import { downProxyFile,reqProxyCaseData} from '../api/testmgr';
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
      interfaceProxyTscase:
	  [
       {
		     "interfaceName": "https://uat-steam-api.opg.cn/featured/index/configs/pageQueryPositionShows",
          "result": [{
            "title": "让MakeX成为青少年释放自我的舞台",
            "interfacename":"/featured/index/configs/pageQueryPositionShows",
            "fmtReqPath":"fmtReqPath",
            "fmtRspPath":"fmtRspPath",
            "casePath":"casePath",
            "localName":"abs.yml"
          }]
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
    // this.getPlanTimeList(this.listQuery.projectName);
    this.getInterfaceProxyTscase()
  },

  methods:{
      downFile(filePath,localName)
      {
        alert(filePath + localName)
        downProxyFile({"filePath":filePath}).then(res => {
          // alert("litaojun-created-1");
          this.download(res.data,localName)
          })
      },
      getInterfaceProxyTscase()
      {
          reqProxyCaseData({}).then(res => {
          // alert("litaojun-created-1");
          if(res.data.code==='000000'){
            // alert("litaojun-created-2");
            this.interfaceProxyTscase=res.data.caseDataList
            // alert(JSON.stringify(this.listQuery.id))
          }
          })
      },
      editInfo(interfaceName){  //编辑
          this.$router.push({ name: 'Elementtab', params: { plan: interfaceName }})
      },
      download(data,name) {
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
      selectOneClass(row, rowIndex){
        // if(row.row.total == 0)
        //    return 'notTestClass'
        // if(row.row.total == row.row.success)
        //     return 'passClass';
        // else if(row.row.fail>0)
        //     return 'failClass';
        // else
        //     return 'errorClass';
        return 'passClass'
      },
      selectTwoClass(row, index){
        // if(row.row.resultSign == '0')
        //     return 'passCase'
        // else if(row.row.resultSign=='1')
        //     return 'failCase'
        // else
        //     return 'errorCase'
        return 'passCase'
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
