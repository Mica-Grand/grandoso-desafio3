import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  categories: [],
  recipes: [],
  productsFilteredByCategory: [],
  categorySelected: null,
  productIdSelected: null,
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