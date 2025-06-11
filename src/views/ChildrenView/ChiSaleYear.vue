<template>
  <div style="display: flex; flex-direction: column; width:100%; ">
    <!-- 头部 -->
    <div style="width: 100%; height: 192px;background-color: white; display: flex; flex-direction: column;">
      <div style=" display: flex;height: 52px;  align-items: center;">
        <h3 style="line-height: 30px; margin-top: 30px; margin-left: 28px;">年度分析</h3>

      </div>
      <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: center;">
        <div style="margin-left: 20px;display: flex; align-items: center;">
       
          <div style="  margin-left: 20px; margin-top: 20px;">
          <h3 style=" font-size: 25px;">无忧药店2018年度销售总结</h3>
            <p style=" margin-top: 15px; margin-left: 1px;">无忧药店后台管理系统</p>
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
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">年度销售分析</h3>
          </div>
          <div style="width: 800px; height: 294px; background-color: white;" id="saleyear">


          </div>

        </div>
        <div style=" width: 400px; display: flex; flex-direction: column; background-color: white; border-radius: 5px;">
          <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">销量排行</h3>
          </div>
          <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="48"
                style="margin-left: 18px;margin-top: 16px;background-color:#3aa1ff;"
                > 1
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">6月: 销售额度>393951RMB</h4>
          </div>
          <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="48"
                style="margin-left: 18px;margin-top: 16px;background-color:#3aa1ff;"
               > 2
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">4月: 销售额度>300167RMB</h4>
          </div>
          <div style="height: 80px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
                <a-avatar
                :size="48"
                style="margin-left: 18px;margin-top: 16px;background-color:#3aa1ff;"
               > 
                3
                </a-avatar>
                <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">1月: 销售额度>262930RMB</h4>
          </div>
          <h2 style=" margin-top: 10px ; margin-left: 20px;"> 北京时间 : {{currentTime}}</h2>
        </div>
      </div>
      <div style="display: flex; width: 100%;height: 450px; justify-content: space-between;">
        <div style="width: 800px; display: flex; flex-direction: column;">
          <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">销售总览</h3>
          </div>
          
             <div 
              v-for="item in data.slice(0, 6)" 
              :key="item.month"
              style="height: 80px; width:100%; display: flex; background-color: white; border-width: 3px; border-bottom-style: solid; border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;"
              class="hover-box"
            >
              <a-avatar
                :size="40"
                style="margin-left: 18px; margin-top: 16px; background-color: #4096ff; color: white; font-weight: bold;"
              >
                {{ item.month }}
              </a-avatar>
              <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">
                销售额度: {{ item.total_sales }}  销售量: {{ item.total_quantity }}
              </h4>
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
// import HoverBox from '@/components/HoverBox.vue';
import * as echarts from 'echarts';
import { ref,onMounted } from 'vue';
import axios from 'axios';
const SaleYearChartsInit= (months,sales,quantitys)=>{
var salechartDom = document.getElementById('saleyear');
var salemyChart = echarts.init(salechartDom);
salemyChart.setOption({
  title: {
    text: '年度销售分析', // 主标题
    subtext: '单位：元', // 副标题
    left: 'center', // 标题居中
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      data: months,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'sale',
      min: 0,
      max: 5000,
      interval: 1000,
      axisLabel: {
        formatter: '{value} RMB'
      }
    },
    {
      type: 'value',
      name: 'quantity',
      min: 0,
      max: 500000,
      interval: 100000,
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
  series: [
    
    {
      name: '销售量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + '';
        }
      },
      data: quantitys
    },
    {
      name: '销售额',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' RMB';
        }
      },
      data:sales
    }
  ]
})



};
const saleChartsInit = ( saledata)=>{
  var myChart = echarts.init(document.getElementById('ChiHomeData'));
myChart.setOption({
  title: {
    text: '销售量月份占比',
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
      name: '销售额度占比',
      type: 'pie',
      radius: '50%',
      data: saledata,
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
}
const data = ref([]);
onMounted(()=>{
  updateTime(); // 初始调用
  setInterval(updateTime, 1000); // 每秒更新
  axios.get("http://localhost:8080/getsaleyear").then(
    function(res){
      data.value = res.data;
     const months = res.data.map(item => item.month);
     const quantitys = res.data.map(item=> item.total_quantity);
      const sales = res.data.map(item=> item.total_sales);
      SaleYearChartsInit(months,sales,quantitys);
      const saledata = res.data.map(item=>({value:item.total_quantity,name:item.month +'月'}))
      saleChartsInit(saledata);
    }
  )


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