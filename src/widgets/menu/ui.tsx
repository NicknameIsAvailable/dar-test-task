import {
  clearFilters,
  filterByCuisine,
  filterByDifficulty,
  filterByMealType,
  IRecipe,
  TRecipeDifficulty,
} from '@/entities/recipe';
import { AppDispatch, RootState } from '@/entities/store';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Label } from '@/shared/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { difficulties, IDifficulty } from './lib';
import { useState } from 'react';
import { cn } from '@/features/lib/utils.ts';
import ImageSample from '@/shared/assets/images/sample.png';

const Menu = () => {
  const recipes: IRecipe[] = useSelector(
    (state: RootState) => state.recipe.recipes,
  );
  const filteredRecipes: IRecipe[] = useSelector(
    (state: RootState) => state.recipe.filteredRecipes,
  );
  const cuisines = [...new Set(recipes.map((recipe) => recipe.cuisine))];
  const types = [
    ...new Set(
      recipes.map((recipe) => recipe.mealType.map((item) => item)).flat(),
    ),
  ];
  const [currentDifficulty, setCurrentDifficulty] = useState<
    TRecipeDifficulty | ''
  >('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  console.log(filteredRecipes);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];
    navigate(`/recipes/${recipe.id}`);
  };

  const handleChangeCuisine = (event: string) => {
    dispatch(filterByCuisine(event));
  };

  const handleChangeMealType = (event: string) => {
    dispatch(filterByMealType(event));
  };

  const handleClear = () => {
    dispatch(clearFilters());
  };

  const handleChangeDifficulty = (difficulty: TRecipeDifficulty | '') => {
    setCurrentDifficulty(difficulty);
    dispatch(filterByDifficulty(difficulty));
  };

  return (
    <Card className='p-6 h-full bg-white flex-col justify-start items-start gap-12 inline-flex'>
      <div className='p-6 flex-col justify-start items-start gap-6 inline-flex'>
        <div className='w-full h-40 bg-zinc-100 overflow-clip flex justify-center items-center'>
          <img src={ImageSample} alt='' />
        </div>
        <p className='text-black text-sm font-normal leading-[18px]'>
          В нашей жизни, когда время становится все более ценным ресурсом,
          задача планирования приема пищи становится все более сложной.
          <br />
          <br />
          Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или
          ужин? Каким образом мы можем легко и быстро определиться с выбором
          блюда и не тратить много времени на принятие этого решения?
          <br />
          <br />
          Наш сервис поможет: выбирайте параметры - и вперед!
        </p>
      </div>

      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-3 items-center w-full'>
          <Label className='w-[130px] text-right text-black text-base font-bold'>
            Кухня:
          </Label>
          <Select onValueChange={handleChangeCuisine}>
            <SelectTrigger>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='text-center'>Кухня</SelectGroup>
              {cuisines.map((cuisine) => (
                <SelectItem value={cuisine}>{cuisine}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-3 items-center w-full'>
          <Label className='w-[130px] text-right text-black text-base font-bold'>
            Тип блюда:
          </Label>
          <Select onValueChange={handleChangeMealType}>
            <SelectTrigger>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className='text-center'>Тип блюда</SelectGroup>
              {types.map((type) => (
                <SelectItem value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-3 items-center w-full'>
          <Label className='w-[130px] text-right text-black text-base font-bold'>
            Сложность:
          </Label>
          <div className='flex'>
            {difficulties.map((difficulty: IDifficulty, index: number) => (
              <Button
                onClick={() => handleChangeDifficulty(difficulty.difficulty)}
                className={cn(
                  index === 0 && 'rounded-l-sm',
                  index === difficulties.length - 1 && 'rounded-r-sm',
                )}
                size='sm'
                variant={
                  currentDifficulty === difficulty.difficulty
                    ? 'default'
                    : 'outline'
                }
              >
                {difficulty.name}
              </Button>
            ))}
          </div>
        </div>

        <span
          onClickCapture={handleClear}
          className='text-sky-500/40 text-sm font-normal leading-snug'
        >
          Сбросить все фильтры
        </span>

        <div>
          <span className='text-black text-base font-normal leading-normal'>
            А еще можно попробовать на вкус удачу
          </span>
          <Button className='mt-6' variant='outline' onClick={handleClick}>
            Мне повезёт!
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Menu;
