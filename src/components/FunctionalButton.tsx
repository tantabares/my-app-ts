import React from "react";

type ButtonType = "+" | "-";

const Button = ({
    type,
    updateCount,
}: {
    type: ButtonType;
    updateCount: (type: ButtonType) => void;
}): JSX.Element =>
  <button onClick={() => updateCount(type)}>{type}</button>

export default Button;