import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import PostCard from '../components/blog/PostCard';
import TagCloud from '../components/blog/TagCloud';
import { getAllTags } from '../data/posts';
import { databases } from '../AppwriteConfig'
import { Query } from 'appwrite';

export default function TagPage() {
  const { tag } = useParams();
  const allTags = getAllTags();
  const [ posts, setPost] = useState([])
  
  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
          [
            Query.search('tags', tag),
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
  
  return (
    <>
      <Helmet>
        <title>Articles tagged with "{tag}" | InsightBlog</title>
        <meta name="description" content={`Browse our collection of articles tagged with ${tag}`} />
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Articles tagged with "{tag}"
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-6">
              Browse our collection of articles related to this topic.
            </p>
            
            <div className="mt-4">
              <h2 className="text-lg font-medium text-gray-700 mb-2">Explore other tags:</h2>
              <TagCloud 
                tags={allTags.filter(t => t !== tag)} 
                className="flex-wrap"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-12">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found with this tag.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.$id} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}