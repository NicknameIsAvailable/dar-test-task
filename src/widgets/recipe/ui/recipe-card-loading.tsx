import { Card } from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';
import TimeIcon from '@/shared/assets/icons/time.svg';

export const RecipeCardLoading = () => {
  return (
    <Card className='flex h-96'>
      <div className='flex-1'>
        <div className='py-4 flex justify-center items-center'>
          <Skeleton>
            <h3 className='text-black/0 text-base font-medium leading-none items-center'>
              Название
            </h3>
          </Skeleton>
        </div>
        <Skeleton>
          <div className='opacity-0 w-full h-[294px] flex justify-center items-center' />
        </Skeleton>
      </div>
      <div className='flex-1 p-6 flex-col justify-start items-start gap-2 inline-fle'>
        <Skeleton>
          <p className='text-black/0 text-[10px] font-normal'>
            #тег1 #тег2 #тег3 #тег4 #тег5 #тег6
          </p>
        </Skeleton>
        <div className='flex gap-1.5 items-center'>
          <img src={TimeIcon} alt='Время' />
          <Skeleton>
            <span className='text-black/0 text-xs font-normal leading-normal'>
              10 минут
            </span>
          </Skeleton>
        </div>
        <div className='flex gap-1.5 items-center'>
          <Skeleton>
            <p className='text-black/0 text-xs font-normal leading-normal'>
              Сложность:
            </p>
          </Skeleton>
        </div>
        <Skeleton>
          <p className='text-black/0 text-xs font-normal leading-normal'>
            Кухня
          </p>
        </Skeleton>
        <Skeleton>
          <p className='text-black/90 text-xs font-normal leading-normal'>
            Ужин
          </p>
        </Skeleton>
      </div>
    </Card>
  );
};
