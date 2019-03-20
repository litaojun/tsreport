<template>
    <div id="table2">
       <el-table
        :data="tableData5"
        style="result_table"
		cell-style="result_table_td"
        stripe
        row-key="interfaceName"
		:expand-row-keys="expands"
		@row-click="rowClick"
		:row-class-name="selectOneClass">
        <el-table-column type="expand">
            <template slot-scope="props">
               <el-table
                    :data="props.row.result"
                    :row-class-name="selectTwoClass"
                    :show-header=false>
                    <el-table-column
                        :show-overflow-tooltip="true"
                        label="">
                        <template slot-scope="oscope">{{oscope.row.testcaseid}}_{{ oscope.row.testpoint }}</template>
                    </el-table-column>
                    <el-table-column
                        :show-overflow-tooltip="true"
                        label="">
                        <template slot-scope="oscope">{{ oscope.row.resultSign | TypeFilter }}</template>
                    </el-table-column>
               </el-table>
            </template>
        </el-table-column>
        <el-table-column  label="Test Group/Test case" prop="interfaceName">
        </el-table-column>
        <el-table-column label="Count" prop="total">
        </el-table-column>
        <el-table-column label="Pass" prop="success">
        </el-table-column>
        <el-table-column label="Fail" prop="fail">
        </el-table-column>
        <el-table-column label="Error" prop="error">
        </el-table-column>
        <el-table-column label="View" prop="">
          <template slot-scope="scope">
                <el-button type="primary" @click.stop="editInfo(scope.row.interfacename)">run</el-button>
            </template>
        </el-table-column>
        <el-table-column label="run">
            <template slot-scope="scope">
                <el-button type="primary" @click.stop="editInfo(scope.row.interfacename)">run</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>
<script>
 export default {
  data() {
    return {
      tableData5: [
  {
		"error": 0,
		"fail": 0,
		"interfaceName": "/featured/index/configs/pageQueryPositionShows",
		"result": [{
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/pageQueryPositionShows",
			"resultSign": "0",
			"testcaseid": "home_page_1",
			"testpoint": "\u7528\u6237\u6d4f\u89c8\u9996\u9875-\u70ed\u95e8\u63a8\u8350\u8fd0\u8425\u4f4d\u914d\u7f6e\u5185\u5bb9"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/pageQueryPositionShows",
			"resultSign": "0",
			"testcaseid": "find_page_cal_1",
			"testpoint": "\u7528\u6237\u6d4f\u89c8\u53d1\u73b0\u9875-\u8ba1\u7b97\u63a8\u8350\u5185\u5bb9"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/pageQueryPositionShows",
			"resultSign": "0",
			"testcaseid": "home_page_1",
			"testpoint": "\u7528\u6237\u6d4f\u89c8\u521b\u65b0\u5927\u8d5b-\u8ba1\u7b97\u5185\u5bb9\u5217\u8868"
		}],
		"success": 3,
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
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_page_2",
			"testpoint": "测试场景2"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_page_4",
			"testpoint": "测试场景3"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_page_3",
			"testpoint": "\u7528\u6237\u6d4f\u89c8\u9996\u9875\u914d\u7f6e\u5185\u5bb9-\u52a8\u6001"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_page_5",
			"testpoint": "测试场景3"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_find_1",
			"testpoint": "测试场景4"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_inov_1",
			"testpoint": "测试场景5"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/featured/index/configs/queryShowConfigs",
			"resultSign": "0",
			"testcaseid": "cnf_inov_2",
			"testpoint": "测试场景6"
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
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_2",
			"testpoint": "测试场景7"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_3",
			"testpoint": "测试场景8"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_4",
			"testpoint": "测试场景9"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_5",
			"testpoint": "测试场景10"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_6",
			"testpoint": "测试场景11"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_7",
			"testpoint": "测试场景12"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_8",
			"testpoint": "测试场景13"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_9",
			"testpoint": "测试场景14"
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply",
			"resultSign": "0",
			"testcaseid": "match_apple_10",
			"testpoint": "测试场景15"
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
		}, {
			"errordes": "",
			"interfacename": "https://uat-steam-api.opg.cn/match-service/member/apply/cancel",
			"resultSign": "0",
			"testcaseid": "match_apple_2",
			"testpoint": "测试场景17"
		}],
		"success": 2,
		"total": 2

	}]
      ,
      expands:[]
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
  methods:{
      editInfo(interfaceName){  //编辑
          alert(interfaceName);
          this.$router.push({ name: 'Elementtab', params: { plan: interfaceName }})
      },
      selectOneClass(row, index){
        if(row.totle == row.success)
            return 'passClass'
        else if(row.fail>0)
            return 'failClass'
        else
            return 'errorClass'
      },
      selectTwoClass(row, index){
        if(row.resultSign == '0')
            return 'passCase'
        else if(row.resultSign=='1')
            return 'failCase'
        else
            return 'errorCase'
      },
      rowClick(row, event, column) {   //控制展开行
        alert(this.expands)
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
               // this.expands.shift();
                this.expands.push(row.interfaceName);
            } else {
                alert("remove");
                this.expands.shift();
                alert(this.expands);
            }
        } else {
            return;
        }
     },
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
.passClass  { background-color: #6c6; }
.failClass  { background-color: #c60; }
.errorClass { background-color: #c00; }
.interfaceClass  { background-color: #1E90FF; }
.passCase   { color: #6c6; }
.failCase   { color: #c60; font-weight: bold; }
.errorCase  { color: #c00; font-weight: bold; }
.hiddenRow  { display: none; }
.testcase   { margin-left: 2em; }
</style>
