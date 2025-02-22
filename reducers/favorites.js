import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const favoritesSlice = createSlice({
	name: "favorites",

	initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.value.push(action.payload);
		},
		removeFavorite: (state, action) => {
			
			state.value = state.value.filter((item) => item.id !== action.payload.id);
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
