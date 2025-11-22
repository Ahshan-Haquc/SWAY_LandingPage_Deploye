import { configureStore } from "@reduxjs/toolkit";
import phoneSidebarReducer from "../redux/slice/sidebarSlice"

const store = configureStore({
    reducer: {
        toggleMobileMenu: phoneSidebarReducer,
    },
});

export default store;