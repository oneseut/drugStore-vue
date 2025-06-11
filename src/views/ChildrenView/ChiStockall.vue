<template>
  <div style="display: flex; flex-direction: column; width:100%; ">
    <!-- 头部 -->
    <div style="width: 100%; height: 192px;background-color: white; display: flex; flex-direction: column;">
      <div style=" display: flex;height: 52px;  align-items: center;">
        <h3 style="line-height: 30px; margin-top: 30px; margin-left: 28px;">库存分析</h3>

      </div>
      <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: center;">
        <div style="margin-left: 20px;display: flex; align-items: center;">
       
          <div style="  margin-left: 20px; margin-top: 20px;">
          <h3 style=" font-size: 25px;">无忧药店库存信息汇总</h3>
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
     <div style="display: flex; width: 97%; height: 1470px; margin: 25px auto ; flex-direction: column; justify-content: space-between;">

      <div style="display: flex; width: 100%;height: 350px;  justify-content: space-between;" >
        <div style="width: 800px; display: flex; flex-direction: column;">
          <div style="display: flex;width: 100%; height: 56px; border-width: 2px; border-bottom-style: solid; align-items: center;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">年度进货分析</h3>
             <a-select
            v-model:value="monthSelected"
            style="width: 90px; margin-left: 20px; margin-top: 10px;"
            @change="axiosyear"
            :options="monthOptions"
          />
          </div>
          
          <div style="width: 800px; height: 294px; background-color: white;" id="saleyear">


          </div>

        </div>
        <div style=" width: 400px; display: flex; flex-direction: column; background-color: white; border-radius: 5px;">
          <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">进货额度排行</h3>
          </div>
           <div 
            v-for="(item, index) in maxmonth" 
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
              {{ item.name }} 进货额度: {{ item.value }}RMB
            </h4>
    </div>
          <h2 style=" margin-top: 10px ; margin-left: 20px;"> 北京时间 : {{currentTime}}</h2>
        </div>
      </div>
      <div style="display: flex; width: 100%;height: 405px; justify-content: space-between;">
        <div style="width: 800px; display: flex; flex-direction: column; background-color: white; border-radius: 8px; margin-top: 20px;">
          <div style="display: flex;margin-top: 10px;height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
            <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px; ">月度进货表</h3>
             <a-select
            v-model:value="yearSelected"
            style="width: 90px; margin-left: 20px; margin-top: 10px;"
            @change="axiosmonth"
            :options="yearOptions"
          /> 
          <a-select
            v-model:value="daySelected"
            style="width: 90px; margin-left: 20px; margin-top: 10px;"
            @change="axiosmonth"
            :options="dayOptions"
          />
          </div>
            <div style="width: 800px; height: 380px;">
              <a-table 
              :columns="columns" 
              :data-source="data"
              bordered
              :pagination="{ pageSize: 5 }"
            />
            </div>

            </div>
            <div style=" width: 400px;height: 400px; background-color: white;" id="ChiHomeData">
        

        </div>
        
      </div>
        <div style="width: 100%; height: 600px; margin-top: 80px;">
              <a-table 
              :columns="columns" 
              :data-source="dataall"
              bordered
           :pagination="{ pageSize: 8 }"
            />
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
import { ref,onMounted ,computed} from 'vue';
import axios from 'axios';
const monthSelected = ref(2017); 
const monthOptions = computed(() => {
  return Array.from({ length: 2 }, (_, i) => ({
    value: i + 2017,
    label: `${i + 2017}年`
  }));
});
const daySelected = ref(5); 
const dayOptions = computed(() => {
   const maxMonth = yearSelected.value === 2018 ? 5 : 12;
  return Array.from({ length: maxMonth }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}月`
  }));
});
const yearSelected = ref(2017); 
const yearOptions = computed(() => {
  return Array.from({ length: 2 }, (_, i) => ({
    value: i + 2017,
    label: `${i + 2017}年`
  }));
});
const columns = [
  {
    title: '进货ID',
    dataIndex: 'purchase_id',
    key: 'purchase_id',
    fixed: true,
  },
  {
    title: '药品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '进货日期',
    dataIndex: 'purchase_data',
    key: 'purchase_data',
    align: 'center',
  },
  {
    title: '进货数量',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'right',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
  },
  {
    title: '进货厂商',
    dataIndex: 'supplier',
    key: 'supplier',
    align: 'center',
  }
];
var maxmonth = ref([]);
const SaleYearChartsInit= (months,sales,quantitys)=>{
var salechartDom = document.getElementById('saleyear');
var salemyChart = echarts.init(salechartDom);
salemyChart.setOption({
  title: {
    text: '年度进货分析', // 主标题
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
      name: 'price',
      min: 0,
      max: 5000,
      interval: 1000,
      axisLabel: {
        formatter: '{value} '
      }
    },
    {
      type: 'value',
      name: 'quantity',
      min: 0,
      max: 90000,
      interval: 10000,
      axisLabel: {
        formatter: '{value} RMB '
      }
    }
  ],
  series: [
    
    {
      name: '进货量',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + '';
        }
      },
      data: quantitys
    },
    {
      name: '进货额',
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
    text: '单日进货最多',
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
      name: '进货额度占比',
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
const dataall = ref([]);
const data = ref([]);
const axiosmonth = ()=>{
  const year = yearSelected.value;
  const month = daySelected.value
   axios.get(`http://localhost:8080/getpurchasesBymonth?year=${year}&month=${month}`).then(
    function(res){
      data.value = res.data;
      const saledata = res.data.map(item=>({value:item.quantity,name:item.purchase_data})).sort((a, b) => b.value - a.value)
          .slice(0, 5)
      saleChartsInit(saledata);
    }
  )
}
const axiosyear = (year)=>{
   axios.get(`http://localhost:8080/getpurchasesByYear?year=${year}`).then(
    function(res){
          const month = res.data.map(item => item.month);
         const total_price = res.data.map(item=> item.total_price);
         const total_quantity = res.data.map(item=> item.total_quantity);
         maxmonth.value = res.data.map(item => ({ value: item.total_price, name: item.month+'月' }))
        .sort((a, b) => b.value - a.value).slice(0, 3);
        SaleYearChartsInit(month,total_price,total_quantity);

    }
  )
}
onMounted(()=>{
  updateTime(); // 初始调用
  setInterval(updateTime, 1000); // 每秒更新
  axios.get("http://localhost:8080/getallpurchases").then(
    function(res){
      dataall.value = res.data;
    }
  )
  axiosmonth();
  axiosyear(2017);

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