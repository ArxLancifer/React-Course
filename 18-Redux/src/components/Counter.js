import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, increaseby5} from '../store/counterSlice';
import { useState } from 'react';
import { useRef } from 'react';

const Counter = () => {

    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const [addAmount, setAddAmount] = useState(0);
    const amountRef = useRef();
    // const x = useSelector(function(x){return x});
    // console.log(x)
  const toggleCounterHandler = () => {
    
  };

  function handleIncrement(){
    dispatch(increment())
  }

  function handlerDecrement(){
    dispatch(decrement())
  }
  function handlerByAmountHandler(){
    // dispatch(increaseby5());
    dispatch(increaseby5(addAmount))
  }

  function handleAddAmount(e){
    setAddAmount(+amountRef.current.value);
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
