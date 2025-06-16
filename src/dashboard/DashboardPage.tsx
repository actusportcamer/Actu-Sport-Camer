import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Eye,  PcCaseIcon, GalleryVertical, User2 } from 'lucide-react';
import { Query } from 'appwrite';
import { databases } from '../AppwriteConfig'
import moment from 'moment';

const stats = [
  { label: 'Total Articles', value: '24', icon: FileText, change: '+3 this week' },
  { label: 'Total Views', value: '45.2K', icon: Eye, change: '+12% this month' },
];

export default function DashboardPage() {

  const [ blogTotals, setBlogTotal] = useState([])
  const [ blogs, setBlog] = useState([])

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
        [
          Query.limit(4)
        ]
        );
        setBlogTotal(response.total); // Returns an array of documents
        setBlog(response.documents)
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Actu Sport Camer</title>
      </Helmet>
      
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
        
        <div className="flex sm:flex-row flex-col justify-between gap-2 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border w-full border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <GalleryVertical className="h-6 w-6 text-blue-600" />
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-500">Articles</h3>
              <p className="text-xl font-semibold mt-3">{blogTotals}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border w-full border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <User2 className="h-6 w-6 text-blue-600" />
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Admins
                </span>
              </div>
              <h3 className="text-sm font-medium text-gray-500">Users</h3>
              <p className="text-2xl font-semibold text-gray-900 mt-1">2</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Articles</h2>
            {
              blogs && blogs.map((blog) => (
                <div>
                  <div className="space-y-4">
                    {/* Recent Articles List */}
                    <div className="border-b border-gray-100 pb-4">
                      <h3 className="font-medium text-gray-900">{blog.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Published {moment(blog.publishedAt).fromNow()} • {blog.view} views</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Our Categories</h2>
            <div className="space-y-4">
              {/* Categories List */}
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Football</span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Basketball</span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Tennis</span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Cycling</span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Volleyball</span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">MMA</span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Sports</span>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}