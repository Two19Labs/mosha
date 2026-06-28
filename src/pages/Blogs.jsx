import React, { useState } from 'react';
import { BookOpen, Search, X, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../data/blogsData';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBlog, setActiveBlog] = useState(null);

  // Filter blogs
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-cream-100 min-h-screen py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fadeInUp">
          <span className="text-xs font-bold text-sage-500 tracking-widest uppercase bg-sage-100/60 border border-sage-200/50 px-4 py-1.5 rounded-full">
            Clinical Wellness Library
          </span>
          <h1 className="font-display font-bold text-4xl text-sage-900 leading-tight mt-2">
            Health and Digestion Blogs
          </h1>
          <p className="text-base text-sage-700 leading-relaxed">
            Understand your digestive system. Our blogs break down clinical research on acidity, bloating, gastritis, and chronic constipation into actionable advice.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel p-6 rounded-3xl border border-sage-200/50 bg-cream-50 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-fadeInUp">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {['all', 'acidity', 'gastritis', 'bloating', 'gut'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-sage-500 text-cream-100 shadow-sm'
                    : 'bg-cream-100 text-sage-700 border border-sage-100 hover:bg-sage-50'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat === 'gut' ? 'Gut Health' : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gut topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sage-200 bg-cream-50 text-sage-800 text-xs focus:outline-none focus:border-sage-400 transition-colors"
            />
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-sage-400" />
          </div>

        </div>

        {/* Blogs List Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="h-12 w-12 text-sage-300 mx-auto mb-4" />
            <p className="font-sans text-sage-700 font-semibold">No articles found</p>
            <p className="font-sans text-xs text-sage-400 mt-1">
              Try adjusting your search query or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <div 
                key={blog.id}
                className="glass-panel p-8 rounded-3xl border border-sage-200/50 bg-cream-50 flex flex-col justify-between hover:scale-102 hover:border-sage-400/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Meta tag */}
                  <div className="flex items-center space-x-3 text-xs text-sage-400">
                    <span className="bg-sage-100 text-sage-600 font-semibold px-3 py-1 rounded-full uppercase tracking-wider text-[9px]">
                      {blog.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-sage-900 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="font-sans text-xs text-sage-700 leading-relaxed">
                    {blog.snippet}
                  </p>
                </div>

                <div className="pt-6 border-t border-sage-100/60 mt-6 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-sage-400 uppercase tracking-widest">
                    MOSHA Editorial
                  </span>
                  <button 
                    onClick={() => setActiveBlog(blog)}
                    className="text-xs font-bold text-sage-600 hover:text-sage-800 flex items-center"
                  >
                    Read Full Article
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Detailed Modal Reader */}
        {activeBlog && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <div 
              onClick={() => setActiveBlog(null)}
              className="fixed inset-0 bg-sage-900/60 backdrop-blur-sm transition-opacity"
            />
            
            <div className="relative glass-panel rounded-3xl bg-cream-50 max-w-2xl w-full border border-sage-200/50 overflow-hidden shadow-2xl animate-fadeInUp">
              {/* Header */}
              <div className="px-8 py-6 border-b border-sage-100 flex justify-between items-center bg-cream-100">
                <span className="bg-sage-500 text-cream-100 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {activeBlog.category}
                </span>
                <button 
                  onClick={() => setActiveBlog(null)}
                  className="rounded-full p-2 text-sage-700 hover:bg-sage-100 hover:text-sage-900 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
                <div className="flex items-center space-x-4 text-xs text-sage-400">
                  <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1" /> {activeBlog.date}</span>
                  <span className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1" /> {activeBlog.readTime}</span>
                </div>
                
                <h2 className="font-display font-bold text-2xl text-sage-900 leading-snug">
                  {activeBlog.title}
                </h2>
                
                <div className="font-sans text-sage-800 text-sm leading-relaxed space-y-4 whitespace-pre-line border-t border-sage-100/60 pt-6">
                  {activeBlog.content}
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-4 border-t border-sage-100 bg-cream-100 text-center text-xs text-sage-500">
                This article is for informational purposes only. Consult with a gut specialist for personalized diagnoses.
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
