import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Post } from '../../types';
import { Card, CardImage, CardHeader, CardContent, CardTitle, CardFooter } from '../ui/Card';
import { useEffect, useState } from 'react';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const [showFrench, setShowFrench] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFrench(prev => !prev);  // toggle language every 50 seconds
    }, 10000); // 50,000 milliseconds = 50 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const title = showFrench ? post.f_title : post.title;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card
      href={`/blog/${post.$id}`}
      className={`h-full flex flex-col transition-transform duration-300 ${
        featured ? 'hover:-translate-y-2' : 'hover:-translate-y-1'
      }`}
    >
      <CardImage src={post.coverImage} alt={title} />
      <CardHeader className={featured ? 'pt-6' : 'pt-5'}>
        <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
          <Link
            to={`/category/${post.category}`}
            className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {post.category}
          </Link>
        </div>
        <CardTitle className={`${featured ? 'text-2xl' : 'text-xl'} line-clamp-2`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4 text-sm text-gray-500 justify-between">
        <div className="flex justify-between items-center w-80">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime} min</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
