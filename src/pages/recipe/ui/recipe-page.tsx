import { getOne } from '@/entities/recipe';
import { AppDispatch, RootState } from '@/entities/store';
import { Card } from '@/shared/ui/card';
import Roadmap from '@/shared/ui/roadmap';
import { Separator } from '@/shared/ui/separator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RecipePageLoading } from './recipe-page-loading';
import ImageSample from '@/shared/assets/images/sample.png';

export const RecipePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.recipe.currentRecipe);
  const params = useParams();
  const loading = useSelector((state: RootState) => state.recipe.loading);

  useEffect(() => {
    dispatch(getOne(Number(params.id)));
  }, []);

  if (loading) return <RecipePageLoading />;

  return (
    <div className='grid grid-cols-4 gap-3 mt-3'>
      <div className='flex flex-col gap-3 col-span-1'>
        <Card className='w-full  justify-start items-start inline-flex flex-col'>
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-medium leading-normal'>
              Кухня
            </span>
          </div>
          <Separator />
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-normal leading-normal'>
              {data?.cuisine}
            </span>
          </div>
        </Card>

        <Card className='w-full  justify-start items-start inline-flex flex-col'>
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-medium leading-normal'>
              Теги
            </span>
          </div>
          <Separator />
          <div className='px-6 py-4'>
            {data?.tags.map((tag) => (
              <span
                className='text-black/40 text-sm font-normal leading-snug'
                key={tag}
              >
                #{tag}{' '}
              </span>
            ))}
          </div>
        </Card>

        <Card className='w-full  justify-start items-start inline-flex flex-col'>
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-medium leading-normal'>
              Калорийность
            </span>
          </div>
          <Separator />
          <div className='px-6 py-4 flex flex-col gap-2'>
            <span className='text-black/90 text-base font-normal leading-normal'>
              {data?.caloriesPerServing} ккал
            </span>
            <span className='text-black/40 text-sm font-normal leading-snug'>
              100 грамм
            </span>
          </div>
        </Card>

        <Card className='w-full  justify-start items-start inline-flex flex-col'>
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-medium leading-normal'>
              Количество порций
            </span>
          </div>
          <Separator />
          <div className='px-6 py-4'>
            <span className='text-black/90 text-xl font-bold leading-normal'>
              {data?.servings}
            </span>
          </div>
        </Card>

        <Card className='w-full flex-1  justify-start items-start inline-flex flex-col'>
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-medium leading-normal'>
              Описание
            </span>
          </div>
          <Separator />
          <div className='px-6 py-4'>
            <span className='text-black/40 text-sm font-normal'>
              {data?.instructions.map((item) => `${item} `)}
            </span>
          </div>
        </Card>
      </div>
      <div className='flex flex-col gap-3 col-span-1'>
        <Card className='w-full  justify-start items-start inline-flex flex-col'>
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-medium leading-normal'>
              Общее время приготовления
            </span>
          </div>
          <Separator />
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-bold leading-normal'>
              {data?.cookTimeMinutes} минут
            </span>
          </div>
        </Card>
        <Card className='w-full flex-1  justify-start items-start inline-flex flex-col'>
          <div className='px-6 py-4'>
            <span className='text-black/90 text-base font-medium leading-normal'>
              Инструкции по приготовлению
            </span>
          </div>
          <Separator />
          <div className='px-6 py-4'>
            <Roadmap steps={data?.instructions || []} />
          </div>
        </Card>
      </div>

      <div className='col-span-2 bg-zinc-100 overflow-clip flex justify-center items-center'>
        <img src={data?.image || ImageSample} alt={data?.name} />
      </div>
    </div>
  );
};
