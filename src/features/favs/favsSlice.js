import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRecipes: [],
  loading: false, 
  error: null,
  recipeKeys: {}, 
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addRecipeToFavorites: (state, action) => {
      state.favoriteRecipes.push(action.payload);
    },
    removeRecipeFromFavorites: (state, action) => {
        state.favoriteRecipes = state.favoriteRecipes.filter(
          (recipe) => recipe.id !== action.payload.id
        );
      },
    setFavoriteRecipes: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },

    setRecipeKey: (state, action) => {
      const { recipeId, recipeKey } = action.payload;
      state.recipeKeys[recipeId] = recipeKey;
    },
  },
});

export const { addRecipeToFavorites, removeRecipeFromFavorites, setFavoriteRecipes,setRecipeKey } = favsSlice.actions;

export default favsSlice.reducer;
