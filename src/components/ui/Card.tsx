import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  href?: string;
}

export function Card({ children, className = '', as = 'div', href }: CardProps) {
  const Component = href ? Link : as;
  const props = href ? { to: href } : {};
  
  return (
    <Component
      {...props}
      className={`bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-xl font-semibold tracking-tight ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
}

export function CardImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${className}`} 
      />
    </div>
  );
}