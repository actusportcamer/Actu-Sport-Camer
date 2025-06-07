import { useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import pow from '../../img/powered.png'
import VideoPopup from '../VideoPopup';

export default function Layout() {

  return (
    <div className="flex flex-col min-h-screen">
      <a href='https://technovacorp.vercel.app/' target="_blank" rel="noopener noreferrer">
        <img src={pow} className='sm:hidden inline h-36' />
      </a>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}