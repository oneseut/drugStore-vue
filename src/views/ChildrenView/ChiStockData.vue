<template>
  <div style="display: flex; flex-direction: column; width: 100%; height: 900px;">
    <!-- 头部统计卡片 -->
    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
      <div v-for="(item, index) in stockSummary" :key="index"
           style="width: 23%; background: white; padding: 20px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);height: 130px;margin-top: 20px;">
        <div style="font-size: 14px; color: #666; margin-bottom: 10px;">{{ item.title }}</div>
        <div style="font-size: 24px; font-weight: bold; color: #1890ff;">{{ item.value }}</div>
      </div>
    </div>

    <!-- 药品分类统计图表 -->
    <div style="display: flex; height: calc(100% - 120px);">
      <!-- 药品分类饼图 -->
      <div style="width: 30%; height: 500px; background: white; padding: 20px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-right: 20px;">
        <h3 style="margin-bottom: 20px;">药品分类统计</h3>
        <div id="categoryChart" style="width: 100%; height: calc(100% - 40px);"></div>
      </div>

      <!-- 库存药品表格 -->
      <div style="flex: 1; height: 600px; background: white; padding: 20px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: auto;">
        <h3 style="margin-bottom: 20px;">库存药品列表</h3>
        <a-table
          :columns="columns"
          :data-source="drugList"
          :pagination="{ pageSize: 10 }"
          size="middle"
          bordered>
          <template #expiryDate="{ text }">
            <span :style="{ color: isExpiring(text) ? '#f5222d' : '' }">
              {{ formatDate(text) }}
            </span>
          </template>
        </a-table>
      </div>
    </div>
     <div style="display: flex; width: 100%;height: 120px;flex-direction: column; justify-content: center;">
         <p style="margin:1px auto ;font-size: 14px; color: rgb(0, 0, 0,0.65);">By yumenoame@无忧药店</p>
        <p style="margin: 2px auto;font-size: 14px; color: rgb(0, 0, 0,0.65)">vue|Ant Design vue|Echars</p>
      </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
// import axios from 'axios';

export default {
  setup() {
    const stockSummary = ref([
      { title: '总药品数', value: 0 },
      { title: '总库存量', value: 0 },
      { title: '近效期药品', value: 0 },
      { title: '过期药品', value: 0 }
    ]);

    const drugList = ref([]);
    // const categoryChart = ref(null);

    const columns = [
      {
        title: '药品名称',
        dataIndex: 'drug_name',
        key: 'drug_name',
      },
      {
        title: '剂型',
        dataIndex: 'dosage_form',
        key: 'dosage_form',
      },
      {
        title: '分类',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: '库存数量',
        dataIndex: 'quantity',
        key: 'quantity',
        align: 'right',
      },
      {
        title: '有效期',
        dataIndex: 'expiry_date',
        key: 'expiry_date',
        slots: { customRender: 'expiryDate' },
      },
      {
        title: '最近采购日期',
        dataIndex: 'last_purchase_date',
        key: 'last_purchase_date',
      },
    ];

    const initCharts = () => {
      const chartDom = document.getElementById('categoryChart');
      const myChart = echarts.init(chartDom);

      // 按药品分类统计
      const categoryData = drugList.value.reduce((acc, drug) => {
        const category = drug.category || '其他';
        acc[category] = (acc[category] || 0) + drug.quantity;
        return acc;
      }, {});

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          data: Object.keys(categoryData)
        },
        series: [
          {
            name: '药品分类',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '18',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: Object.entries(categoryData).map(([name, value]) => ({
              name,
              value
            }))
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener('resize', () => myChart.resize());
    };

    const fetchData = async () => {
      try {
        // 模拟数据 - 实际项目中替换为API调用
        const mockData = [
          { drug_ID: 1, drug_name: '阿莫西林', dosage_form: '胶囊', category: '抗生素', quantity: 150, expiry_date: '2023-12-31', last_purchase_date: '2023-01-15' },
          { drug_ID: 2, drug_name: '布洛芬', dosage_form: '片剂', category: '解热镇痛', quantity: 200, expiry_date: '2024-06-30', last_purchase_date: '2023-03-20' },
          { drug_ID: 3, drug_name: '维生素C', dosage_form: '片剂', category: '维生素', quantity: 300, expiry_date: '2023-10-15', last_purchase_date: '2023-02-10' },
          { drug_ID: 4, drug_name: '头孢克肟', dosage_form: '胶囊', category: '抗生素', quantity: 80, expiry_date: '2023-09-30', last_purchase_date: '2023-04-05' },
          { drug_ID: 5, drug_name: '蒙脱石散', dosage_form: '散剂', category: '消化系统', quantity: 120, expiry_date: '2024-03-15', last_purchase_date: '2023-05-10' },
          { drug_ID: 6, drug_name: '葡萄糖酸钙', dosage_form: '口服液', category: '矿物质', quantity: 90, expiry_date: '2023-11-20', last_purchase_date: '2023-06-15' },
          { drug_ID: 7, drug_name: '板蓝根颗粒', dosage_form: '颗粒剂', category: '中成药', quantity: 180, expiry_date: '2024-01-31', last_purchase_date: '2023-07-20' },
          { drug_ID: 8, drug_name: '氯雷他定', dosage_form: '片剂', category: '抗过敏', quantity: 70, expiry_date: '2023-08-15', last_purchase_date: '2023-08-25' },
        ];

        drugList.value = mockData;
        updateSummary(mockData);
        initCharts();

        // 实际API调用示例
        // const response = await axios.get('/api/drugs/stock/all');
        // drugList.value = response.data;
        // updateSummary(response.data);
        // initCharts();
      } catch (error) {
        console.error('获取药品数据失败:', error);
      }
    };

    const updateSummary = (drugs) => {
      const today = new Date();

      stockSummary.value[0].value = drugs.length;
      stockSummary.value[1].value = drugs.reduce((sum, drug) => sum + drug.quantity, 0);

      stockSummary.value[2].value = drugs.filter(drug => {
        const expiryDate = new Date(drug.expiry_date);
        const diffTime = expiryDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 30 && diffDays >= 0;
      }).length;

      stockSummary.value[3].value = drugs.filter(drug => {
        return new Date(drug.expiry_date) < today;
      }).length;
    };

    const formatDate = (dateString) => {
      if (!dateString) return '-';
      return new Date(dateString).toLocaleDateString();
    };

    const isExpiring = (dateString) => {
      const today = new Date();
      const expiryDate = new Date(dateString);
      const diffTime = expiryDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 30 && diffDays >= 0;
    };

    onMounted(() => {
      fetchData();
    });

    return {
      stockSummary,
      drugList,
      columns,
      formatDate,
      isExpiring
    };
  }
};
</script>

<style scoped>
.ant-table {
  font-size: 14px;
}
</style>
