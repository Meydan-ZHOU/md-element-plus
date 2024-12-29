/*
 * @Author: zhoumeidan
 * @Date: 2024-12-28 18:16:01
 * @LastEditTime: 2024-12-29 16:16:39
 * @LastEditors: zhoumeidan
 * @Description: 
 */
import {makeInstall} from "@md-element-plus/utils";
import components from "./components";
import "@md-element-plus/theme/index.css"

const installer = makeInstall(components);
export * from "@md-element-plus/components";

export default installer;