import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"

import {baseUrl} from "../firebase"

export const recipesApi = createApi( {
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getRecipes: builder.query({
            query: () => 'recipes.json',
        }),
        getRecipesByCategory: builder.query({
            query: category => 
            `recipes.json?orderBy="category"&equalTo="${category}"`,
        }),

    }),

})

export const {
    useGetCategoriesQuery , 
    useGetRecipesQuery, 
    useGetRecipesByCategoryQuery }= recipesApi;
