import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState, IResponse } from "./model";

export const getAll = createAsyncThunk(
    'recipe/getAll',
    async () => {
        const response = await fetch('https://dummyjson.com/recipes');
        const data: IResponse = await response.json();
        return data.recipes;
    }
)

export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        getOne: (state, action: PayloadAction<number>) => {
            const id = action.payload;

            fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(console.log);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.recipes = action.payload;
        });
    }
})

export const { getOne } = recipeSlice.actions;
export default recipeSlice.reducer;
