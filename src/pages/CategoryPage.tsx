import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import PostCard from '../components/blog/PostCard';
import { getPostsByCategory, getAllCategories } from '../data/posts';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const categories = getAllCategories();
  const category = categories.find(c => c.slug === slug);
  
  const posts = getPostsByCategory(category?.name || '');
  
  if (!category) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the category you're looking for.
          </p>
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to all articles
          </Link>
        </div>
      </Container>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{category.name} Articles | InsightBlog</title>
        <meta name="description" content={`Browse our collection of articles about ${category.name}`} />
      </Helmet>
      
      <section className="pt-16 pb-10 bg-gradient-to-r from-blue-50 to-purple-50">
        <Container>
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to all articles
          </Link>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Browse our collection of articles and insights about {category.name.toLowerCase()}.
            </p>
          </div>
        </Container>
      </section>
      
      <section className="py-12">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}