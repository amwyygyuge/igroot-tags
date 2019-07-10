---
category: BComponents
type: General
title: Tags
subtitle: 受控标签组件
cols: 1
---


# Tags 组件

## 何时使用

需要利用 Tags 进行表单受控，支持单选和多选

## 安装方法

```jsx
  sl add -c igroot-tags
```

## API

```jsx
<Tags radio options={options} />
```

### 属性
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| style | 样式 | Object | - |
| className | 扩展样式类名 | string Or array | - |
| disalbed | 是否禁用状态，默认为 false | boolean | false |
| defaultValue | 初始值 | boolean | false |
| options | tags的选项，只支持label和value的形式 | array | - |
| radio | 类型 | boolean | false |

#### options
```jsx
const options = [
  {
    label: '类型1',
    value: '1',
    tip: '类型1'
  },
  {
    label: '类型2',
    value: '2'
  },
  {
    label: '类型3',
    value: '3'
  },
  {
    label: '类型4',
    value: '4'
  }
]
```


