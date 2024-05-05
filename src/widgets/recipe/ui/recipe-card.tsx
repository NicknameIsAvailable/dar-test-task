import { Card } from '@/shared/ui/card';
import { FC } from 'react';
import { IRecipeCardProps } from '../model';
import TimeIcon from '@/shared/assets/icons/time.svg';
import { RecipeDifficultyRate } from './recipe-difficulty-rate';
import { Link } from 'react-router-dom';
import ImageSample from '@/shared/assets/images/sample.png';

export const RecipeCard: FC<IRecipeCardProps> = ({ data }) => {
  return (
    <Link to={`/recipes/${data?.id}`}>
      <Card className='flex h-96'>
        <div className='flex-1'>
          <div className='py-4 flex justify-center items-center'>
            <h3 className='text-black/90 text-base font-medium leading-none items-center'>
              {data.name}
            </h3>
          </div>
          <div className='w-full h-[294px] flex justify-center items-center'>
            <img src={data?.image || ImageSample} />
          </div>
        </div>
        <div className='flex-1 p-6 flex-col justify-start items-start gap-2 inline-fle'>
          <p className='text-black/40 text-[10px] font-normal'>
            {data?.instructions.map((instruction) => `${instruction} `)}
          </p>
          <div className='flex gap-1.5 items-center'>
            <img src={TimeIcon} alt='Время' />
            <span className='text-black/90 text-xs font-normal leading-normal'>
              {data?.cookTimeMinutes} минут
            </span>
          </div>
          <div className='flex gap-1.5 items-center'>
            <p className='text-black/90 text-xs font-normal leading-normal'>
              Сложность:
            </p>
            <RecipeDifficultyRate rate={data.difficulty} />
          </div>
          <p className='text-black/90 text-xs font-normal leading-normal'>
            {data?.cuisine}
          </p>
          <p className='text-black/90 text-xs font-normal leading-normal'>
            {data?.mealType.map(
              (type: string, index: number) =>
                `${type}${index !== data.mealType.length - 1 ? ', ' : ' '} `,
            )}
          </p>
        </div>
      </Card>
    </Link>
  );
};
