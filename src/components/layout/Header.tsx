import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import logo from '../../img/logo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Categories', href: '/category/react' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled ? 'bg-blue-50 shadow-sm' : 'bg-white'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img src={logo} width={40} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary" size="sm">Subscribe</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 flex items-center justify-between px-2 py-1">
              <Button variant="primary" size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}