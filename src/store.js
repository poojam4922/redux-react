import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./redux/CounterSlice";
import imageSlice from "./redux/imageSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { version } from "react";
import AuthSlice from "./redux/AuthSlice";
import RememberSlice from "./redux/RememberSlice";
import PostSlice from "./redux/PostSlice";
import ProductSlice from "./redux/ProductSlice";
import CartSlice from "./redux/CartSlice";


const config ={
    key : 'root',
    version:1,
    storage,
    blacklist:['PostSlice', 'AuthSlice', 'RememberSlice','ProductSlice']
}

const slices =combineReducers({
    counter:CounterSlice,
    image:imageSlice,
    auth:AuthSlice,
    remember:RememberSlice,
    PostSlice,
    ProductSlice,
    CartSlice,
})

const store =configureStore({
    reducer:persistReducer(config, slices),
    devTools:true,
    middleware:(setup) =>setup({
        serializableCheck : false,  
    })
})


export default store;