import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    checked:false,
    email:'',
    password:'',
};



const RememberSlice = createSlice({
    name:"remember",
    initialState,
    reducers:{
            setRemember:(state, action) =>{
                state.checked = true;
                state.email = action.payload.email;
                state.password = action.payload.password;
            },
            eraseRemember:(state, action) =>{
                state.checked = false;
                state.email = '';
                state.password = '';
            }
    }
})


export const {setRemember, eraseRemember} = RememberSlice.actions;
export default RememberSlice.reducer