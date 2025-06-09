import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import PostCard from '../components/blog/PostCard';
import { getPostsByCategory, getAllCategories } from '../data/posts';
import { databases } from '../AppwriteConfig'
import { Query } from 'appwrite';

export default function CategoryPage() {
  const { category } = useParams();
  const categories = getAllCategories();

  const [ posts, setPost] = useState([])
  
  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
          [
            Query.equal('category', category),
            Query.orderDesc('publishedAt')
          ]
        );
        setPost(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);
  
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
        <title>{category} Articles | InsightBlog</title>
        <meta name="description" content={`Browse our collection of articles about ${category}`} />
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{category}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Browse our collection of articles and insights about {category}.
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