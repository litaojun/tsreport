<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <div>
        <span class="filter-item" style="width:50px;text-align:center;">昵称：</span>
        <el-input class="filter-item" v-model="listQuery.nickName" style="width:140px;"></el-input>
        <span class="filter-item" style="width:50px;text-align:center;">电话：</span>
        <el-input class="filter-item" v-model="listQuery.phone" style="width:140px;"></el-input>
        <span class="filter-item" style="width:50px;text-align:center;">性别：</span>
        <el-select class="filter-item" clearable style="width:100px;" v-model="listQuery.sex" placeholder="请选择">
          <el-option v-for="item in genderOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <span class="filter-item" style="width:90px;text-align:right;">关注状态：</span>
        <el-select class="filter-item" clearable style="width:100px;" v-model="listQuery.followState" placeholder="请选择">
          <el-option v-for="item in followStateOpts" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <span class="filter-item" style="width:90px;text-align:right;">关注时间：</span>
        <el-date-picker v-model="listQuery.followBeginTime" class="filter-item" type="date" style="width: 160px;" value-format="yyyy-MM-dd"></el-date-picker>
        <span class="filter-item" style="margin-top:-4px;width:16px">—</span>
        <el-date-picker v-model="listQuery.followEndTime" class="filter-item" type="date" style="width: 160px;" value-format="yyyy-MM-dd"></el-date-picker>
      </div>
    </div>
</div>
</template>
<script>
  export default {
    data() {
         return {
           listQuery: {
                currentPage: 1,
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
           }
           }
       }
  }
</script>