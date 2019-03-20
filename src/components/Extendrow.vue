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
                    :data="props.row.child"
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
        <el-table-column  label="商品 ID" prop="id"> 
        </el-table-column>
        <el-table-column label="商品名称" prop="name">
        </el-table-column>
        <el-table-column label="产地" prop="address">
        </el-table-column>
        <el-table-column label="产品分类" prop="type">
            <template slot-scope="scope">{{scope.row.type | TypeFilter}}</template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="primary" @click.stop="editInfo(scope.row.id)">编辑</el-button>
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
      editInfo(id){  //编辑
          alert(id);
          this.$router.push({ name: 'Elementtab', params: { plan: 'private' }});
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
    #table2 .el-table__expanded-cell{
      padding:0 !important;
      border-bottom: none;
    }
    .hiderow .el-table__expand-column .el-icon {
      visibility: hidden;
    }
</style>
 
<style >
    .tabBg {
      background: #fafafa !important;
    }
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
</style>