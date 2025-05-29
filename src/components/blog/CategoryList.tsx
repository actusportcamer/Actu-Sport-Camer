import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryListProps {
  categories: Category[];
  className?: string;
}

export default function CategoryList({ categories, className = '' }: CategoryListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.slug}`}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}