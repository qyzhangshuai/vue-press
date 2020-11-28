//插件的入口
import Button from "./Button";
import Icon from "./Icon";
const install = (Vue)=>{
    //require.context() 
    // Vue.component(Button.name,Button);
    // Vue.component(Icon.name,Icon)
   const requireComponent = require.context(".",true,/\.vue/);//["./Button.vue"]
   requireComponent.keys().forEach(fileName=>{
        const config = requireComponent(fileName);
       Vue.component(config.default.name,config.default)
   })
}
export default {
    install
}