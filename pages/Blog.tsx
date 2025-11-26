import React, { useState } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { BLOG_POSTS } from '../data/mockData';
import { Calendar, X, User } from 'lucide-react';
import { BlogPost } from '../types';

const Blog = () => {
  const { t, language, dir } = useGlobal();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-siral-900 mb-4">{t('nav_blog')}</h1>
        <p className="text-siral-600">Stories from the spice route.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="flex flex-col group">
            <div 
              className="mb-4 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
                <img 
                  src={post.image} 
                  alt={post.title[language]} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex items-center gap-2 text-siral-500 text-sm mb-2">
                <Calendar size={14} />
                <span>{post.date}</span>
            </div>
            <h2 
              className="text-2xl font-serif font-bold text-siral-800 mb-3 hover:text-siral-600 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
                {post.title[language]}
            </h2>
            <p className="text-siral-600 leading-relaxed">
                {post.excerpt[language]}
            </p>
            <button 
              onClick={() => setSelectedPost(post)}
              className="text-left mt-4 text-siral-700 font-bold underline decoration-siral-300 hover:decoration-siral-700 w-fit"
            >
                {t('read_more')}
            </button>
          </article>
        ))}
      </div>

      {/* Blog Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir={dir}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPost(null)}></div>
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-fade-in">
            <div className="sticky top-0 right-0 p-4 flex justify-end bg-gradient-to-b from-white to-transparent z-10">
              <button 
                onClick={() => setSelectedPost(null)}
                className="bg-siral-100 p-2 rounded-full text-siral-900 hover:bg-siral-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-8 pb-8 md:px-12 md:pb-12">
              <span className="text-siral-500 text-sm flex items-center gap-2 mb-4">
                <Calendar size={14} /> {selectedPost.date}
                <span className="mx-2">•</span>
                <User size={14} /> Siralbanna Team
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-siral-900 mb-8">{selectedPost.title[language]}</h1>
              
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title[language]} 
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8" 
              />
              
              <div className="prose prose-siral max-w-none text-siral-700 leading-relaxed">
                <p className="text-lg font-medium mb-6">{selectedPost.excerpt[language]}</p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  In Moroccan culture, spices are not just ingredients; they are a language of hospitality.
                </p>
                <p className="mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <blockquote className="border-l-4 border-siral-400 pl-4 italic my-6 text-siral-800 bg-siral-50 p-4 rounded-r">
                  "To cook with love is to feed the soul." - Moroccan Proverb
                </blockquote>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;