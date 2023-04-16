import { Person } from './Person';

export interface People {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}