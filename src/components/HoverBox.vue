<template>
  <div class="hover-box" :style="{ width: widthText }" style="display: flex;flex-direction: column;transition: all 0.2s; height: 145px;border-width: 1px; border-style: solid;border-color: rgb(245, 245, 245); background-color: white;">
    <div style="display: flex; align-items: center;">
      <a-avatar
        :size="36"
        style="margin-left: 18px;margin-top: 16px;"
        :src="avatarSrc"
      >
      </a-avatar>
      <h4 style="margin-top: 26px; margin-left: 12px;">{{boxName}}</h4>
    </div>
    <div style="display: flex; flex-wrap: wrap;">
        <div style="width: 236px;">
      <p style="font-size: 14px; font-family:Arial, Helvetica, sans-serif; margin-left: 20px; margin-top: 18px;">
        {{ mainText }}
      </p>
      </div>
      <p style="font-size: 12px; margin-left: 20px; margin-top: 5px;">
        {{ sourceText }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  avatarSrc: {
    type: String,
    default:'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
  },
  mainText: {
    type: String,
    required: true
  },
  widthText: {
    type: String,
    default: '265px'
  },
  boxName: {
    type: String,
    default: 'Mysql'
  }
});
</script>

<style>

</style>