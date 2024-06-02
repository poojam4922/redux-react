import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    images:["https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg"
        ,"https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-13.jpg"
    ]
}


const ImageSlice = createSlice({
    name:"image",
    initialState,
    reducers:{
        addImage:(state,action)=>{
            console.log("action.payload", action.payload)
            state.images.push(action.payload)
        },
        removeImage:(state,action)=>{
            state.images.splice(action.payload,1)
        },
        resetImage:(state, action) =>{
            state.images = []
        }
    }
})


export const {addImage, removeImage, resetImage} = ImageSlice.actions;
export default ImageSlice.reducer;