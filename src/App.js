
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from "./store/counter/counterSlice"
function App() {
  const count = useSelector((store) =>store.counter.count)
  const dispatch = useDispatch()
  console.log(count);
  const decrementHandler = () => {
    dispatch(decrement(5))
}

const incrementHandler = () => {
    dispatch(increment(5))
}
  return (
    <div className="App" style={{ padding: 20 }}>
        <h1>Counter App</h1>
        <button onClick={decrementHandler}>-</button>
        <span style={{ padding: 10 }}>{count}</span>
        <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App;
