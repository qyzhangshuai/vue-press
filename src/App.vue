<template>
 <div>
   <zf-button>默认按钮</zf-button>
    <zf-button type="primary">主要按钮</zf-button>
    <zf-button type="success">成功按钮</zf-button>
    <zf-button type="info">信息按钮</zf-button>
    <zf-button type="warning">警告按钮</zf-button>
    <zf-button type="danger">危险按钮</zf-button>
    <zf-icon icon="edit"></zf-icon>
    <zf-icon icon="sousuo"></zf-icon>
    <zf-button type="success" icon="sousuo" icon-position="left">搜索A</zf-button>
    <zf-button type="success" icon="sousuo" icon-position="right">搜索B</zf-button>
    <zf-button type="success" loading>加载中</zf-button>
 </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>


