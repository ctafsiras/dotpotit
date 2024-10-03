import React from 'react';

interface SidebarProps {
  selectedCategories: string[];
  selectedPriceRanges: string[];
  onFilterChange: (categories: string[], priceRanges: string[]) => void;
  onClose: () => void;
}

const categories = ["Electronics", "Fashion", "Books", "Groceries", "Automotive"];
const priceRanges = [
  { label: '$0 - $50', value: '0-50' },
  { label: '$51 - $100', value: '51-100' },
  { label: '$101 - $200', value: '101-200' },
  { label: '$201 - $500', value: '201-500' },
  { label: '$501+', value: '501' },
];

const Sidebar: React.FC<SidebarProps> = ({
  selectedCategories,
  selectedPriceRanges,
  onFilterChange,
  onClose,
}) => {
  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    onFilterChange(updatedCategories, selectedPriceRanges);
  };

  const handlePriceRangeChange = (range: string) => {
    const updatedPriceRanges = selectedPriceRanges.includes(range)
      ? selectedPriceRanges.filter((r) => r !== range)
      : [...selectedPriceRanges, range];
    onFilterChange(selectedCategories, updatedPriceRanges);
  };

  return (
    <div className="w-64 bg-white p-4 md:h-auto h-full shadow-lg md:shadow-none">
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-xl font-bold">Filters</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Price Range</h3>
        {priceRanges.map((range) => (
          <div key={range.value} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={range.value}
              checked={selectedPriceRanges.includes(range.value)}
              onChange={() => handlePriceRangeChange(range.value)}
              className="mr-2"
            />
            <label htmlFor={range.value}>{range.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;