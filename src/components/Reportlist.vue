<template>
    <div id="table2">
       <el-table
        :data="tableData5"
        stripe
        row-key="name" :expand-row-keys="expands"   @row-click="rowClick"  :row-class-name="isShowIcon"
        style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
               <el-table
                    :data="props.row.result"
                    :show-header=false>
                    <el-table-column
                        prop="comp_name"
                        :show-overflow-tooltip="true"
                        width="50"
                        label="">
                        <template slot-scope="oscope"></template>
                    </el-table-column>
                    <el-table-column
                        prop="comp_name"
                        :show-overflow-tooltip="true"
                        label="商品名称1">
                        <template slot-scope="oscope">{{oscope.row.comp_name1}}</template>
                    </el-table-column>
                    <el-table-column
                        prop="comp_name"
                        :show-overflow-tooltip="true"
                        label="商品名称2">
                        <template slot-scope="oscope">{{oscope.row.comp_name2}}</template>
                    </el-table-column>
               </el-table>
            </template>
        </el-table-column>
        <el-table-column  label="Test Group/Test case" prop="interfacename"> 
        </el-table-column>
        <el-table-column label="Count" prop="name">
        </el-table-column>
        <el-table-column label="Pass" prop="address">
        </el-table-column>
        <el-table-column label="Fail" prop="address">
        </el-table-column>
        <el-table-column label="Error" prop="address">
        </el-table-column>
        <el-table-column label="View" prop="address">
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
          id: "1",
          name: "商品1",
          address: "云南",
          type:3,
          child:[
              {
                comp_name1:'一行商品1',
                comp_name2:'一行商品2',
              },
              {
                comp_name1:'一行商品1',
                comp_name2:'一行商品2',
              },
          ]
        },
        {
          id: "2",
          name: "商品2",
          address: "西藏",
          type:2,
          child:[
              {
                comp_name1:'二行商品1',
                comp_name2:'二行商品2',
              },
              {
                comp_name1:'二行商品1',
                comp_name2:'二行商品2',
              }
          ]
        },
        {
          id: "3",
          name: "商品3",
          address: "黑龙江",
          type:4,
          child:[
              {
                comp_name1:'三行商品1',
                comp_name2:'三行商品2',
              },
              {
                comp_name1:'三行商品1',
                comp_name2:'三行商品2',
              },
          ]
        },
        {
          id: "4",
          name: "商品4",
          address: "海南",
          type:1,
          child:[
              {
                comp_name1:'四行商品1',
                comp_name2:'四行商品2',
              }
          ]
        },
        {
          id: "5",
          name: "商品5",
          address: "重庆",
          type:0,
          child:[{comp_name1:'四行商品1',
                 comp_name2:'四行商品2',},
                 {comp_name1:'四行商品1',
                 comp_name2:'四行商品2',},
                 {comp_name1:'四行商品1',
                 comp_name2:'四行商品2',},
                 {comp_name1:'四行商品1',
                 comp_name2:'四行商品2',}]
        }
      ],
      expands:[]
    };
  },
  filters:{
      TypeFilter(val){
        if(val==1){
            return '食品'
        }else if(val==2){
            return '纺织'
        }else if(val==3){
            return '教育'
        }else if(val==4){
            return '家居'
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
      isShowIcon(row, index){
        if(row.row.child.length>0)
            return ''
        else
            return 'hiderow'
      },
      rowClick(row, event, column) {   //控制展开行
        alert(this.expands)
        // var NoIndex = column.type.indexOf("expand");
        //if (NoIndex == 0 && row.child.length <= 0) {
        if (row.child.length <= 0) {
            this.expands = [];
            return;
        }
        if (row.child.length > 0) {   
            Array.prototype.remove = function(val) {
            let index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
            };
            if (this.expands.indexOf(row.name) < 0) {  //确保只展开一行
               // this.expands.shift();
                this.expands.push(row.name);
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
#casetable td {
    border: 1px solid #777;
    padding: 2px;
}
    #buttontab {
	        text-align:center;
	    }

#result_table {
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
#result_table td {
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