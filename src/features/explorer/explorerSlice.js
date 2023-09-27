import { createSlice } from "@reduxjs/toolkit";
import dataCategories from "../../data/dataCategories"
import recipes from "../../data/recipes"

const initialState = {
    categories: dataCategories,
    recipes,
    recipesFilteredByCategory: [],
    categorySelected: null,
    recipeIdSelected: null,
}


export const explorerSlice = createSlice({
    name:"explorer",
    initialState : initialState ,
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
        },
        setRecipeIdSelected: (state, action) => {
            state.recipeIdSelected = action.payload
        },
    }

})

export const {setCategorySelected, setRecipeIdSelected } = explorerSlice.actions
export default explorerSlice.reducer