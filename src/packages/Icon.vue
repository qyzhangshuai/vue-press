<template>
    <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
</svg>
</template>
<script>
import "../styles/icon";
export default {
    name:"zf-icon",
    props:{
        icon:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    .icon{
       width: 16px;
       height:16px;
       vertical-align: middle;
    }
</style>