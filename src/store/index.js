import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { recipesApi } from "../services/recipesApi";
import favsSlice from "../features/favs/favsSlice";
import explorerSlice from "../features/explorer/explorerSlice";

 const store= configureStore ({
    reducer: {
        favs: favsSlice,
        explorer: explorerSlice,
        [recipesApi.reducerPath]: recipesApi.reducer
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(recipesApi.middleware),
})

setupListeners(store.dispatch)

export default store