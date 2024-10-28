import { FavoriteItem } from '../types';
import { categories } from './categories';
import { tvShows } from './tv-shows';
import { games } from './games';
import { books } from './books';
import { beers } from './beers';
import { places } from './places';

export const favorites: FavoriteItem[] = [
  ...tvShows,
  ...games,
  ...books,
  ...beers,
  ...places
];

export { categories };