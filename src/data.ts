import { FavoriteItem } from './types';

export const favorites: FavoriteItem[] = [
  {
    id: '1',
    title: 'The Last of Us',
    category: 'TV Shows',
    imageURL: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1000',
    month: 'January',
    year: 2023
  },
  {
    id: '2',
    title: 'Baldur\'s Gate 3',
    category: 'Games',
    imageURL: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1000',
    month: 'August',
    year: 2023
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    category: 'Books',
    imageURL: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=1000',
    month: 'March',
    year: 2023
  },
  {
    id: '4',
    title: 'Pliny the Elder',
    category: 'Beers',
    imageURL: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=1000',
    month: 'June',
    year: 2023
  },
  {
    id: '5',
    title: 'Tokyo, Japan',
    category: 'New Places',
    imageURL: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000',
    month: 'May',
    year: 2023
  }
];

export const categories: Category[] = ['All', 'TV Shows', 'Games', 'Books', 'Beers', 'New Places'];