import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { Mail, Twitter, Linkedin } from 'lucide-react';
import Button from '../ui/Button';
import logo from '../../img/logo.png'
import LoginModal from '../LoginModal';
import { ID, Query } from 'appwrite';
import { databases } from '../../AppwriteConfig'
import { toast, ToastContainer } from 'react-toastify';

export default function Footer() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);

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
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img src={logo} width={60} />
            </Link>
          </div>
            <p className="mt-4 text-gray-300 max-w-md">
            Covering the plays, the players, and the platforms transforming the sports world, Unpacking the game beyond the field—where sports meet innovation, design, and digital culture.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/category/Football" className="text-gray-300 hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest articles and news.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Button type="submit" variant="primary" fullWidth>
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <LoginModal
         isOpen={isLoginOpen}
         onClose={() => setIsLoginOpen(false)}
        />
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Actu Sport Camer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <span onClick={() => setIsLoginOpen(true) } className="text-gray-400 hover:text-white text-sm cursor-pointer transition-colors">
              Admin
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}