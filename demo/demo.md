---
order: 1
title:
  zh-CN: 基本使用
  en-US: Basic
---

## zh-CN

基本使用方法

## en-US

Basic

```jsx
import React, { Component } from 'react'
import Tags from 'igroot-tags/src/index'
// 演示使用  正式环境请使用
// import Tags from 'igroot-tags'

import React, { Component } from 'react'

class App extends Component {
	render() {
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

		return (
			<div>
				<h3 style={{ height: 40 }}>多选</h3>
				<Tags options={options} defaultValue={['1', '2']}/>
				<h3 style={{ height: 40 }}>单选</h3>
				<Tags radio options={options} />
			</div>
		)
	}
} 

ReactDOM.render(
  <App />
, mountNode)
```