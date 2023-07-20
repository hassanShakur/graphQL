import { Key } from 'react';

export type UsersType = {
  name: String;
  id: Key;
  age: Number;
  company: { name: 'Netflix' | 'Amazon' | 'Google' | 'Apple' };
}[];
