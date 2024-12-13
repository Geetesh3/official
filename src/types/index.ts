export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin';
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}