
<template>
  <div style="width: 212px">
    <!-- <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed" >
      <MenuUnfoldOutlined v-if="state.collapsed" />
      <MenuFoldOutlined v-else />
    
    </a-button> -->
    <div style="display: flex; justify-content: space-evenly; align-items: center;height: 60px;">
    <img src="@/assets/logo.png" alt="" width="36px">
    <h3 style="color: white; font-size: 23px; text-align: center;margin-right: 30px ;margin-top: 8px;">无忧药店</h3>
    </div>
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="items"
      @select="SelectFun"
    ></a-menu>
  </div>

</template>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, watch, h } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  // InboxOutlined,
  AppstoreOutlined,
  // MenuFoldOutlined,
} from '@ant-design/icons-vue';
const router = useRouter()
const SelectFun = (e)=>{
console.log(e)
router.push({name:e.key})
}
const state = reactive({
  collapsed: false,
  selectedKeys: ['home'],
  openKeys: ['drug','stock','sale'],
  preOpenKeys: ['drug'],
});
const items = reactive([
  {
    key: 'home',
    icon: () => h(PieChartOutlined),
    label: '首页',
    title: '首页',
  },
  {
    key: 'drug',
    icon: () => h(MailOutlined),
    label: '药品管理',
    title: '药品管理',
    children: [
      {
        key: 'drugall',
        label: '药品总览',
        title: '药品总览',
      },
      {
        key: 'drugdata',
        label: '数据分析',
        title: '数据分析',
      }
    ],
  },{
    key: 'sale',
    icon: () => h(MailOutlined),
    label: '销售',
    title: '销售',
    children: [
      {
        key: 'saleall',
        label: '销售记录',
        title: '销售记录',
      },{
        key: 'saleyear',
        label: '年度分析',
        title: '年度分析',
      },
      {
        key: 'salemonth',
        label: '月度分析',
        title: '月度分析',
      }
    ],
  },
  {
    key: 'stock',
    icon: () => h(AppstoreOutlined),
    label: '库存进货管理',
    title: '库存进货管理',
    children: [
      {
        key: 'stockall',
        label: '进货信息',
        title: '进货信息',
      },
      {
        key: 'stockdata',
        label: '数据分析',
        title: '数据分析',
      },
      
    ],
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);
// const toggleCollapsed = () => {
//   state.collapsed = !state.collapsed;
//   state.openKeys = state.collapsed ? [] : state.preOpenKeys;
// };
</script>