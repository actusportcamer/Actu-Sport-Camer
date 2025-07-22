import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import PostCard from './PostCard';
import { Post } from '../../types';
import { databases } from '../../AppwriteConfig'
import { Query } from 'appwrite';

interface RecentPostsSectionProps {
  title?: string;
}

export default function RecentPostsSection({ title = "Recent Articles" }: RecentPostsSectionProps) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
          [
            Query.limit(6),
            Query.orderAsc('view')
          ]
        )
        setPosts(res.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);
  
  return (
    <section className="py-16">
      <div className='max-w-7xl mx-auto p-2'>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.$id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}