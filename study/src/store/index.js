import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initailState = {counter: "", showCounter: true}
const counterSlice = createSlice({ // 초기값 설정
    name: 'counter', // 리듀서 이름
    initialState: initailState, // 초기값 할당
    reducers: {
        currentState(state, action){ // 액션
            // 원래 리덕스의 상태를 이용하려면 불변성을 이용하여
            // 객체를 복사 후 값을 증가시켰지만
            // 자동으로 리덕스 툴킷은 객체를 자동으로 복사를 해준다.
            state.counter = action.payload;
        },
        decrement(state,action){ // 액션
            state.counter = action.payload;
        },
        increase(state, action){ // 액션
            console.log(action);
            state.counter = action.payload;
        },
        toggleCounter(state){ // 액션
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;