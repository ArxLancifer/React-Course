import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../store/counterSlice';

const Counter = () => {

    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(increment())
  };



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
