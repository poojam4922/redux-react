import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    user:null,
}


const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state, action) =>{
            state.user = action.payload;
        },
        logout:(state)=>{
            state.user=null;
        }
    }
})


export const {login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;