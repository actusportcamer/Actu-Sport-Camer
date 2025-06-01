import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, PlusCircle, Settings, LogOut } from 'lucide-react';
import Container from '../ui/Container';
import logo from '../../img/logo.png'
import { account} from '../../AppwriteConfig'
import { toast } from 'react-toastify';
import robot from '../../img/Screenshot_2025-06-01_073257-removebg-preview.png'

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate()
  
  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const [userData, setUserData] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await account.get()
      setUserData(response)
    }
    getData()
  }, [])
  
  const Signout = async () => {
  try {
    await account.deleteSession('current');
    navigate('/'); // Redirect to login page
  } catch (error) {
    toast.error('Logout failed:', error.message);
  }
  window.location.reload();
 };

  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Articles', path: '/dashboard/articles' },
    { icon: PlusCircle, label: 'New Article', path: '/dashboard/articles/new' }
  ];
  
  return (
    <>
    {
      userData?.labels[0] === 'admin' ? (

        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white border-b border-gray-200">
            <Container>
              <div className="flex justify-between items-center py-4">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                <img src={logo} width={40} />
                </Link>
                <div className='flex gap-2'>
                  <p className='font-semibold'>{ userData?.name }</p>
                <button onClick={Signout} className="flex items-center text-gray-600 hover:text-gray-900">
                  <LogOut size={18} color='red' className="mr-1" />
                </button>
                </div>
              </div>
            </Container>
          </nav>
          
          <Container>
            <div className="flex md:flex-row flex-col gap-3 py-8">
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
      ) : (
        <div className='flex flex-col gap-2 justify-center items-center min-h-screen'>
        <img src={robot} alt="" className='w-80'/>
        <h1 className='text-2xl font-bold'>Access Denied</h1>
        </div>
      )
    }
    </>
  );
}