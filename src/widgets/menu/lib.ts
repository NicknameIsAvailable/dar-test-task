import { TRecipeDifficulty } from '@/entities/recipe';

export interface IDifficulty {
  name: string;
  difficulty: TRecipeDifficulty | '';
}

export const difficulties: IDifficulty[] = [
  {
    name: 'Любая',
    difficulty: '',
  },
  {
    name: 'Низкая',
    difficulty: 'Easy',
  },
  {
    name: 'Средняя',
    difficulty: 'Medium',
  },
  {
    name: 'Высокая',
    difficulty: 'Hard',
  },
];
