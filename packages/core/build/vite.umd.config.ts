/*
 * @Author: zhoumeidan
 * @Date: 2024-12-29 16:17:41
 * @LastEditTime: 2024-12-29 16:31:09
 * @LastEditors: zhoumeidan
 * @Description: 
 */
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue"
import {resolve} from "path";

export default defineConfig({
    plugins:[vue()],
    build:{
        outDir:'./dist/umd',
        lib:{
            entry:resolve(__dirname,"../index.ts"),
            name:"MdElementPlus",
            fileName:"index",
            formats:['umd']
        },
        rollupOptions:{
            external:["vue"],
            output:{
                exports:"named",
                globals:{
                    vue:"Vue"
                },
                assetFileNames:(assetInfo)=>{
                    if(assetInfo.name === 'style.css') return "index.css";
                    return assetInfo.name as string;

                }
            }
        }
        
    }
})