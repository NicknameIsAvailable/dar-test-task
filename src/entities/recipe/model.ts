export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

export interface IResponse { 
  recipes: IRecipe[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface IRecipesState {
    currentRecipe?: IRecipe;
    recipes: IRecipe[];
}

export const initialState: IRecipesState = {
  recipes: [],
}