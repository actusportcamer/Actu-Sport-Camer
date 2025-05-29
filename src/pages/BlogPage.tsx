import React, { useState } from 'react';
import Container from '../components/ui/Container';
import PostCard from '../components/blog/PostCard';
import CategoryList from '../components/blog/CategoryList';
import TagCloud from '../components/blog/TagCloud';
import { Search } from 'lucide-react';
import { posts, getAllCategories, getAllTags } from '../data/posts';
import { Post } from '../types';
import { Helmet } from 'react-helmet-async';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getAllCategories();
  const tags = getAllTags();
  
  // Filter posts based on search query
  const filteredPosts = posts.filter((post) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query)) ||
      post.author.name.toLowerCase().includes(query)
    );
  });
  
  return (
    <>
     <Helmet>
        <title>Blog | Actu Sport Camer</title>
        <meta name="description" content="Learn about InsightBlog, our mission, and the team behind our content." />
      </Helmet>

      <section style={{backgroundImage: `url('https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/sports-names-learn-with-examples.jpg')`}} className="relative bg-cover bg-center h-80 text-white">
        <Container>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm ">
           <div className='relative z-10 text-center pt-24'>
            <h1 className="text-4xl font-bold text-blue-400 mb-4">Blog</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Explore our collection of articles, tutorials, and insights on web development, design, and technology.
            </p>
           </div>
          </div>
        </Container>
      </section>
      
      <section className="py-12">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {searchQuery && (
                <p className="mb-6 text-gray-600">
                  {filteredPosts.length === 0 
                    ? 'No articles found.' 
                    : `Found ${filteredPosts.length} article${filteredPosts.length === 1 ? '' : 's'}.`}
                </p>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Categories</h2>
                <CategoryList categories={categories} />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
                <TagCloud tags={tags} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}