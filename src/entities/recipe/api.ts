import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState, IRecipe, IResponse } from './model';
import { toast } from 'sonner';

export const getAll = createAsyncThunk('recipe/getAll', async () => {
  const response = await fetch('https://dummyjson.com/recipes?limit=50');
  const data: IResponse = await response.json();
  return data.recipes;
});

export const getOne = createAsyncThunk('recipe/getOne', async (id: number) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data: IRecipe = await response.json();
  return data;
});

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    filterByCuisine: (state, action) => {
      const { recipes } = state;
      console.log(action.payload);
      if (action.payload === '') {
        state.filteredRecipes = recipes;
      } else {
        state.filteredRecipes = recipes.filter(
          (recipe) => recipe.cuisine === action.payload,
        );
      }
    },
    filterByMealType: (state, action) => {
      const { recipes } = state;
      if (action.payload === '') {
        state.filteredRecipes = recipes;
      } else {
        state.filteredRecipes = recipes.filter((recipe) =>
          recipe.mealType.includes(action.payload),
        );
      }
    },
    filterByDifficulty: (state, action) => {
      const { recipes } = state;
      if (action.payload === '') {
        state.filteredRecipes = recipes;
      } else {
        state.filteredRecipes = recipes.filter(
          (recipe) => recipe.difficulty === action.payload,
        );
      }
    },
    clearFilters: (state) => {
      state.filteredRecipes = state.recipes;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.recipes = action.payload;
      state.filteredRecipes = action.payload;
    });
    builder.addCase(getAll.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast(action.error.message);
    });

    builder.addCase(getOne.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOne.fulfilled, (state, action) => {
      state.loading = false;
      state.currentRecipe = action.payload;
    });
    builder.addCase(getOne.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast(action.error.message);
    });
  },
});

export const {
  filterByCuisine,
  filterByMealType,
  filterByDifficulty,
  clearFilters,
} = recipeSlice.actions;
export default recipeSlice.reducer;
