import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../components/ui/Container';
import NewsletterCTA from '../components/blog/NewsletterCTA';
import { Users, FileText, Award, BookOpen } from 'lucide-react';
import ramses from '../img/ramses.png'
import esther from '../img/esther.png'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | InsightBlog</title>
        <meta name="description" content="Learn about InsightBlog, our mission, and the team behind our content." />
      </Helmet>
      
      <section  style={{backgroundImage: `url('https://i0.wp.com/ghanadmission.com/us/wp-content/uploads/2022/04/kozzi-13084237-Group_of_sports_equipment-874x594-1.jpg')`}} className="bg-cover bg-center pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center p-12">
            <h1 className="text-4xl text-white md:text-5xl font-bold mb-6">
              Profile
            </h1>
          </div>
        </Container>
      </section>
      
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            <span className='text-2xl text-red-400'>T</span>o deliver timely, engaging, and insightful coverage of Cameroonian and African sports. We aim to spotlight the athletes, teams, and stories that define our region—on and off the field.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            <span className='text-2xl text-red-400'>T</span>hrough a blend of journalism, digital storytelling, and tech-savvy presentation, we bring fans closer to the game while celebrating the cultural pride, passion, and progress of our sporting community
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <FileText className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Content</h3>
                <p className="text-gray-600">
                We prioritize depth, accuracy, and relevance in every article we publish.our goal is to deliver content that informs, inspires, and truly adds value.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <Users className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Driven</h3>
                <p className="text-gray-600">
                We believe in the power of community. Actu Sport Camer is more than a platform—it’s a space for fans, athletes, and enthusiasts to connect, discuss, and grow together.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <BookOpen className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                Sports and technology never stand still—and neither do we. We're committed to staying ahead of the curve by cutting-edge insights that impact how we play, watch, and experience sports.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <Award className="h-10 w-10 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise & Experience</h3>
                <p className="text-gray-600">
                Our content is crafted by writers, analysts, and sports professionals with real-world experience. We bring you practical knowledge, sharp analysis, and strategies rooted in both passion and proven performance.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Actu Sport Camer was born out of a simple but powerful idea: to give Cameroonian sports the spotlight they truly deserve.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            In a digital world overflowing with global sports headlines, we saw a gap—a lack of consistent, passionate, and quality coverage of local athletes, teams, and stories that define Cameroon’s vibrant sporting culture.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            What started as a small passion project has grown into a platform dedicated to celebrating sports at all levels—from grassroots tournaments to international competitions. We bring fans closer to the action with news, analysis, interviews, and digital features that reflect our deep love for the game and our pride in Cameroonian excellence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             At Actu Sport Camer, we believe that every match, every player, and every fan counts. This is more than a blog. It’s a movement—to inform, inspire, and elevate sports culture across Cameroon and Africa.
            </p>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <img 
                  src={ramses}
                  alt="Alex Chen" 
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" 
                />
                <h3 className="text-xl font-semibold text-gray-900">Ramses Love</h3>
                <p className="text-blue-600 mb-3">Founder & Tech Lead</p>
                <p className="text-gray-600 text-sm">
                  Full-stack developer with a passion for serverless architecture and performance optimization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <img 
                  src={esther}
                  alt="Maya Johnson" 
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4" 
                />
                <h3 className="text-xl font-semibold text-gray-900">Esther Otto E.</h3>
                <p className="text-purple-600 mb-3">Journalist & Admin</p>
                <p className="text-gray-600 text-sm">
                  UI/UX designer focused on creating accessible and beautiful digital experiences.
                </p>
              </div>
              
            </div>
          </div>
        </Container>
      </section>
      
      <NewsletterCTA />
    </>
  );
}