import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    val: 1,
  };
  constructor(props) {
    super(props);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick2() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    let { val, locked, numberWords, disabled, rolling } = this.props;
    let class2 = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) class2 += "Die-locked ";
    if (rolling) class2 += "Die-rolling ";

    return (
      <i
        className={class2}
        onClick={this.props.rollsLeft > 0 ? this.handleClick2 : undefined}
        disabled={disabled}
      ></i>
    );
  }
}

export default Die;
