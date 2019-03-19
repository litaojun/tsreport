<template>
    <el-table
      :data="tableData"
      default-expand-all=false
      style="width: 100%">
      <el-table-column type="expand">
          <template slot-scope="props">
           <el-table
                    :data="props.row.child"
                    :show-header=false>
                    <el-table-column
                        prop="comp_name"
                        :show-overflow-tooltip="false"
                        width="50"
                        label="">
                    </el-table-column>
           </el-table>
          </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
</template>

<script>
 export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        child:[
                {
                  comp_name: 'litaojun'
                },
                {
                  comp_name: 'ce'
                }
              ]
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        child:[
                {
                  comp_name: 'litaojun'
                },
                {
                  comp_name: 'ce'
                }
              ]
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        child:[
                {
                  comp_name: 'litaojun'
                },
                {
                  comp_name: 'ce'
                }
              ]
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        child:[
                {
                  comp_name: 'litaojun'
                },
                {
                  comp_name: 'ce'
                }
              ]
      }]
    }
  }
}
</script>
