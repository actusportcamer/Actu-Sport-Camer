import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, PlusCircle, Settings, LogOut } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../img/logo.png'

export default function DashboardLayout() {
  const location = useLocation();
  
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Articles', path: '/dashboard/articles' },
    { icon: PlusCircle, label: 'New Article', path: '/dashboard/articles/new' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <Container>
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src={logo} width={40} />
            </Link>
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <LogOut size={18} className="mr-2" />
              Sign Out
            </button>
          </div>
        </Container>
      </nav>
      
      <Container>
        <div className="flex gap-8 py-8">
          {/* Sidebar */}
          <div className="w-56 flex-shrink-0">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActiveRoute(item.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}