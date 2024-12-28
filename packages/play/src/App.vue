<!--
 * @Author: zhoumeidan
 * @Date: 2024-12-28 17:09:27
 * @LastEditTime: 2024-12-28 18:24:43
 * @LastEditors: zhoumeidan
 * @Description: 
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <md-button type="primary">Button</md-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
