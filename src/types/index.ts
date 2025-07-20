export interface Post {
  $id: string;
  f_title: string;
  title: string;
  slug: string;
  f_excerpt: string;
  excerpt: string;
  f_content: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readTime: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  name: string;
}