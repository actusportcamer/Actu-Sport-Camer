import React, { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedPostsSection from '../components/blog/FeaturedPostsSection';
import RecentPostsSection from '../components/blog/RecentPostsSection';
import CategoriesSection from '../components/home/CategoriesSection';
import NewsletterCTA from '../components/blog/NewsletterCTA';
import { getFeaturedPosts, getRecentPosts, getAllCategories } from '../data/posts';
import { Query } from 'appwrite';
import { databases } from '../AppwriteConfig'

export default function HomePage() {

  const [ featuredblogs, setFeaturedBlog] = useState([])
  const [ recentblogs, setRecentBlog] = useState([])

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
          [
            Query.orderDesc('publishedAt'),
            Query.limit(6)
          ]
        );
        setFeaturedBlog(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
          [
            Query.orderDesc('publishedAt'),
            Query.limit(6)
          ]
        );
        setRecentBlog(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);



  const categories = getAllCategories();
  
  return (
    <>
      <HeroSection />
      <FeaturedPostsSection posts={featuredblogs} />
      <CategoriesSection categories={categories} />
      <RecentPostsSection posts={recentblogs} />
      <NewsletterCTA />
    </>
  );
}