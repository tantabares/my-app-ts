import React, { FC, useState, useCallback } from "react";
import Button from "./FunctionalButton";

const FucntionalCounter: FC<{}> = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(
    (e: string): void => {
      switch (e) {
        case "-":
          setCount(count - 1);
          break;
        case "+":
        default:
          setCount(count + 1);
          break;
      }
    },
    [count],
  )

    return (
        <div>
            <h2>Functional Component</h2>
            <h1>{count}</h1>
            <Button updateCount={updateCount} type="+" />
            <Button updateCount={updateCount} type="-" />
        </div>
    );
}

export default FucntionalCounter;