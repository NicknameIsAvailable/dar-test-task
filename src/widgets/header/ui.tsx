import { Card } from '@/shared/ui/card';
import React from 'react';

export const Header = () => {
    return (
        <header className="w-full">
            <Card>
                <h1 className="text-black/opacity-90 text-2xl font-medium leading-7">Сборник рецептов из разных стран мира</h1>
            </Card>
        </header>
    );
};
