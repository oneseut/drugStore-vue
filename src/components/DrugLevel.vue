<template>
<div style="height: 59px; width: 100%; display: flex; background-color: white;border-width: 3px; border-bottom-style: solid;border-color: rgb(245, 245, 245); border-radius: 5px; transition: all 0.2s;" class="hover-box">
<a-avatar
:size="25"
style="margin-left: 18px;margin-top: 16px;background-color:#3aa1ff;"
> 
{{ num }}
</a-avatar>
<h4 style="margin-top: 18px; margin-left: 14px; word-spacing: 10px;">药品:{{ drug }} 销售量: {{ quantity }}</h4>
</div>
</template>

<script setup>
defineProps(['drug','quantity','num'])
</script>

<style>

</style>