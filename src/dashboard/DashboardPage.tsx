import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Users, Eye, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Total Articles', value: '24', icon: FileText, change: '+3 this week' },
  { label: 'Total Views', value: '45.2K', icon: Eye, change: '+12% this month' },
  { label: 'Subscribers', value: '1.2K', icon: Users, change: '+48 this week' },
  { label: 'Engagement Rate', value: '5.6%', icon: TrendingUp, change: '+0.8% this month' },
];

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>Dashboard | Actu Sport Camer</title>
      </Helmet>
      
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
        
        <div className="flex flex-wrap justify-between gap-2 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border w-60 border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
                <span className="text-sm w-32 text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Articles</h2>
            <div className="space-y-4">
              {/* Recent Articles List */}
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-gray-900">The Future of Web Development</h3>
                <p className="text-sm text-gray-500 mt-1">Published 2 days ago • 1.2K views</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-medium text-gray-900">Mastering CSS Grid</h3>
                <p className="text-sm text-gray-500 mt-1">Published 4 days ago • 856 views</p>
              </div>
              <div className="pb-4">
                <h3 className="font-medium text-gray-900">React Performance Tips</h3>
                <p className="text-sm text-gray-500 mt-1">Published 1 week ago • 2.1K views</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h2>
            <div className="space-y-4">
              {/* Categories List */}
              <div className="flex items-center justify-between">
                <span className="text-gray-700">React</span>
                <span className="text-sm text-gray-500">12 articles</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">CSS</span>
                <span className="text-sm text-gray-500">8 articles</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">JavaScript</span>
                <span className="text-sm text-gray-500">6 articles</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Design</span>
                <span className="text-sm text-gray-500">4 articles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}