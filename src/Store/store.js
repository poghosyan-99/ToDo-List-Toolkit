import { configureStore } from "@reduxjs/toolkit";
import { textReducer } from "./Slices/Text/textSlice";
import { toDosReducer } from "./Slices/ToDos/toDosSlice";

const store = configureStore({
    reducer: {
        text: textReducer,
        toDos: toDosReducer
    },
})

export default store;