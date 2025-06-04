import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import pow from '../../img/powered.png'
import VideoPopup from '../VideoPopup';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <img src={pow} className='sm:hidden inline h-36' />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <VideoPopup />
      <SpeedInsights />
    </div>
  );
}