import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, increasebyAmount, toggleCounter} from '../store/counterSlice';
import { useState } from 'react';
import { useRef } from 'react';

const Counter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const [addAmount, setAddAmount] = useState(0);
    const amountRef = useRef();

  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  };

  function handleIncrement(){
    dispatch(increment())
  }

  function handlerDecrement(){
    dispatch(decrement())
  }
  function handlerByAmountHandler(){
    // dispatch(increaseby5());
    dispatch(increasebyAmount(addAmount))
  }

  function handleAddAmount(e){
    setAddAmount(+amountRef.current.value);
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter.showCounter && <div className={classes.value}>{counter.value}</div>}
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handlerByAmountHandler}>Increse by amount</button>
        <button onClick={handlerDecrement}>Decrement</button>
        <input type="text" value={addAmount} ref={amountRef} onChange={handleAddAmount} />
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
