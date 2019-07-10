import React, { Component } from "react";
import { Tag, Tooltip } from "igroot";

const { CheckableTag } = Tag;

export default class Tags extends Component {
  constructor(props) {
    super(props);
    const { defaultValue, radio, emptied } = this.props;
    const value = defaultValue || (radio ? "" : []);

    this.isRadio = !!radio;
    this.emptied = emptied || !this.isRadio;
    this.state = { value };
  }

  isRadio = false;

  componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      const { value } = nextProps;
      const newValue = value || (this.isRadio ? "" : []);
      this.setState({
        value: newValue
      });
    }
  }

  getCheckableOptions = () => {
    const { options = [] } = this.props;
    const { value } = this.state;

    if (this.isRadio) {
      return options.map(item => ({ ...item, checked: item.value === value }));
    } else {
      return options.map(item => ({
        ...item,
        checked: value.includes(item.value)
      }));
    }
  };

  handleChange = (tag, checked) => {
    const { onChange, disabled } = this.props;
    let { value = [] } = this.state;

    if (disabled) return;

    if (this.isRadio) value = checked || !this.emptied ? tag.value : undefined;

    if (!this.isRadio && checked) value.push(tag.value);

    if (!this.isRadio && !checked)
      if (this.emptied || value.length > 1)
        value = value.filter(item => item !== tag.value);

    this.setState({ value }, () => {
      onChange && onChange(value);
    });
  };

  render() {
    const { disabled, className, style } = this.props;
    const newOptions = this.getCheckableOptions();

    return (
      <div className={`igroot-tags ${className || ""}`} style={style}>
        {newOptions.map(tag => (
          <Tooltip title={tag.tip} key={tag.value}>
            <CheckableTag
              {...this.props}
              key={tag.value}
              checked={tag.checked}
              onChange={val => this.handleChange(tag, val)}
              style={
                disabled
                  ? tag.checked
                    ? style.disable
                    : style.activeDisable
                  : null
              }
            >
              {tag.label}
            </CheckableTag>
          </Tooltip>
        ))}
      </div>
    );
  }
}

const style = {
  disable: {
    background: "#e6e6e6",
    border: "1px solid #d9d9d9",
    color: "#fff",
    cursor: "not-allowed"
  },
  activeDisable: {
    background: "#f7f7f7",
    border: "1px solid #d9d9d9",
    color: "rgba(0, 0, 0, 0.25)",
    cursor: "not-allowed"
  }
};
