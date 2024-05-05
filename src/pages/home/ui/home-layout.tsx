import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <main className='bg-zinc-100 p-3'>
      <Header>
        <h1 className='text-black/opacity-90 text-2xl font-medium leading-7'>
          Сборник рецептов из разных стран мира
        </h1>
      </Header>
      <Outlet />
    </main>
  );
};
