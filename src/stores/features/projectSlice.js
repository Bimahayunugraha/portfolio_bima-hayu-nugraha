import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = data;

export const todosSlice = createSlice({
	name: "project",
	initialState,
});

export default todosSlice.reducer;
