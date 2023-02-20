import { createSlice } from "@reduxjs/toolkit";

const initialize = {
    value:0,
    showCounter:true
}

export const counterSlice = createSlice({
    
    name: 'counter',
    initialState: initialize,
    reducers: {
        increment: (state)=>{
            return  {
                value:state.value +1,
                showCounter:state.showCounter
            }
        },
        decrement:(state)=>{
            return  {
                value:state.value -1,
                showCounter:state.showCounter
            }
        },
        increasebyAmount: (state, action)=>{
            return  {
                value:state.value + action.payload,
                showCounter:state.showCounter
            }
        },
        toggleCounter: (state)=>{
            return  {
                value:state.value,
                showCounter:!state.showCounter
            }
        }
    },
    
})

export const {increment, decrement, increasebyAmount, toggleCounter} = counterSlice.actions;
export default counterSlice.reducer;