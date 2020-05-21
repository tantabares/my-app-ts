import React, { PureComponent } from "react";

type ButtonType = "+" | "-";

class Button extends PureComponent<
  {type: ButtonType, updateCount: (type: ButtonType) => void},
  {}
> {
  render(): JSX.Element {
    const {type, updateCount} = this.props;
    return (
      <button onClick={() => updateCount(type)}>{type}</button>
    );
  }
}

export default Button;