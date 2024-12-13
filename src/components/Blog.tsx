import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Maximizing Your Digital Marketing ROI',
    excerpt: 'Learn the key strategies to improve your digital marketing return on investment.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 16, 2024'
  },
  {
    id: 2,
    title: 'The Future of Web Design',
    excerpt: 'Exploring upcoming trends and technologies shaping the future of web design.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 15, 2024'
  },
  {
    id: 3,
    title: 'SEO Best Practices for 2024',
    excerpt: 'Stay ahead of the competition with these essential SEO strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    date: 'Mar 14, 2024'
  }
];

const Blog = () => {
  return (
    <div id="blog" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest from Our Blog
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Insights and updates from the world of digital marketing and web design
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <span className="hover:underline">{post.date}</span>
                  </p>
                  <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;