import React from 'react';
import { Link } from 'react-router-dom';

interface TagCloudProps {
  tags: string[];
  className?: string;
}

export default function TagCloud({ tags, className = '' }: TagCloudProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <Link
          key={tag}
          to={`/tag/${tag}`}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium text-gray-700 transition-colors"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
}