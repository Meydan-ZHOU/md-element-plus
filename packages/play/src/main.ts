/*
 * @Author: zhoumeidan
 * @Date: 2024-12-28 17:09:27
 * @LastEditTime: 2024-12-29 17:45:13
 * @LastEditors: zhoumeidan
 * @Description: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MdElementPlus from "md-element-plus"
import "md-element-plus/dist/index.css"


createApp(App).use(MdElementPlus).mount('#app')
