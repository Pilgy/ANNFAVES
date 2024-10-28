export interface FavoriteItem {
  id: string;
  title: string;
  category: 'TV Shows' | 'Games' | 'Books' | 'Beers' | 'New Places';
  imageURL: string;
  month: string;
  year: number;
}

export type Category = FavoriteItem['category'] | 'All';