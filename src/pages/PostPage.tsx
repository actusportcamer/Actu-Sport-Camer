import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ChevronLeft, Share2 } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import TagCloud from '../components/blog/TagCloud';
import RecentPostsSection from '../components/blog/RecentPostsSection';
import { getPost, getRelatedPosts } from '../data/posts';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = getPost(slug || '');
  
  useEffect(() => {
    // Scroll to top when post changes
    window.scrollTo(0, 0);
    
    // Redirect to blog page if post not found
    if (!post && slug) {
      navigate('/blog', { replace: true });
    }
  }, [post, slug, navigate]);
  
  if (!post) return null;
  
  const relatedPosts = getRelatedPosts(post.id, 3);
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
        <title>{post.title} | InsightBlog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <article className="pt-8 pb-16">
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
                <span>{post.readTime} min read</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-10 h-10 rounded-full mr-3 object-cover" 
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                </div>
              </div>
              
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
          
          <div className="relative rounded-xl overflow-hidden mb-10 aspect-video">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          
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
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 rounded-lg p-6">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-6 object-cover" 
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.author.name}</h3>
                <p className="text-gray-600 mb-4">{post.author.bio}</p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  <Button variant="primary" size="sm">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
      
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
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
      
      <RecentPostsSection title="You May Also Enjoy" posts={getRelatedPosts(post.id, 6)} />
    </>
  );
}