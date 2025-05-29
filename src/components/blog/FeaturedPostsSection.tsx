import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import PostCard from './PostCard';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { Post } from '../../types';

interface FeaturedPostsSectionProps {
  posts: Post[];
}

export default function FeaturedPostsSection({ posts }: FeaturedPostsSectionProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          <Link to="/blog">
            <Button variant="outline" className="group">
              View all
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} featured />
          ))}
        </div>
      </Container>
    </section>
  );
}