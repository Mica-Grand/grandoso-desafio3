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
}
})

export const { addFavoriteRecipe, removeFavoriteRecipe } = favsSlice.actions;

export default favsSlice.reducer