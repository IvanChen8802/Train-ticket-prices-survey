import React, { Component } from "react";
import '../StyleSheets/Radio.css';

export default class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
        answer: null,
        textDisabled: true,
        text: "",
    };
  }

  onChangeAnswer = e => {
    this.setState({
        answer: e.target.value
      });
    if (e.target.value === "其他") {
      this.setState({
        textDisabled: false
      })}
    else {
      this.setState({textDisabled: true});
    }
  };

  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleOthers (option) {
    const normal = 
      <label class="radio-container">{option}
        <input
        type = "radio"
        value = {option}
        onChange = {this.onChangeAnswer}
        checked = {this.state.answer === option}
        />
        <span class="checkmark"></span>
      </label>

    const others = 
      <label class="radio-container">{option}
        <input
        type = "radio"
        value = {option}
        onChange = {this.onChangeAnswer}
        checked = {this.state.answer === option}
        />
        <input id="text-input" type="text" disabled={this.state.textDisabled} value={this.state.text} onChange={this.onChangeText} />
        <span class="checkmark"></span>
      </label>

    if (option === "其他") {
      return others;
    }
    return normal;
  }

  optionList() {
    const options = this.props.options;
    const listOptions = options.map((option) => this.handleOthers(option))
    return(
      listOptions
    );
  };

  render() {
    return (
      <div>{this.optionList()}</div>
    );
  }
}