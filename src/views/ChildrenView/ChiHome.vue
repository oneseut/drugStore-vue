<template>
  <div style="display: flex; flex-direction: column; width:100%; ">
    <!-- 头部 -->
    <div style="width: 100%; height: 192px;background-color: white; display: flex; flex-direction: column;">
      <div style=" display: flex;height: 52px;  align-items: center;">
        <h3 style="line-height: 30px; margin-top: 30px; margin-left: 28px;">无忧药店</h3>

      </div>
      <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: center;">
        <div style="margin-left: 20px;display: flex; align-items: center;">
          <a-avatar
          :size="76"
          style=""
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          > 
          </a-avatar>
          <div style="  margin-left: 20px; margin-top: 20px;">
          <h3 style=" font-size: 25px;">早安，Admin ，祝你开心每一天！</h3>
            <p style=" margin-top: 15px; margin-left: 1px;">欢迎进入无忧药店后台管理系统！</p>
          </div>
        </div>

        <div style="display: flex; justify-content: space-evenly;">
          
          <div style="display: flex; flex-direction: column; justify-content: center ;align-items: center; width: 120px;">
            <h4>药品数量</h4>
            <p style="margin-top: 10px; font-size: 18px;">79</p>
          </div>
           <div style="display: flex; flex-direction: column; justify-content: center ;align-items: center;width: 120px;">
            <h4>进货次数</h4>
            <p style="margin-top: 10px; font-size: 18px;">369</p>
          </div> 
          <div style="display: flex; flex-direction: column; justify-content: center ;align-items: center;width: 120px;">
            <h4>售卖次数</h4>
            <p style="margin-top: 10px; font-size: 18px;">6533</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 头部结束 -->
    <!-- 中下部 -->
     <div style="display: flex; width: 97%; height: 1020px; margin: 25px auto ; flex-direction: column; justify-content: space-between;">

      <div style="display: flex; width: 100%;height: 350px;  justify-content: space-between;" >
        <div style="width: 800px; display: flex; flex-direction: column;">
          <div style="width: 100%; height: 56px; border-width: 2px; border-bottom-style: solid; align-items: center;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">使用的技术栈</h3>
          </div>
          <div style="display: flex; flex: 1; flex-wrap: wrap;">

            <HoverBox
             boxName="Mysql"
             mainText="MySQL是一个关系型数据库管理系统,由瑞典MySQLAB公司开发是最流行的关系型数据库管理系统之一"
             avatarSrc="https://www.w3cschool.cn/attachments/image/20170526/1495798711725561.png"
             />
            <HoverBox
             boxName="MyBatisPlus"
             mainText="MyBatisPlus是MyBatis增强工具，简化数据库操作，支持自动分页、条件构造器，提升开发效率。"
             avatarSrc="https://baomidou.com/assets/asset.cIbiVTt__ZgvyzK.svg"
             />
            <HoverBox
             boxName="Vue"
             mainText="Vue ：渐进式JavaScript框架，响应式数据绑定与组件化开发，适用于构建单页应用（SPA）。"
             avatarSrc="https://upload-bbs.miyoushe.com/upload/2025/06/08/387521852/deed1f7f53cf8c9957afdd957f12c72d_42238228227641425.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png"
             widthText="270px"
             />
            <HoverBox
             boxName="Echarts"
             mainText="ECharts ：百度开源可视化库，丰富图表类型，交互性强，支持动态数据渲染与多维数据展示。"
             avatarSrc="https://upload-bbs.miyoushe.com/upload/2025/06/08/387521852/010653b104002144edbcfb163a881a2a_3025383340363078410.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png"
             />
            <HoverBox
             boxName="SpringBoot"
             mainText="Spring Boot ：Java后端框架，自动配置、内嵌服务器，简化微服务开发，开箱即用。"
             avatarSrc="https://upload-bbs.miyoushe.com/upload/2025/06/08/387521852/66da5120cb635de83c4e644a124f9e49_3132108358970687110.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png"
             />
             <HoverBox
             boxName="Axios"
             mainText="Axios是基于Promise的HTTP客户端，提供请求拦截、自动JSON转换、XSRF防护，简化异步通信。"
             avatarSrc="https://upload-bbs.miyoushe.com/upload/2025/06/08/387521852/7a957fb51e17aece1221ab9c4f971b26_8170690359267048209.png?x-oss-process=image//resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,png"
             widthText="270px"
             />
            


          </div>

        </div>
        <div style=" width: 400px; display: flex; flex-direction: column; background-color: white; border-radius: 5px;">
          <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">核心技术</h3>
          </div>
          <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="48"
                style="margin-left: 18px;margin-top: 16px;"
                src="https://upload-bbs.miyoushe.com/upload/2025/06/08/387521852/deed1f7f53cf8c9957afdd957f12c72d_42238228227641425.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png"
                > 
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">Vue</h4>
          </div>
          <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="48"
                style="margin-left: 18px;margin-top: 16px;"
                src="https://upload-bbs.miyoushe.com/upload/2025/06/08/387521852/66da5120cb635de83c4e644a124f9e49_3132108358970687110.png?x-oss-process=image//resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,png"
               > 
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">SpringBoot</h4>
          </div>
          <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="48"
                style="margin-left: 18px;margin-top: 16px;"
                src="https://baomidou.com/assets/asset.cIbiVTt__ZgvyzK.svg"
               > 
                
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">MyBatisPlus</h4>
          </div>
          <h2 style=" margin-top: 10px ; margin-left: 20px;"> 北京时间 : {{currentTime}}</h2>
        </div>
      </div>
      <div style="display: flex; width: 100%;height: 450px; justify-content: space-between;">
        <div style="width: 800px; display: flex; flex-direction: column;">
          <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">技术动态</h3>
          </div>
          
              <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="40"
                style="margin-left: 18px;margin-top: 16px;" > 
                徐
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">徐升炎  实现前端页面基本搭建，制定前后端接口交互规则</h4>
               </div>
              <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="40"
                style="margin-left: 18px;margin-top: 16px;" > 
                 徐
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">徐升炎  实现数据库基本设计，实现部分后端与数据库交互</h4>
              </div>

              <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="40"
                style="margin-left: 18px;margin-top: 16px;"
                > 
                徐
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">徐升炎 完成后端基本框架搭建</h4>
              </div>

               <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="40"
                style="margin-left: 18px;margin-top: 16px;"
                > 
                徐
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">徐升炎 完成后端接口编写,实现部分业务逻辑</h4>
              </div>

              <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="40"
                style="margin-left: 18px;margin-top: 16px;"
                > 
                徐
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">徐升炎 实现数据库数据收集，对数据库设计进行完善</h4>
              </div>

              <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="40"
                style="margin-left: 18px;margin-top: 16px;"
                > 
                徐
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">蔡佳和  实现部分后端到数据库交互以及业务逻辑编写</h4>
              </div>
            </div>
            <div style=" width: 400px;height: 450px; background-color: white;" id="ChiHomeData">
        

        </div>
      </div>
       <div style="display: flex; width: 100%;height: 120px;flex-direction: column; justify-content: end;">
         <p style="margin:1px auto ;font-size: 14px; color: rgb(0, 0, 0,0.65);">By yumenoame@无忧药店</p>
        <p style="margin: 2px auto;font-size: 14px; color: rgb(0, 0, 0,0.65)">vue|Ant Design vue|Echars</p>
      </div>
     </div>
   





  </div>
</template>

<script setup>
import HoverBox from '@/components/HoverBox.vue';
import * as echarts from 'echarts';
import { ref,onMounted } from 'vue';
onMounted(()=>{
  updateTime(); // 初始调用
  setInterval(updateTime, 1000); // 每秒更新
var myChart = echarts.init(document.getElementById('ChiHomeData'));
myChart.setOption({
  title: {
    text: '项目时间花费占比',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '编写时间占比',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Vue' },
        { value: 735, name: 'java' },
        { value: 580, name: 'Mysql' },
        { value: 484, name: 'JavaScrpit' },
        { value: 300, name: 'Axios' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

})

const currentTime = ref('');

function updateTime() {
  const now = new Date();
  currentTime.value = 
    `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
}


</script>

<style scoped>
.hover-box:hover {
  
  transform: scale(1.015);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>