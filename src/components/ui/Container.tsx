import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Container({ 
  children, 
  className = '', 
  as: Component = 'div',
  size = 'lg'
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };
  
  return (
    <Component className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}