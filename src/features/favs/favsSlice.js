import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRecipes: [],
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFavoriteRecipe: (state, action) => {
      state.favoriteRecipes.push(action.payload);
    },
    removeFavoriteRecipe: (state, action) => {
      state.favoriteRecipes = state.favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    setFavoriteRecipes: (state, action) => {
      state.favoriteRecipes = action.payload;
    },
  },
});

export const { addFavoriteRecipe, removeFavoriteRecipe, setFavoriteRecipes } = favsSlice.actions;

export default favsSlice.reducer;
