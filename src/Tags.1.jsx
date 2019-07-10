import React, { Component } from 'react'
import { Tag, Tooltip } from 'igroot'
const { CheckableTag } = Tag
const disable = { background: '#e6e6e6', border: '1px solid #d9d9d9', color: '#fff' }
const activeDisable = { background: '#f7f7f7', border: '1px solid #d9d9d9', color: 'rgba(0, 0, 0, 0.25)' }

class Tags extends Component {
  constructor(props) {
    super(props)
    const value = this.props.value || this.props.radio !== undefined ? '' : []
    this.state = {
      value,
      options: this.options || []
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      const value = nextProps.value
      this.setState({ value })
      this.readValue(value)

    }
    if ('options' in nextProps) {
      if (nextProps.options.length !== this.state.options.length)
        this.setState({
          options: nextProps.options
        })
    }
  }

  readValue = (value) => {

    this.state.options.map(option => {
      option.checked = false
      return option
    })
    if (value === undefined) {
      this.setState({ options: this.state.options })
      return false
    }
    if (this.props.radio) {
      const option = this.state.options.find(option => option.value === value)
      if (option !== undefined) { this.state.options.find(option => option.value === value).checked = true }
    } else {
      value.forEach(item => {
        const option = this.state.options.find(option => option.value === item)
        if (option !== undefined) {
          option.checked = true
        }
      })
    }
    this.setState({ options: this.state.options })
  }

  componentWillMount() {
    const options = this.options || JSON.parse(JSON.stringify(this.props.options))
    this.setState({
      options: options.map(item => {
        item.checked = false
        return item
      })
    })
  }

  handleClick = (tag, val) => {
    if (this.props.disabled) return
    let value = []
    const options = this.state.options
    tag.checked = val
    if (this.props.radio) {
      value = val ? tag.value : undefined
      options.map(option => {
        option.checked = false
        return option
      }).find(option => option.value === tag.value).checked = val
    } else {
      options.forEach(option => {
        if (option.checked) {
          value.push(option.value)
        }
      })
    }
    this.setState({ options, value })
    this.triggerChange(value)

  }

  radioClick = (e) => {
    this.setState({
      value: e.target.value
    })
    this.triggerChange(e.target.value)
  }

  triggerChange = (changedValue) => {
    const onChange = this.props.onChange
    if (onChange) {
      onChange(changedValue)
    }
  }
  
  render() {
		const { options } = this.state 

		return (	
      <div>
        {
          options.map(tag => (
            <Tooltip title={tag.tip} key={tag.value}>
							<CheckableTag
								{...this.props}
								key={tag.value}
								onChange={(val) => this.handleClick(tag, val)}
								checked={tag.checked}
								style={this.props.disabled ? (tag.checked ? disable : activeDisable) : null}
							>
								{tag.label}
							</CheckableTag>
            </Tooltip>
          ))
        }
      </div>
    )
  }
}

export default Tags