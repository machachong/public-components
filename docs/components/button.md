## Button 按钮

常用的操作按钮

### 基础用法

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

:::demo

```vue
<template>
  <el-row class="mb-10">
    <boke-button @click="handleClick">default</boke-button>
    <boke-button type="primary">Primary</boke-button>
    <boke-button type="success">Success</boke-button>
    <boke-button type="info">Info</boke-button>
    <boke-button type="warning">Warning</boke-button>
    <boke-button type="danger">Danger</boke-button>
  </el-row>
</template>

<script setup>
import { ref, defineComponent } from 'vue';
const a = ref(1);
const handleClick = () => {
  console.log(111);
};
</script>
```

:::

### 配置

属性配置参考 element-plus

#### Attributes

| 属性名                    | 说明 | 类型 | 默认值 | 枚举 |
| ------------------------- | :--: | ---: | ------ | ---- |
| 属性配置参考 element-plus |  -   |    - | -      | -    |
