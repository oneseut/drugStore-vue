<template>
  <div 
    class="ValidCode disabled-select" 
    :style="`width:${width}; height:${height}`" 
    @click="refreshCode"
  >
    <span 
      v-for="(item, index) in codeList" 
      :key="index" 
      :style="getStyle(item)"
    >
      {{ item.code }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 定义 props
const props = defineProps({
  width: {
    type: String,
    default: '100px'
  },
  height: {
    type: String,
    default: '34px'
  },
  length: {
    type: Number,
    default: 4
  }
})

// 定义 emit 事件
const emit = defineEmits(['update:value'])

// 响应式数据
const codeList = ref([])

// 生成验证码
function createdCode() {
  const len = props.length
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
  const charsLen = chars.length
  const newCodeList = []

  for (let i = 0; i < len; i++) {
    const rgb = [
      Math.round(Math.random() * 220),
      Math.round(Math.random() * 240),
      Math.round(Math.random() * 200)
    ]
    newCodeList.push({
      code: chars.charAt(Math.floor(Math.random() * charsLen)),
      color: `rgb(${rgb.join(',')})`,
      fontSize: `1${Math.floor(Math.random() * 10)}px`,
      padding: `${Math.floor(Math.random() * 10)}px`,
      transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
    })
  }

  codeList.value = newCodeList
  emit('update:value', newCodeList.map(item => item.code).join(''))
}

// 刷新验证码
function refreshCode() {
  createdCode()
}

// 组件挂载时生成初始验证码
onMounted(() => {
  createdCode()
})

// 计算样式
function getStyle(data) {
  return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
}
</script>

<style scoped>
.ValidCode {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.ValidCode span {
  display: inline-block;
}
</style>