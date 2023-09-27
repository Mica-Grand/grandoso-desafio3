import { configureStore } from "@reduxjs/toolkit";
import favsSlice from "../features/favs/favsSlice";
import explorerSlice from "../features/explorer/explorerSlice";

export const store= configureStore ({
    reducer: {
        favs: favsSlice,
        explorer: explorerSlice,
    },
})