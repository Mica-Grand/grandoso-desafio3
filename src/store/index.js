import { configureStore } from "@reduxjs/toolkit";
import favsSlice from "../features/favs/favsSlice";

export const store= configureStore ({
    reducer: {
        favs: favsSlice,
    },
})