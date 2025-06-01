import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ChevronLeft, Share2, FacebookIcon, Facebook, Eye } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import TagCloud from '../components/blog/TagCloud';
import RecentPostsSection from '../components/blog/RecentPostsSection';
import { getPost, getRelatedPosts } from '../data/posts';
import { databases } from '../AppwriteConfig'
import { Query } from 'appwrite';
import logo from '../img/logo.png'

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null)
  const [recentblogs, setRecentBlog] = useState([])

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.getDocument(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
        id
        );
        setPost(response); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, [id]);

  const incrementViewCount = async (id) => {
    try {
      // First get current view count
      const blog = await databases.getDocument(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
        id);
      const currentViews = blog.view || 0;
  
      // Update with +1
      await databases.updateDocument(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',
        id, {
        view: currentViews + 1,
      });
    } catch (error) {
      console.error("Error incrementing view count:", error);
    }
  };

  useEffect(() => {
    incrementViewCount(id); // call this once when the page is loaded
  }, [id]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
          [
            Query.limit(6)
          ]
        )

          if (res.total > 0) {
            const docs = res.documents;
            const randomDoc = docs[Math.floor(Math.random() * docs.length)];
            return randomDoc;
          }

        setRecentBlog(res.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);
  
  
  if (!post) return null;
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
        .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch((err) => console.error('Could not copy text: ', err));
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{post.title} | Actu Sport Camer</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <article className="pt-8 pb-16 max-w-7xl">
        <Container size="md">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
              <ChevronLeft size={16} className="mr-1" />
              Back to all articles
            </Link>
            
            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <Link 
                to={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
              >
                {post.category}
              </Link>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className='flex items-center justify-center gap-1'>
                <img src={logo} width={40} />
                <h1 className='font-bold text-md'>Actu Sport Camer</h1>
              </div>
              <div className=''>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={sharePost}
                className="flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
              </div>            
            </div>
            <div className='flex  mt-4 mb-[-15px] items-center justify-between'>
              <span className='flex gap-6'>
                  <img src='https://www.facebook.com/images/fb_icon_325x325.png' width={20} />
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png' width={20} />
                  <img src='https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg' className='rounded-md' width={20} />
                  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Threads_%28app%29.svg/1200px-Threads_%28app%29.svg.png' className='rounded-md' width={20} />
              </span>
              <div className="flex justify-center items-center">
                <Eye size={14} className="mr-1" />
                <span>{post.view}</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden mb-10">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="h-auto w-full" 
            />
          </div>

            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {post.excerpt}
            </h1>
          
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Tags:</h3>
                <TagCloud tags={post.tags} />
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={sharePost}
                className="mt-4 sm:mt-0 flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                Share This Article
              </Button>
            </div>
          </div>
        </Container>
      </article>
      
      {recentblogs.length > 0 && (
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentblogs.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.$id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md h-full flex flex-col">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow">{post.excerpt.substring(0, 100)}...</p>
                      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
      
      <RecentPostsSection title="You May Also Enjoy" />
    </>
  );
}