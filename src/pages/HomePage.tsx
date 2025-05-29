import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPostsSection from '../components/blog/FeaturedPostsSection';
import RecentPostsSection from '../components/blog/RecentPostsSection';
import CategoriesSection from '../components/home/CategoriesSection';
import NewsletterCTA from '../components/blog/NewsletterCTA';
import { getFeaturedPosts, getRecentPosts, getAllCategories } from '../data/posts';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getRecentPosts(6);
  const categories = getAllCategories();
  
  return (
    <>
      <HeroSection />
      <FeaturedPostsSection posts={featuredPosts} />
      <CategoriesSection categories={categories} />
      <RecentPostsSection posts={recentPosts} />
      <NewsletterCTA />
    </>
  );
}