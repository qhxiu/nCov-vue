<template>
  <div class="table">
    <ul class="table-header">
      <li>地区</li>
      <li>新增</li>
      <li>累计确诊</li>
      <li>治愈</li>
      <li>死亡</li>
    </ul>
    <ul class="table-content">
      <li class="item">
        <div class="province">
          <div>湖北</div>
          <div>11</div>
          <div>22</div>
          <div>33</div>
          <div>33</div>
        </div>
        <ul class="table-expand">
          <li>
            <div>ww</div>
            <div>ee</div>
            <div>dd</div>
            <div>ff</div>
            <div>cc</div>
          </li>
        </ul>
      </li>
      <!-- <li v-for="item in province" :key="item.name" class="item">
        <div class="province">
          <div>{{item.name}}</div>
          <div>{{item.today.confirm}}</div>
          <div>{{item.total.confirm}}</div>
          <div>{{item.total.heal}}</div>
          <div>{{item.total.dead}}</div>
        </div>
        <ul class="table-expand">
          <li v-for="child in item.children" :key="child.name">
            <div>{{child.name}}</div>
            <div>{{child.today.confirm}}</div>
            <div>{{child.total.confirm}}</div>
            <div>{{child.total.heal}}</div>
            <div>{{child.total.dead}}</div>
          </li>
        </ul>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    province: Array,
  }
};
</script>

<style>
.table {
  font-size: 14px;
}
.table-header {
  display: flex;
}
li {
  list-style: none;
}
.province {
  background-color: #f8f8f8;
  border-bottom: 1px solid #e9e9e9;
}
.table-header li,
.item li {
  flex: 1;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.province  div,
.table-expand div  {
  display: inline-block;
  width: 20%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.province  {
  padding: 5px 0;
}
</style>
