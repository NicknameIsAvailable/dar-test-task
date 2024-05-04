import { Header } from '@/widgets/header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
    return (
        <main className="bg-zinc-100 p-3">
            <Header />
            <Outlet />
        </main>    
    );
};
