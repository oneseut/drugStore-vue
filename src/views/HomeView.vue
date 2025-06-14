<template>
  <div style="display: flex; width: 100vw;height: 100vh">
    <div style="background-color: rgb(0, 21, 41) ; height: 100vh;width: 208px; overflow: hidden;">
      <MeunComponent></MeunComponent>
    </div>

    <div style="flex: 1;display: flex; height: 100vh; flex-direction: column; max-width: 100%;">

      <div style="height: 60px; width: 100%; display: flex;align-items: center;justify-content: space-between; border-bottom-style:solid;border-width: 2px; border-color: rgb(240,240,240);">
              <a-breadcrumb :routes="breadcrumbRoutes" style="margin-left: 20px;font-size: 15px;">
                <template #itemRender="{ route }">
                  <!-- 最后一个节点不显示链接 -->
                  <span v-if="route.isCurrent">{{ route.breadcrumbName }}</span>
                  <router-link v-else >{{ route.breadcrumbName }}</router-link>
                </template>
              </a-breadcrumb>

              <a-dropdown
              :trigger="['hover']"
              placement="bottomRight"
            >
                <a-avatar
                  size="large"
                  style="margin-right: 30px;"
                  src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                > 
                </a-avatar>

              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="logout">
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                </a-menu>
              </template>
              
            </a-dropdown>

      </div>

      <div style="flex : 1; overflow-x:hidden ;display: flex;flex-wrap: wrap; background-color: rgb(245,245,245);" class="bor">
        <RouterView/>
      </div >
      
    </div>
    


</div>

</template>

<script setup>
import { RouterView } from 'vue-router'
import MeunComponent from '@/components/MeunComponent.vue';
import { useRouter } from 'vue-router';
import {LogoutOutlined } from '@ant-design/icons-vue';
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const handleMenuClick = ({ key }) => {
  console.log(key)
  if (key === 'logout') {
    // 执行退出登录逻辑，例如清除 token、跳转到登录页等
    // localStorage.removeItem('token');
    router.push('/login');
  }
};

const basePath = '/home' // 父级路由路径
const breadcrumbMap = {
  // 定义每个路由的面包屑路径结构
  home: ['首页'],
  work: ['工作台'],
  drugall: ['药品管理', '药品总览'],
  drugdata: ['药品管理', '数据分析'],
  saleall: ['销售管理', '销售记录'],
  saleyear: ['销售管理', '年度分析'],
  salemonth: ['销售管理', '月度分析'],
  stockall:['库存管理','库存信息'],
  stockdata:['库存管理','数据分析']
}

const breadcrumbRoutes = ref([])

watchEffect(() => {
  const currentPath = route.name
  const pathArray = breadcrumbMap[currentPath] || []
  
  // 构建带路径的路由数组
  breadcrumbRoutes.value = pathArray.map((name, index) => {
    return {
      breadcrumbName: name,
      path: `${basePath}/${pathArray.slice(0, index + 1).join('/')}`,
      isCurrent: index === pathArray.length - 1
    }
  })
})
</script>

<style scoped>

</style>