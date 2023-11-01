import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRecipes: [],
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addRecipeToFavorites: (state, action) => {
      const recipe = action.payload;
      if (!state.favoriteRecipes.some(favoriteRecipe => favoriteRecipe.id === recipe.id)) {
        state.favoriteRecipes.push(recipe);
      }
    },
    removeRecipeFromFavorites: (state, action) => {
      const recipeId = action.payload;
      state.favoriteRecipes = state.favoriteRecipes.filter(recipe => recipe.id !== recipeId);
    },
    setFavoriteRecipes: (state, action) => {
      state.favoriteRecipes = action.payload;
    }
  },
});

export const { addRecipeToFavorites, removeRecipeFromFavorites, setFavoriteRecipes } = favsSlice.actions;

export default favsSlice.reducer;
