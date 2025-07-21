import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Query } from 'appwrite';
import React, { useEffect, useState } from 'react';
import { databases } from '../../AppwriteConfig'

export default function HeroSection() {

  const [ featuredblogs, setFeaturedBlog] = useState([])
  const [showFrench, setShowFrench] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await databases.listDocuments(
        '68379f30000f7d86e98d',       // Replace with your Appwrite database ID
        '68379fa2002f31d6d937',     // Replace with your Appwrite collection ID
          [
            Query.orderDesc('publishedAt'),
            Query.limit(5)
          ]
        );
        setFeaturedBlog(response.documents); // Returns an array of documents
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    }
    getBlog();
  }, []);

   useEffect(() => {
    const interval = setInterval(() => {
      setShowFrench(prev => !prev);  // toggle language every 50 seconds
    }, 10000); // 50,000 milliseconds = 50 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <>
    {/*
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
              news, insights, and stories that move the game forward so stay tune and get informed
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/blog">
                  <Button variant="primary" size="md" className="group">
                    Explore Articles
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link className='sm:inline hidden' to="/category/Football">
                  <Button variant="outline" size="md">
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
     */}
        <div className="">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {featuredblogs.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden shadow-lg">
              <Link to={`/blog/${post.$id}`}>
              <img
                src={post.coverImage}
                className="w-full h-[630px] object-cover"
              />
              <div className="absolute bottom-0 bg-black/70 text-white p-8  w-full font-semibold">
                <p className='px-2.5 py-0.5 mb-2 w-20 bg-blue-50 text-blue-700 text-center rounded-full hover:bg-blue-100 transition-colors'>{post.category}</p>
                <p className='md:text-5xl text-2xl line-clamp-2'>{showFrench ? post.f_title : post.title}</p>
                <p className='text-md line-clamp-2 text-gray-400 md:w-[1000px]'>{showFrench ? post.f_excerpt : post.excerpt}</p>
              </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
}