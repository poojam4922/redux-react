import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    counter:100
}

const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter++;
        },
        decrement:(state)=>{
            state.counter--;
        }
    }
})


export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;