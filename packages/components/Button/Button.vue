<!--
 * @Author: zhoumeidan
 * @Date: 2024-12-28 18:03:10
 * @LastEditTime: 2024-12-29 17:44:07
 * @LastEditors: zhoumeidan
 * @Description: 
-->
<script setup lang="ts">
import { ElButton } from "element-plus";

defineOptions({
    name: "MdButton"
})
</script>

<template>
    <el-button class="md-button" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
        000
    </el-button>
</template>

<style lang="css">
@import "./style.css";
</style>