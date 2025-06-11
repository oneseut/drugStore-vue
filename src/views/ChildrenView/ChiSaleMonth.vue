<template>
  <div style="display: flex; flex-direction: column; width:100%; ">
    <!-- 头部 -->
    <div style="width: 100%; height: 192px;background-color: white; display: flex; flex-direction: column;">
      <div style=" display: flex;height: 52px;  align-items: center;">
        <h3 style="line-height: 30px; margin-top: 30px; margin-left: 28px;">月度分析</h3>
        <a-select
            v-model:value="monthSelected"
            style="width: 80px; margin-left: 20px; margin-top: 20px;"
            @change="fetchData"
            :options="monthOptions"
          />
      </div>
      <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: center;">
        <div style="margin-left: 20px;display: flex; align-items: center;">
       
          <div style="  margin-left: 20px; margin-top: 20px;">
          <h3 style=" font-size: 25px;">无忧药店月度销售总结</h3>
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

      <div style="display: flex; width: 100%;height: 350px;  justify-content: space-between; "  >
        <div style="width: 800px; display: flex; flex-direction: column;">
          <div style="width: 100%; height: 56px; border-width: 2px; border-bottom-style: solid; align-items: center;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">月度销售分析</h3>
            
          </div >
            <a-table 
            :columns="columns" 
            :data-source="data"
            :pagination="{ pageSize: 4 }"
            bordered
          />

        </div>
        <div style=" width: 400px; display: flex; flex-direction: column; background-color: white; border-radius: 5px;">
          <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">销量排行</h3>
          </div>
         <div 
      v-for="(item, index) in maxday" 
      :key="index"
      style="
        height: 80px; 
        width: 100%; 
        display: flex; 
        background-color: white;
        border-width: 3px; 
        border-bottom-style: solid;
        border-color: rgb(245, 245, 245); 
        border-radius: 5px; 
        transition: all 0.2s;
      " 
      class="hover-box"
    >
      <!-- 动态显示序号 -->
        <h3 style=" margin-top: 20px; margin-left: 10px;">排名{{ index + 1 }}</h3>
      <!-- 动态显示日期和销售额 -->
      <h4 style="margin-top: 29px; margin-left: 14px; word-spacing: 10px;">
        日期: {{ item.name }} 销售额度: {{ item.value }}RMB
      </h4>
    </div>
          <h2 style=" margin-top: 10px ; margin-left: 20px;"> 北京时间 : {{currentTime}}</h2>
        </div>
      </div>
      <div style="display: flex; width: 100%;height: 450px; justify-content: space-between;">
        <div style="width: 800px; display: flex; flex-direction: column;">
          <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">销售总览</h3>
          </div>
          
          <div style="width: 800px; height: 450px; background-color: white;" id="saleyear">


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
import { ref,onMounted,computed } from 'vue';
import axios from 'axios';
var maxday = ref([]);
const monthSelected = ref(4); 
const monthOptions = computed(() => {
  return Array.from({ length: 7 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}月`
  }));
});
const columns = [
  {
    title: '销售日期',
    dataIndex: 'sale_data',
    key: 'sale_data',
    width:'40%'
  },
  {
    title: '总销售额',
    dataIndex: 'total_amount',
    key: 'total_amount',
    align: 'center',
    sorter: (a, b) => a.total_amount - b.total_amount,
    sortDirections: ['ascend', 'descend'],
  },
];
const SaleYearChartsInit= (days,sales,quantitys)=>{
var salechartDom = document.getElementById('saleyear');
var salemyChart = echarts.init(salechartDom);
salemyChart.setOption({
  title: {
    text: '月度销售分析', // 主标题
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
      data: days,
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
      max: 80000,
      interval: 8000,
      axisLabel: {
        formatter: '{value} RMB'
      }
    },
    {
      type: 'value',
      name: 'quantity',
      min: 0,
      max: 80000,
      interval: 8000,
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
    text: '销售量最高日',
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
const fetchData = (selectedMonth) => {
  axios.get(`http://localhost:8080/saleday?month=${selectedMonth}`)
    .then(res => {
      data.value = res.data;
      const days = res.data.map(item => item.sale_data);
      const total_amounts = res.data.map(item => item.total_amount);
      SaleYearChartsInit(days, total_amounts, total_amounts);
      const saledata = res.data.map(item => ({ value: item.total_amount, name: item.sale_data }))
        .sort((a, b) => b.value - a.value).slice(0, 5);
      saleChartsInit(saledata);
      maxday.value = saledata.slice(0, 3);
    })
    .catch(err => {
      console.error('请求失败:', err);
    });
};
var data = ref([]);
onMounted(()=>{
  updateTime(); // 初始调用
  setInterval(updateTime, 1000); // 每秒更新
  axios.get("http://localhost:8080/saleday?month=4").then(
    function(res){
      data.value = res.data;
     const days = res.data.map(item => item.sale_data);
     const total_amounts = res.data.map(item=> item.total_amount);
      SaleYearChartsInit(days,total_amounts,total_amounts);
      const saledata = res.data.map(item=>({value:item.total_amount,name:item.sale_data})).sort((a, b) => b.value - a.value)
          .slice(0, 5)
      saleChartsInit(saledata);
      maxday.value=saledata.slice(0,3);
      console.log(maxday)
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