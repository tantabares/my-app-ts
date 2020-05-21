import React, { PureComponent } from "react";
import Button from "./ClassButton";

class ClassCounter extends PureComponent<{}, { count: number }> {
  state = { count: 0 };

  updateCount = (e: string): void => {
    switch (e) {
      case "-":
        this.setState({
          count: this.state.count - 1 
        });
        break;
      case "+":
      default:
        this.setState({
          count: this.state.count + 1
        });
        break;
    }
  };

  render(): JSX.Element {
    const {count} = this.state;

    return (
      <div>
        <h2>Class Component</h2>
        <h1>{count}</h1>
        <Button updateCount={this.updateCount} type="+" />
        <Button updateCount={this.updateCount} type="-" />
      </div>
    );
  }
}

export default ClassCounter;