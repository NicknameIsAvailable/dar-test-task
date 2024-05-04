import { getAll } from '@/entities/recipe';
import { AppDispatch, RootState } from '@/entities/store';
import { Card } from '@/shared/ui/card';
import { Label } from '@/shared/ui/label';
import { Select } from '@/shared/ui/select';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const recipes = useSelector((state: RootState) => state.recipe.recipes)

    useMemo(() => {
        dispatch(getAll())
    }, [])

    console.log(recipes)

    return (
        <div className="grid grid-cols-4 w-full">
            <Card className="col-span-1 p-6 h-screen bg-white flex-col justify-start items-start gap-12 inline-flex">
                <div className="p-6 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="w-full h-40 flex-col justify-start items-start inline-flex"/>
                    <p className="text-black text-sm font-normal font-['Roboto'] leading-[18px]">
                        В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.
                        <br/>
                        <br/>
                        Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?
                        <br/>
                        <br/>
                        Наш сервис поможет: выбирайте параметры - и вперед!
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <Label>
                            Кухня:
                        </Label>
                        <Select>
                            
                        </Select>
                    </div>
                </div>
            </Card>
            <div className="col-span-3">
                че за бред
            </div>
        </div>
    );
};
