## 高阶表格组件

boke-table 高级表格，对 table 的二次封装,减少代码量，统一风格，配置

#### 基础用法

普通表格。

:::demo

```vue
<template>
  <boke-table
    border
    row-key="id"
    highlight-current-row
    :requestFunc="getList"
    :columns="columns"
    :mountedDefault="true"
    @sort-change="sortChange"
    @current-change="handleCurrentChange"
    @page-change="pageChange"
    @handleSelectionChange="handleSelectionChange"
  >
    <template #tableTitle>
      <el-tabs v-model="activeTabs" class="boke-tabs-small" @tab-change="changeTab">
        <el-tab-pane label="任务列表" name="1"> </el-tab-pane>
        <el-tab-pane label="草稿箱" name="2"></el-tab-pane>
      </el-tabs>
    </template>
    <template #tableHandle> <el-button type="danger">批量删除</el-button> </template>
    <template #handle>
      <el-space spacer="|">
        <el-link type="primary" link>激活</el-link>
        <el-link disabled>禁用样式</el-link>
      </el-space>
    </template>
  </boke-table>
</template>

<script setup>
import { ref, reactive, defineComponent } from 'vue';
// 数据源
const multipleSelection = ref([]);
const activeTabs = ref('1');
const columns = ref([
  {
    label: '序号',
    prop: 'id',
    type: 'selection',
    width: 100,
    fixed: 'left',
  },
  {
    label: '输入框',
    prop: 'name',
    width: 150,
    sortable: true,
  },
  {
    label: '手机号必填',
    prop: 'phone',
    width: 150,
  },
  {
    label: '单选',
    prop: 'radio',
    width: 150,
  },
  {
    label: '开关',
    prop: 'switch',
    width: 150,
  },
  {
    label: '复选',
    prop: 'checkbox',
    width: 150,
  },
  {
    label: '状态',
    prop: 'statusStr',
  },
  {
    label: '日期',
    prop: 'date2',
    width: 150,
  },
  {
    label: '日期范围',
    prop: 'date1',
    width: 500,
    type: 'expand',
  },
  {
    label: '自定义组件',
    prop: 'custom',
    width: 150,
  },
  {
    label: '操作',
    prop: 'handle',
    fixed: 'right',
    width: 260,
  },
]);
const sortChange = (val) => {
  console.log(val);
};
const pageChange = (val) => {
  console.log(val);
};
const handleCurrentChange = (val) => {
  console.log(val);
};
const handleSelectionChange = (val) => {
  console.log(11, val);
  multipleSelection.value = val;
};
const getList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        items: [
          {
            id: 1,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '1',
            date2: '2',
            custom: '3',
            children: [
              // {
              // 	id: "1-1",
              // 	name: "张三",
              // 	phone: "17688886666 ",
              // 	switch: "1",
              // 	radio: "1",
              // 	date1: "2",
              // 	date2: "2",
              // 	custom: "3"
              // }
            ],
          },
          {
            id: 2,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 3,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 4,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 5,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 6,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 7,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 8,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 9,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 10,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 11,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
          {
            id: 12,
            name: '张三',
            phone: '17688886666 ',
            switch: '1',
            radio: '1',
            statusStr: '2',
            date2: '2',
            custom: '3',
          },
        ],
        total: 12,
      });
    });
  });
};
</script>
```

:::

### 配置参数

element plus 表单的所有属性，组件都兼容， form-item 的详细属性在 formProp 中设置

#### Attributes

| 属性名      |                                   说明                                    |    类型 | 默认值 | 枚举       |
| ----------- | :-----------------------------------------------------------------------: | ------: | ------ | ---------- |
| form-data   |               必填，绑定表单 model,所有表单的值都在上面绑定               |  object | -      | -          |
| formColumns |                            必填，表单渲染 json                            |   array | -      | -          |
| rules       |                  可选，表单 rules 规则，同 element plus                   |   array | -      | -          |
| label-width |                     可选，label 宽度，同 element plus                     |       - | -      | -          |
| vertical    |          可选，表单的排列方向，true 为竖向排列，false 为横向排列          | boolean | true   | true,false |
| ref         | 可选，通过 ref 可以获取 boke-form 组件实例，还可以通过 ref 来调用内部事件 |  object | -      | -          |

#### event

| 事件名     |         说明         |        回调参数 |
| ---------- | :------------------: | --------------: |
| clickFunc  |    点击时触发回调    | 返回 event 对象 |
| changeData | 表单值改变时触发回调 |      返回新的值 |

#### slot

| 事件名     |           说明           |
| ---------- | :----------------------: |
| slot       | 表单项自定义表单内容插槽 |
| formFooter |       表单结尾插槽       |
| formCustom |     自定义表单 item      |
