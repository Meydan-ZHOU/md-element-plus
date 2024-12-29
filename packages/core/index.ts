/*
 * @Author: zhoumeidan
 * @Date: 2024-12-28 18:16:01
 * @LastEditTime: 2024-12-29 17:50:42
 * @LastEditors: zhoumeidan
 * @Description: 
 */
import {makeInstall} from "@md-element-plus/utils";
import components from "./components";
import "@md-element-plus/theme/index.css"

const installer = makeInstall(components);
export * from "../components";

export default installer;