import { counterActions } from "./store";
import { useDispatch } from "react-redux";

const Parent = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment(5));
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Parent;
