import { IRecipe } from '@/entities/recipe';
import { RootState } from '@/entities/store';
import { Card } from '@/shared/ui/card';
import Menu from '@/widgets/menu/ui';
import { RecipesList } from '@/widgets/recipe';
import { useSelector } from 'react-redux';

export const HomePage = () => {
  const filteredRecipes: IRecipe[] = useSelector(
    (state: RootState) => state.recipe.filteredRecipes,
  );

  return (
    <div className='grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 w-full gap-3 mt-3'>
      <Menu />
      <div className='2xl:col-span-3 md:col-span-2 sm:grid-cols-1'>
        <Card className='w-full px-6 py-4  justify-start items-center gap-2.5 inline-flex'>
          <h3 className='text-black/90 text-xl font-medium leading-normal'>
            Найденные рецепты
          </h3>
          <span className='text-black/40 text-sm font-normal leading-snug'>
            {filteredRecipes.length}
          </span>
        </Card>
        <div className='bg-zinc-200'>
          <RecipesList />
        </div>
      </div>
    </div>
  );
};
