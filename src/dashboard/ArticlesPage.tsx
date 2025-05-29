import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PlusCircle, Search, Edit2, Trash2, Eye } from 'lucide-react';
import Button from '../components/ui/Button';
import { posts } from '../data/posts';

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
      <Helmet>
        <title>Manage Articles | InsightBlog</title>
      </Helmet>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Articles</h1>
          <Link to="/dashboard/articles/new">
            <Button variant="primary" className="flex items-center">
              <PlusCircle size={18} className="mr-2" />
              New Article
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="h-10 w-10 rounded object-cover"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{post.title}</div>
                          <div className="text-sm text-gray-500">{post.excerpt.substring(0, 60)}...</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-8 w-8 rounded-full"
                        />
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-gray-400 hover:text-blue-600">
                        <Eye size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-600">
                        <Edit2 size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}