export interface FavoriteItem {
  id: string;
  title: string;
  category: 'TV Shows' | 'Games' | 'Books' | 'Beers' | 'New Places';
  imageURL: string;
  month: string;
  year: number;
  description?: string;
}

export const favorites: FavoriteItem[] = [
  {
    id: 'tv1',
    title: 'The Last of Us',
    category: 'TV Shows',
    imageURL: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80',
    month: 'January',
    year: 2023,
    description: 'A gripping post-apocalyptic drama'
  },
  {
    id: 'tv2',
    title: 'Succession',
    category: 'TV Shows',
    imageURL: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&q=80',
    month: 'March',
    year: 2023,
    description: 'Corporate drama at its finest'
  },
  {
    id: 'tv3',
    title: 'The Bear',
    category: 'TV Shows',
    imageURL: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80',
    month: 'June',
    year: 2023,
    description: 'Intense kitchen drama'
  },
  {
    id: 'game1',
    title: 'Baldur\'s Gate 3',
    category: 'Games',
    imageURL: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80',
    month: 'August',
    year: 2023,
    description: 'Epic RPG adventure'
  },
  {
    id: 'game2',
    title: 'Zelda: Tears of the Kingdom',
    category: 'Games',
    imageURL: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80',
    month: 'May',
    year: 2023,
    description: 'Nintendo\'s masterpiece'
  },
  {
    id: 'game3',
    title: 'Alan Wake 2',
    category: 'Games',
    imageURL: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
    month: 'October',
    year: 2023,
    description: 'Horror survival at its best'
  },
  {
    id: 'book1',
    title: 'Tomorrow, and Tomorrow, and Tomorrow',
    category: 'Books',
    imageURL: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80',
    month: 'February',
    year: 2023,
    description: 'A story about friendship and games'
  },
  {
    id: 'book2',
    title: 'Demon Copperhead',
    category: 'Books',
    imageURL: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
    month: 'April',
    year: 2023,
    description: 'Modern Dickensian tale'
  },
  {
    id: 'book3',
    title: 'Chain-Gang All-Stars',
    category: 'Books',
    imageURL: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80',
    month: 'July',
    year: 2023,
    description: 'Dystopian fiction'
  },
  {
    id: 'beer1',
    title: 'Pliny the Elder',
    category: 'Beers',
    imageURL: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80',
    month: 'March',
    year: 2023,
    description: 'Double IPA excellence'
  },
  {
    id: 'beer2',
    title: 'Westvleteren 12',
    category: 'Beers',
    imageURL: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&q=80',
    month: 'June',
    year: 2023,
    description: 'Trappist perfection'
  },
  {
    id: 'beer3',
    title: 'Founders KBS',
    category: 'Beers',
    imageURL: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?auto=format&fit=crop&q=80',
    month: 'December',
    year: 2023,
    description: 'Bourbon barrel-aged stout'
  },
  {
    id: 'place1',
    title: 'Kyoto, Japan',
    category: 'New Places',
    imageURL: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80',
    month: 'April',
    year: 2023,
    description: 'Traditional meets modern'
  },
  {
    id: 'place2',
    title: 'Amalfi Coast, Italy',
    category: 'New Places',
    imageURL: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80',
    month: 'July',
    year: 2023,
    description: 'Mediterranean paradise'
  },
  {
    id: 'place3',
    title: 'Banff, Canada',
    category: 'New Places',
    imageURL: 'https://images.unsplash.com/photo-1513535016377-e0b8d60c5358?auto=format&fit=crop&q=80',
    month: 'September',
    year: 2023,
    description: 'Rocky Mountain majesty'
  }
];