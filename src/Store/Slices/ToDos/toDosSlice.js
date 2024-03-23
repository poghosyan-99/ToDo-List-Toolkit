import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
    name: 'toDos',
    initialState: [],
    reducers: {
        addToDoItem(state, {payload}){
            console.log(state);
            // return [
            //     ...state,
            //     {
            //         id: new Date().getTime(),
            //         title: payload,
            //         isCompleted: false
            //     }
            // ];

            state.push(
                {
                    id: new Date().getTime(),
                    title: payload,
                    isCompleted: false
                }
            );

        },
        deleteTodoItem(state, {payload}){
            state.splice(payload, 1);
        },

        checkTodoItem(state, action) {
            return state.map(todo =>
              todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
            );
        }
    },
});

export const selectToDos = state => state.toDos;

export const { addToDoItem, deleteTodoItem, checkTodoItem } = toDosSlice.actions;
export const toDosReducer = toDosSlice.reducer;
