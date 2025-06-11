<template>
 <div style="display: flex; flex-direction: column; width: 100%; height: 1400px; justify-content: space-evenly;" >

  <div style="display: flex; width: 100%; height: 220px; justify-content: space-evenly;" >



 <!-- 销售额 -->
<div style="width: 300px; height: 200px; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.3s; display: flex; flex-direction: column; justify-content: space-between;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 16px; font-weight: 500; color: #333;">销售额</span>
    <a-icon type="ShoppingCartOutlined" style="font-size: 24px; color: #1890ff;"></a-icon>
  </div>
  <div style="font-size: 28px; font-weight: 600; color: #1890ff; margin: 16px 0;">￥332,869.1</div>
  <div style="display: flex; align-items: center; color: #8c8c8c; font-size: 13px;">
    <span>月度累计</span>
    <a-icon type="ArrowUpOutlined" style="color: #52c41a; margin-left: 8px;"></a-icon>
    <span style="margin-left: 4px; color: #52c41a;">+12.5%</span>
  </div>
</div>

<!-- 销售次数 -->
<div style="width: 300px; height: 200px; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.3s; display: flex; flex-direction: column; justify-content: space-between;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 16px; font-weight: 500; color: #333;">销售次数</span>
    <a-icon type="FireOutlined" style="font-size: 24px; color: #52c41a;"></a-icon>
  </div>
  <div style="font-size: 28px; font-weight: 600; color: #52c41a; margin: 16px 0;">6,532 <span style="font-size: 14px; color: #8c8c8c;">次</span></div>
  <div style="display: flex; align-items: center; color: #8c8c8c; font-size: 13px;">
    <span>环比增长</span>
    <a-icon type="ArrowUpOutlined" style="color: #52c41a; margin-left: 8px;"></a-icon>
    <span style="margin-left: 4px; color: #52c41a;">+8.2%</span>
  </div>
</div>

<!-- 进货数量 -->
<div style="width: 300px; height: 200px; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.3s; display: flex; flex-direction: column; justify-content: space-between;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 16px; font-weight: 500; color: #333;">进货数量</span>
    <a-icon type="DatabaseOutlined" style="font-size: 24px; color: #faad14;"></a-icon>
  </div>
  <div style="font-size: 28px; font-weight: 600; color: #faad14; margin: 16px 0;">30,641 <span style="font-size: 14px; color: #8c8c8c;">件</span></div>
  <div style="display: flex; align-items: center; color: #8c8c8c; font-size: 13px;">
    <span>库存状态</span>
    <a-icon type="CheckCircleOutlined" style="color: #52c41a; margin-left: 8px;"></a-icon>
    <span style="margin-left: 4px;">正常</span>
  </div>
</div>

<!-- 销售数量 -->
<div style="width: 300px; height: 200px; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.3s; display: flex; flex-direction: column; justify-content: space-between;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 16px; font-weight: 500; color: #333;">销售数量</span>
    <a-icon type="BarChartOutlined" style="font-size: 24px; color: #ff4d4f;"></a-icon>
  </div>
  <div style="font-size: 28px; font-weight: 600; color: #ff4d4f; margin: 16px 0;">15,726 <span style="font-size: 14px; color: #8c8c8c;">件</span></div>
  <div style="display: flex; align-items: center; color: #8c8c8c; font-size: 13px;">
    <span>完成率</span>
    <span style="margin-left: 8px; color: #1890ff;">65%</span>
  </div>
</div>


  </div>

  <div style="display: flex; width: 100%; height: 460px; justify-content: center;align-items: center;">
    <div style="display: flex; flex-direction: column;">
    <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
        <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">月度销售额</h3>
      </div>
    <div id="month" style=" width: 836px;height: 400px;background-color: white;border-radius: 5px; ">

    </div>
    </div>
    <div style="width:400px ; height: 456px; display: flex; flex-direction: column;">
    <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
        <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">药品销售排名</h3>
      </div>

    <div v-for="item in drugList" :key="item.num">
      <DrugLevel style="transition: all 0.2s;" class="hover-box"
        :num="item.num"
        :drug="item.drug"
        :quantity="item.quantity"
      />
    </div>

    </div>
  </div>

  <div style="display: flex; width: 100%; height: 520px;justify-content: space-evenly;align-items: center; ">

    <div style="width: 612px;height: 516px; display: flex; flex-direction: column; border-radius: 5px; background-color: white;">
    <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
        <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">库存信息</h3>
      </div>
      <div style=" width: 100%;">
       <a-table 
        :columns="columns" 
        :data-source="data"
        :pagination="{ pageSize: 6 }"
        bordered
      />
      </div>
    </div>
    
    <div style="width: 612px;height: 516px; display: flex; flex-direction: column; background-color: white; border-radius: 5px;">
      <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
        <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px;">库存积压</h3>
      </div>
      <div style="display: flex;">
        <div id="stock" style=" width: 460px; height: 460px;">

        </div>
      </div>
    </div>
  </div>

      <div style="display: flex; width: 100%;height: 80px;flex-direction: column; justify-content: center;">
         <p style="margin:1px auto ;font-size: 14px; color: rgb(0, 0, 0,0.65);">By yumenoame@无忧药店</p>
        <p style="margin: 2px auto;font-size: 14px; color: rgb(0, 0, 0,0.65)">vue|Ant Design vue|Echars</p>
      </div>

 </div>
</template>

<script setup>
import DrugLevel from '@/components/DrugLevel.vue';
import axios from 'axios';
import * as echarts from 'echarts';
import {   onMounted,ref } from 'vue';
const columns = [
  {
    title: '药品ID',
    dataIndex: 'drug_id',
    key: 'drug_id',
    width:'15%'
  },
  {
    title: '药品名称',
    dataIndex: 'name',
    key: 'name',
    width: '60%',
  },
  {
    title: '药品数量',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
    sorter: (a, b) => a.quantity - b.quantity,
    sortDirections: ['ascend', 'descend'],
  },
];

// 响应式数据源
const data = ref([]);

// 获取数据
const fetchData = () => {

    axios.get('http://localhost:8080/getallstock').then(
      function(res){
         console.log(res.data);
         data.value = res.data || [];
         maxstockdata.value=data.value
          .map(item => ({
            name: item.name,
            value: parseInt(item.quantity, 10) || 0
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 6)
         
         console.log(maxstockdata.value);
         stockEchartsInit(maxstockdata.value)
      }
    ).catch(
      function(error){
        console.log(error)
      }
    )}

    axios.get('http://localhost:8080/getsalemonth').then(
      function(res){
        const months = res.data.map(item => item.month);

      // 提取总销售额数组
      const totalSales = res.data.map(item => item.total_sales);
      saleMonthEchartsInit(months,totalSales);
      }

    ).catch(function(error){
      console.log(error);
    })

const drugList = [
  { num: 1, drug: '苯磺酸氨氯地平片(安内真)', quantity: 1785 },
  { num: 2, drug: '卡维地洛片(金络)', quantity: 1460 },
  { num: 3, drug: '高特灵', quantity: 1140 },
  { num: 4, drug: '硝苯地平控释片(欣然)', quantity: 827 },
  { num: 5, drug: '苯磺酸氨氯地平片(络活喜)', quantity: 796 },
  { num: 6, drug: '复方利血平氨苯蝶啶片(北京降压0号)', quantity: 517 },
  { num: 7, drug: 'G琥珀酸美托洛尔缓释片(倍他乐克)', quantity: 509 }
];

const maxstockdata = ref([]);
const stockEchartsInit = (stockdata)=>{
  var chartDomstock = document.getElementById('stock');
  var myChartstock = echarts.init(chartDomstock);
  myChartstock.setOption({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '积压最多药品',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: stockdata
    }
  ]
})
}
const saleMonthEchartsInit = (salemonth,saledata)=>{
  var chartDommonth = document.getElementById('month');
var myChartmonth = echarts.init(chartDommonth);
myChartmonth.setOption({
   title: {
    text: '月度销售额', // 主标题
    subtext: '单位：元', // 副标题
    left: 'center', // 标题居中
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  },
  xAxis: {
    type: 'category',
    data: salemonth
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: saledata,
      type: 'bar'
    }
  ]
});
}
onMounted(()=>{
fetchData();
})


</script>

<style scoped>
.bor{
  border-style: solid;
  border-width: 2px;
  border-color: brown;
}
.hover-box:hover {
  
  transform: scale(1.015);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
