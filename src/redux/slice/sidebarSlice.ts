// redux/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "toggleMobileMenu",
  initialState: { mobileMenuOpen: false },
  reducers: {
    toggleMobileMenu: (state : { mobileMenuOpen: boolean }) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

export const { toggleMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;