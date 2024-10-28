import React, { useState, useMemo } from 'react';
import { Carousel } from './components/Carousel';
import { CategorySelector } from './components/CategorySelector';
import { favorites } from './data/favorites';
import { Library } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(favorites.map((item) => item.category))
    );
    return ['All', ...uniqueCategories];
  }, []);

  const filteredItems = useMemo(() => {
    return selectedCategory === 'All'
      ? favorites
      : favorites.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Library size={32} className="text-white" />
            <h1 className="text-4xl font-bold">Annual Favorites</h1>
          </div>
          <p className="text-gray-400">
            A curated collection of memorable experiences from 2023
          </p>
        </div>

        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <Carousel items={filteredItems} />
      </div>
    </div>
  );
}

export default App;