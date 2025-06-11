<template>
  <div style="width: 100%;height: 100%; display: flex; flex-direction: column; border-radius: 5px; background-color: white;">
    <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
      <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px; display: inline-block;">销售信息</h3>
      <a-button @click="showAddModal = true" type="primary" style="margin-top: 12px; margin-left: 20px;">新增</a-button>
    </div>
    <div style=" width: 100%;">
      <a-table
        :columns="columns"
        :data-source="data"
        :row-key="record => record.sale_id" 
      >
        <!-- 删除列 -->
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'delete'">
            <a @click="handleDelete(record.sale_id)">删除</a> <!-- ✅ 改为 sale_id -->
          </template>
        </template>
      </a-table>
    </div>
  </div>

  <!-- ✅ 新增销售弹窗 -->
  <a-modal v-model:visible="showAddModal" title="新增销售记录" @ok="handleSubmit">
    <a-form :model="newSale" :rules="rules" ref="formRef">
      <a-form-item label="药品ID" name="drug_id">
        <a-input-number v-model:value="newSale.drug_id" style="width: 100%" />
      </a-form-item>
      <a-form-item label="销售日期" name="sale_data">
        <a-date-picker v-model:value="newSale.sale_data" style="width: 100%" />
      </a-form-item>
      <a-form-item label="价格" name="price">
        <a-input-number v-model:value="newSale.price" style="width: 100%" />
      </a-form-item>
      <a-form-item label="数量" name="quantity">
        <a-input-number v-model:value="newSale.quantity" style="width: 100%" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

// ✅ 表格数据源改为 sale 表
const data = ref([]);
const loadData = () => {
  axios.get("http://localhost:8080/getallsale").then(res => {
    data.value = res.data;
  });
};
loadData();

// ✅ 删除功能改为调用 /delectsalebyid
const handleDelete = (sale_id) => {
  axios.get(`http://localhost:8080/delectsalebyid?sale_id=${sale_id}`).then(() => {
    loadData(); // 删除后刷新数据
  }).catch(err => {
    console.error("删除失败:", err);
  });
};

// ✅ 新增功能改为 sale 表字段
const showAddModal = ref(false);
const newSale = ref({
  drug_id: null,
  sale_data: null,
  price: 0,
  quantity: 0,
});
const rules = {
  drug_id: [{ required: true, message: '请输入药品ID!' }],
  sale_data: [{ required: true, message: '请选择销售日期!' }],
  price: [{ required: true, message: '请输入价格!', type: 'number' }],
  quantity: [{ required: true, message: '请输入数量!', type: 'number' }],
};
const formRef = ref();
const handleSubmit = () => {
  axios.post("http://localhost:8080/saleinsert", newSale.value).then(() => {
    loadData(); // 新增后刷新数据
    showAddModal.value = false;
    newSale.value = { // 重置表单
      drug_id: null,
      sale_data: null,
      price: 0,
      quantity: 0,
    };
  }).catch(err => {
    console.error("新增失败:", err);
  });
};

// ✅ 列配置改为 sale 表字段
const columns = [
  {
    title: '销售ID',
    dataIndex: 'sale_id',
    key: 'sale_id',
    fixed: true,
  },
  {
    title: '药品ID',
    dataIndex: 'drug_id',
    key: 'drug_id',
  },{
    title: '药品名称',
    dataIndex: 'drug_name',
    key: 'drug_name',
  },
  {
    title: '销售日期',
    dataIndex: 'sale_data',
    key: 'sale_data',
    align: 'center',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
  },
  // 删除列
  {
    title: '操作',
    key: 'delete',
    align: 'center',
  },
];
</script>