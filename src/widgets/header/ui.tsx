import { Card } from '@/shared/ui/card';
import { ReactNode } from 'react';
export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className='w-full'>
      <Card className='px-6 py-4 flex gap-4 items-center'>{children}</Card>
    </header>
  );
};
