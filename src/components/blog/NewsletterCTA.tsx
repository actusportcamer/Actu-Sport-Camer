import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function NewsletterCTA() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, tutorials, and insights directly in your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <Button type="submit" variant="secondary" size="lg">
              Subscribe
            </Button>
          </form>
          
          <p className="text-blue-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  );
}