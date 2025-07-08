<template>
 <div style=" height: 100vh; display: flex; align-items: center; justify-content: space-evenly ; flex-direction: column; background-color: #0f9876;">
  <div style=" width: 50%; background-color: white; display: flex; border-radius: 6px; overflow: hidden; ">
    <div style="flex: 1; ">
      <img src="@/assets/login.6547f109.png" alt="" style="width: 100%;">
    </div>
    <div style="flex: 1; display: flex; justify-content: center; ">
   
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 26 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
         <h3 style="line-height: 100px; text-align: center;">欢迎进入无忧药店后台管理系统</h3>
            <a-form-item
              label="用户名"
              name="username"
              :rules="[{ required: true, message: '请输入用户名!' }]"
            >
              <a-input v-model:value="formState.username" />
            </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
<!-- //6666666666666 -->



<!-- 666 -->
        <a-form-item 
        label="验证码"
        name="code"
        :rules="[{ required: true, message: '请输入验证码' }]"
        >
        <div style="display: flex;">
        <a-input v-model:value="formState.code" style="flex: 1;"/> 
        <div style="flex: 1;">
          <ValidCode v-model:value="code" :length="4" ></ValidCode>
        </div>
        </div>
       
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 6, span: 20 }">
          <a-button type="primary" html-type="submit" style="width: 100%;">登录</a-button>
        </a-form-item>
  </a-form>
    </div>
  </div>
 </div>
</template>

<script setup>

import ValidCode from '@/components/ValidCode.vue';
import axios from 'axios';
import { reactive ,ref } from 'vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const formState = reactive({
  code: '',
  username: '',
  password: '',
});

const code = ref('')
const onFinish = values => {
  console.log(code.value)
  if( code.value.toLowerCase() == formState.code || code.value == formState.code){

  console.log('Success:', values);
  const user = {
    "uid":1,
    "user_name":'',
    "password":''
  }
  user.password=formState.password
  user.user_name=formState.username
  
  
    axios.post('http://localhost:8080/userlogin',user).then(
      function (response){
        console.log(response)

        if(response.data.code == 200){
          success("登录成功")
          router.push({name:"home"})
        }else{
          console.log("账户密码错误")
          error("用户名或密码错误请重新输入")
        }
      }
    ).catch(function (error) {
      console.log(error)
    })

    }else{
      console.log('验证码错误')
      warning("验证码错误请重新输入")
    }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const success = (msg) => {
  message.success(msg);
};
const error = (msg) => {
  message.error(msg);
};
const warning = (msg) => {
  message.warning(msg);
};
</script>

<style>

</style>