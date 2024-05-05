import { IRecipe, TRecipeDifficulty } from '@/entities/recipe';

export interface IRecipeCardProps {
  data: IRecipe;
}

export interface IRecipeDifficultyRateProps {
  rate: TRecipeDifficulty;
}
