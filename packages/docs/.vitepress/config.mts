/*
 * @Author: zhoumeidan
 * @Date: 2024-12-28 19:16:23
 * @LastEditTime: 2024-12-28 19:20:16
 * @LastEditors: zhoumeidan
 * @Description: 
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "md-element-plus",
  description: "高仿饿了吗组件库",
  base: "/md-element-plus/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
