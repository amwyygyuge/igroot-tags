### 受控的tags组件
简单的示例
```jsx
import Tags from 'igroot-tags'
import React, { Component } from 'react'
class Dome extends Component {
    render() {
        return (
            <div>
                <h3 style={{ height: 40 }}>多选</h3>
                <Tags options={[
                    {
                        label: '类型1',
                        value: '1'
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
                ]} />
                <h3 style={{ height: 40 }}>单选</h3>
                <Tags
                    radio
                    options={[
                        {
                            label: '类型1',
                            value: '1'
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
                    ]} />
            </div>
        )
    }
}
ReactDOM.render(<Dome />, mountNode)
```


### props

| props   | 类型      | 说明                        |
| ------- | ------- | ------------------------- |
| options | array   | tags的选项，只支持label和value的形式 |
| radio   | boolean | 单选 ，默认为多选状态               |

