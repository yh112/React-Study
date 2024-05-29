import { INCREMENT, counterActions } from '../store';
// import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux'
const Counter = () => {
  const dispatch = useDispatch(); // 액션을 하기 위한 훅
  const counter = useSelector(state => state.counter) // 전역 상태를 가져옴
  const show = useSelector(state => state.showCounter)
  const incrementHandler = () => {
    dispatch(counterActions.currentState("졸림"));
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement("라꾸라꾸펴라"));
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase("집에 갈게 ㅋㅋ")) // 5가 액션에 들어가서 payload로 들어감
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      {show && <div>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>졸리나요</button>
        <button onClick={increaseHandler}>라꾸라꾸펴라</button>
        <button onClick={decrementHandler}>집에 갈게ㅋㅋ</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;