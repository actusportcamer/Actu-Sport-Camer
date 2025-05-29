import React from 'react';
import Container from '../ui/Container';
import PostCard from './PostCard';
import { Post } from '../../types';

interface RecentPostsSectionProps {
  posts: Post[];
  title?: string;
}

export default function RecentPostsSection({ posts, title = "Recent Articles" }: RecentPostsSectionProps) {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}