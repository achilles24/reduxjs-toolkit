import { Provider, useSelector, useDispatch } from "react-redux";
import Parent from "./Parent";
import store, { toggleActions } from "./store";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const { title, count } = useSelector((state) => state.counter);
  const { toggle } = useSelector((state) => state.toggle);
  const toggleBtn = () => {
    dispatch(toggleActions.toggle());
  };
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{count}</h2>
      {toggle && <Parent />}
      <button onClick={toggleBtn}>toggle</button>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
