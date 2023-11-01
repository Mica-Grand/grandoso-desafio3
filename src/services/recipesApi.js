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

        getProfileImage: builder.query({
            query: localId => `profileImages/${localId}.json`,
          }),
          postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
              url: `profileImages/${localId}.json`,
              method: 'PUT',
              body: {
                image: image,
              },
            }),
          }),
          postFavorite: builder.mutation({
            query:  ({ recipe, localId }) => ({
              url: `favoriteRecipes/${localId}.json`,
              method: 'POST',
              body: 
                recipe, 
            }),
          }),
          
          deleteFavorite: builder.mutation({
            query: ({ recipeId, localId }) => ({
              url: `favoriteRecipes/${localId}/${recipeId}.json`,
              method: 'DELETE',
            }),
          }),

          getFavoriteRecipes: builder.query({
            query: localId =>  `favoriteRecipes/${localId}.json`,
          }),
    }),



})

export const {
    useGetCategoriesQuery , 
    useGetRecipesQuery, 
    useGetRecipesByCategoryQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useGetFavoriteRecipesQuery,
    useDeleteFavoriteMutation,
    usePostFavoriteMutation,

  }= recipesApi;