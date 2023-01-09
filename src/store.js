import { configureStore } from "@reduxjs/toolkit";
import MusicPlayerSlice from "./features/MusicPlayerReducer/MusicPlayerSlice";

export default configureStore({
    reducer: {
        "MusicPlayer": MusicPlayerSlice
    }
})