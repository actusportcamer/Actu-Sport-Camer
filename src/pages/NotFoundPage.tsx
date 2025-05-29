import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Search } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | InsightBlog</title>
        <meta name="description" content="The page you're looking for couldn't be found." />
      </Helmet>
      
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h2 className="text-3xl font-semibold text-gray-900 mt-6 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              We can't seem to find the page you're looking for. The link might be broken, or the page may have been removed.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/">
                <Button variant="primary" size="lg" className="flex items-center justify-center w-full sm:w-auto">
                  <Home size={18} className="mr-2" />
                  Go to Homepage
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg" className="flex items-center justify-center w-full sm:w-auto">
                  <Search size={18} className="mr-2" />
                  Browse Articles
                </Button>
              </Link>
            </div>
            
            <div className="border-t border-gray-200 pt-8 text-gray-600">
              <p>Looking for something specific? Try searching for it or check our popular categories below:</p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Link to="/blog" className="text-blue-600 hover:underline">All Articles</Link>
                <Link to="/category/technology" className="text-blue-600 hover:underline">Technology</Link>
                <Link to="/category/react" className="text-blue-600 hover:underline">React</Link>
                <Link to="/category/design" className="text-blue-600 hover:underline">Design</Link>
                <Link to="/category/css" className="text-blue-600 hover:underline">CSS</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}