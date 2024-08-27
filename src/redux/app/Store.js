

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice";

//creating store
export const store = configureStore({
    reducer:{
        allCart : cartSlice
    }
})



export default store;

