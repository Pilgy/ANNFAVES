import React from 'react';
import { FavoriteItem } from '../data/favorites';

interface CategorySelectorProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="w-full max-w-xs px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:border-white/40 focus:outline-none appearance-none cursor-pointer transition-colors"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '1.5em 1.5em',
          paddingRight: '2.5rem'
        }}
      >
        {categories.map((category) => (
          <option key={category} value={category} className="text-gray-900">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};