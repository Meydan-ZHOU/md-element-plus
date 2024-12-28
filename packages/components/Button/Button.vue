<!--
 * @Author: zhoumeidan
 * @Date: 2024-12-28 18:03:10
 * @LastEditTime: 2024-12-28 18:24:26
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
    <el-button v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-button>
</template>