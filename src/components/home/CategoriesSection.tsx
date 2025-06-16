import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import img1 from '../../img/soccer-ball.svg'
import img2 from '../../img/basket.png'
import img3 from '../../img/tennis.png'
import img4 from '../../img/cycl.png'
import img5 from '../../img/vol.png'
import img6 from '../../img/cage.png'
import img7 from '../../img/other.png'

// Map category names to icons
const categoryIcons: Record<string, React.ReactNode> = {
  'Football': <img src={img1} className="h-6 rounded-full w-6" />,
  "Basketball": <img src={img2} className="h-6 rounded-full w-6" />,
  "Tennis": <img src={img3} className="h-6 rounded-full w-6" />,
  "Cycling": <img src={img4} className="h-6 rounded-full w-6" />,
  "Volleyball": <img src={img5} className="h-6 rounded-full w-6" />,
  "MMA": <img src={img6} className="h-6 rounded-full w-6" />,
  "Sports": <img src={img7} className="h-6 rounded-full w-6" />,
};

// Get icon for a category or default to Code icon
const getCategoryIcon = (categoryName: string) => {
  return categoryIcons[categoryName] || <Code className="h-6 w-6" />;
};

export default function CategoriesSection({ categories }) {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.name}`}
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