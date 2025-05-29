import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { Category } from '../../types';
import { Code, PenTool, Cpu, Database, Layers, BarChart } from 'lucide-react';

interface CategoriesSectionProps {
  categories: Category[];
}

// Map category names to icons
const categoryIcons: Record<string, React.ReactNode> = {
  'Technology': <Cpu className="h-6 w-6" />,
  'CSS': <PenTool className="h-6 w-6" />,
  'React': <Code className="h-6 w-6" />,
  'Design': <Layers className="h-6 w-6" />,
  'CMS': <Database className="h-6 w-6" />,
  'Typography': <BarChart className="h-6 w-6" />,
};

// Get icon for a category or default to Code icon
const getCategoryIcon = (categoryName: string) => {
  return categoryIcons[categoryName] || <Code className="h-6 w-6" />;
};

export default function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getCategoryIcon(category.name)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}