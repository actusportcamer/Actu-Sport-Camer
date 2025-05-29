import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-20 bg-gradient-to-br from-white to-purple-100">
      <Container>
        <div className="flex gap-8 flex-col md:flex-row items-center">
          <div className="md:mt-0 md:w-1/2 md:pr-12">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-800 rounded-2xl transform rotate-3 scale-105 opacity-15"></div>
              <div className="absolute inset-0 bg-purple-800 rounded-2xl transform -rotate-8 scale-105 opacity-15"></div>
              <img
                src="https://magazin.hockey.de/uploads/media/image-1920/04/42214-FU1_2284%20%282%29.webp?v=1-1"
                alt="People collaborating on web development"
                className="rounded-2xl shadow-xl relative z-10 w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2 mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Your front-row seat to the latest news in sports
            </h1>
            <p className="mt-6 text-md text-gray-800 leading-relaxed">
            news, insights, and stories that move the game forward so stay tune and get info
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/blog">
                <Button variant="primary" size="md" className="group">
                  Explore Articles
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link className='sm:inline hidden' to="/category/react">
                <Button variant="outline" size="md">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}