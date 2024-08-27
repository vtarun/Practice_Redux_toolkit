import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showToggle = useSelector(state => state.counter.showToggle);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // dispatch({type: 'increment'});
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  };

  const handleIncrease = () => {
    // dispatch({type: 'increase', payload: 10});
    dispatch(counterActions.increase(10));
  };
  

  const handleToggle = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div>
      <div className={classes.value}>{counter}</div>
      <div>
      <button onClick={handleIncrement}>Increment Counter</button>
      <button onClick={handleDecrement}>Decrement Counter</button>
      <button onClick={handleIncrease}>Increse by 10 </button>
      </div>
      </div>
      }
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
