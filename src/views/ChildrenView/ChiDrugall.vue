<template>
  <div style="width: 100%;height: 100%; display: flex; flex-direction: column; border-radius: 5px; background-color: white;">
    <div style="height: 56px; width: 100%;border-width: 2px; border-bottom-style: solid;background-color: white; border-color: rgb(245, 245, 245); border-radius: 5px;">
      <h3 style="margin-top: 16px; margin-left: 15px; font-size: 18px; display: inline-block;">药品信息</h3>
      
      <a-button @click="showAddModal = true" type="primary" style="margin-top: 12px; margin-left: 20px;">新增</a-button>
    </div>
    <div style=" width: 100%;">
      <a-table
        :columns="columns"
        :data-source="data"
        :row-key="record => record.drug_id"
      >
        <!-- 删除列 -->
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'delete'">
            <a @click="handleDelete(record.drug_id)">删除</a>
          </template>
        </template>

        
        <template #expandedRowRender="{ record }">
          <p style="margin: 0">
            <strong>使用方法:</strong> {{ record.moa }}
          </p>
          <p style="margin: 0">
            <strong>禁忌:</strong> {{ record.contraindicated_use || '暂无' }}
          </p>
        </template>

       
        <template #expandColumnTitle>
          <span style="color: red">More</span>
        </template>
      </a-table>
    </div>
  </div>

  <!-- 弹窗 -->
  <a-modal v-model:visible="showAddModal" title="新增药品" @ok="handleSubmit">
    <a-form :model="newDrug" :rules="rules" ref="formRef">
      <a-form-item label="药品名称" name="name">
        <a-input v-model:value="newDrug.name" />
      </a-form-item>
      <a-form-item label="剂型" name="dosage_from">
        <a-input v-model:value="newDrug.dosage_from" />
      </a-form-item>
      <a-form-item label="价格" name="price">
        <a-input-number v-model:value="newDrug.price" style="width: 100%" />
      </a-form-item>
      <a-form-item label="有效期" name="expiry_data">
        <a-input v-model:value="newDrug.expiry_data" />
      </a-form-item>
      <a-form-item label="使用方法" name="moa">
        <a-input v-model:value="newDrug.moa" />
      </a-form-item>
      <a-form-item label="禁忌" name="contraindicated_use">
        <a-input v-model:value="newDrug.contraindicated_use" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

// 表格数据
const data = ref([]);
const loadData = () => {
  axios.get("http://localhost:8080/getalldrug").then(res => {
    data.value = res.data;
  });
};
loadData();

// 删除功能
const handleDelete = (drug_id) => {
  axios.get(`http://localhost:8080/delectbyid?drug_id=${drug_id}`).then(() => {
    loadData(); // 删除后刷新数据
  }).catch(err => {
    console.error("删除失败:", err);
  });
};

// 新增功能
const showAddModal = ref(false);
const newDrug = ref({
  name: '',
  dosage_from: '',
  price: 0,
  expiry_data: '',
  moa: '',
  contraindicated_use: '',
});
const rules = {
  name: [{ required: true, message: '请输入药品名称!' }],
  dosage_from: [{ required: true, message: '请输入剂型!' }],
  price: [{ required: true, message: '请输入价格!', type: 'number' }],
  expiry_data: [{ required: true, message: '请输入有效期!' }],
};
const formRef = ref();
const handleSubmit = () => {
  axios.post("http://localhost:8080/druginsert", newDrug.value).then(() => {
    loadData(); // 新增后刷新数据
    showAddModal.value = false;
    newDrug.value = { // 重置表单
      name: '',
      dosage_from: '',
      price: 0,
      expiry_data: '',
      moa: '',
      contraindicated_use: '',
    };
  }).catch(err => {
    console.error("新增失败:", err);
  });
};

// 表格列配置
const columns = [
  {
    title: '药品ID',
    dataIndex: 'drug_id',
    key: 'drug_id',
    fixed: true,
  },
  {
    title: '药品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '剂型',
    dataIndex: 'dosage_from',
    key: 'dosage_from',
    align: 'center',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
  },
  {
    title: '有效期',
    dataIndex: 'expiry_data',
    key: 'expiry_data',
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