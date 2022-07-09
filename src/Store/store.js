import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../Slice/appSlice";

export const store=configureStore({
    reducer:{
        appCounter:appSlice.reducer,
    }
})