import { RootState } from '@/entities/store';
import { Skeleton } from '@/shared/ui/skeleton';
import { Header } from '@/widgets/header';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import ArrowLeft from '@/shared/assets/icons/arrow-left.svg';
import { Button } from '@/shared/ui/button';

export const RecipeLayout = () => {
  const currentRecipe = useSelector(
    (state: RootState) => state.recipe.currentRecipe,
  );
  const loading = useSelector((state: RootState) => state.recipe.loading);

  return (
    <main className='bg-zinc-100 p-3'>
      <Header>
        <Link to='/'>
          <Button size='icon' variant='ghost' className='h-6 w-6'>
            <img src={ArrowLeft} alt='Назад' />
          </Button>
        </Link>
        {!loading ? (
          <h1 className='text-black/90 text-2xl font-medium leading-7'>
            {currentRecipe?.name}
          </h1>
        ) : (
          <Skeleton>
            <h1 className='text-black/0 text-2xl font-medium leading-7'>
              recipe name
            </h1>
          </Skeleton>
        )}
      </Header>
      <Outlet />
    </main>
  );
};
