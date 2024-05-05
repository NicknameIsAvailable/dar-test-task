import { getAll, IRecipe } from '@/entities/recipe';
import { AppDispatch, RootState } from '@/entities/store';
import { useDispatch, useSelector } from 'react-redux';
import { RecipeCard } from './recipe-card';
import { useMemo, useState } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/shared/ui/pagination';
import { RecipeListLoading } from './recipe-list-loading';
import { cn } from '@/features/lib/utils.ts';

export const RecipesList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [currentPageIndex, setCurrentPageIndex] = useState(1)
    const filteredRecipes: IRecipe[] = useSelector((state: RootState) => state.recipe.filteredRecipes)
    const loading = useSelector((state: RootState) => state.recipe.loading)
    const limit = 6;

    useMemo(() => {
        dispatch(getAll());
    }, [])

    const totalPages = Math.ceil(filteredRecipes.length / limit);

    const gotoPage = (pageIndex: number) => {
        setCurrentPageIndex(pageIndex);
    };

    const nextPage = () => {
        if (currentPageIndex <= filteredRecipes.length - 1)
            setCurrentPageIndex(currentPageIndex + 1)
    }

    const previousPage = () => {
        if (currentPageIndex >= 1)
            setCurrentPageIndex(currentPageIndex - 1)
    }

    if (loading) 
        return <RecipeListLoading />

    return (
        <div className="pb-3">
            <div className="grid 2xl:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 p-3 gap-x-3 gap-y-2">
                {filteredRecipes.slice(currentPageIndex * limit, (currentPageIndex + 1) * limit).map(recipe => (
                    <RecipeCard data={recipe} key={recipe.id} />
                ))}
            </div>
            <Pagination className="w-full flex justify-center items-center">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={previousPage} />
                    </PaginationItem>
                    {[...Array(totalPages).keys()].map(pageIndex => (
                        <PaginationItem className={cn("rounded-lg border-zinc-300 border", pageIndex === currentPageIndex && "border-sky-500 border text-sky-500")} key={pageIndex}>
                            <PaginationLink onClick={() => gotoPage(pageIndex)}>{pageIndex + 1}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext onClick={nextPage} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};
