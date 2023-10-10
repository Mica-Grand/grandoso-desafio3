import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { recipesApi } from "../services/recipesApi";
import favsSlice from "../features/favs/favsSlice";
import explorerSlice from "../features/explorer/explorerSlice";
import { authApi } from "../services/authApi";
import authSlice from "../features/auth/authSlice";

 const store= configureStore ({
    reducer: {
        favs: favsSlice,
        explorer: explorerSlice,
        auth: authSlice,
        [recipesApi.reducerPath]: recipesApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(recipesApi.middleware,authApi.middleware), 
})

setupListeners(store.dispatch)

export default store