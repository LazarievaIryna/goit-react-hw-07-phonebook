import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";

const filtersInitialState = ''

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter(_, action) {
     return action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
