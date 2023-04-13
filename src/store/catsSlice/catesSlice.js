import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cats",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    fetchCatsStart: (state) => {
      state.isLoading = true;
    },
    fetchCatsSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchCatsFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const { fetchCatsStart, fetchCatsSuccess, fetchCatsFailed } =
  cartReducer.actions;
export const catsSlice = cartReducer.reducer;
