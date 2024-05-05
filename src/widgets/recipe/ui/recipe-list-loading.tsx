import React from 'react';
import { RecipeCardLoading } from './recipe-card-loading';

export const RecipeListLoading = () => {
    return (
        <div>
            <div className="grid grid-cols-3 p-3 gap-x-3 gap-y-2">
                {new Array(6).map(recipe => <RecipeCardLoading key={recipe.id}/>)}
            </div>
        </div>
    );
};
