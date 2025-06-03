import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ID, Query } from 'appwrite';
import { databases } from '../../AppwriteConfig'
import { toast, ToastContainer } from 'react-toastify';

export default function NewsletterCTA() {

  const [email, setEmail] = useState('');
   
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        const result = await databases.listDocuments(
          '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
          '683bea08002981a5a5e3',     // Replace with your Appwrite collection ID
          [Query.equal('email', email)]
        );
  
        if (result.total > 0) {
          for (const doc of result.documents) {
            await databases.deleteDocument(
            '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
            '683bea08002981a5a5e3',
            doc.$id)     // Replace with your Appwrite collection ID, doc.$id);
            toast.error('Subscription Email deleted')
          }
          return
        }
        
        const response = await databases.createDocument(
          '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
          '683bea08002981a5a5e3',     // Replace with your Appwrite collection ID
          ID.unique(),
          {
            email: email,
          });

        if (response) {
          toast.success('Subscription successfully!');
        } else {
          toast.error('Subscription Failed');
        }
      } catch (error) {
        toast.error('Failed to Subscription');
      }
    };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <ToastContainer />
      <Container size="md">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, tutorials, and insights directly in your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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