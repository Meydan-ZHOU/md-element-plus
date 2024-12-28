/*
 * @Author: zhoumeidan
 * @Date: 2024-12-28 17:53:03
 * @LastEditTime: 2024-12-28 18:01:52
 * @LastEditors: zhoumeidan
 * @Description:  插件安装
 */
import type {App,Plugin} from "vue";
import {each} from "lodash-es";
type SFCWithInstall<T> = T & Plugin;

export function makeInstall(components:Plugin[]){
    const installer = (app:App)=>{
        each(components,(component:any)=>{
            app.use(component);
        });

    }
    return installer as Plugin;
}


export const withInstall = <T>(component:T)=>{
    (component as SFCWithInstall<T>).install = (app:App)=>{
        const name = (component as any).name;
        app.component(name,component as Plugin);
        
    }
    return component as SFCWithInstall<T>;
}