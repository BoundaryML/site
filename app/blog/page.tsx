'use client';

import { useState } from 'react';
import { FooterSection } from '@/components/footer-section';
import { Navbar } from '@/components/navbar';
import { BlogPosts } from './_components/blog-posts';
import { HeroSection } from './_components/hero-section';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        <HeroSection
          onCategoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <BlogPosts selectedCategory={selectedCategory} />
        <FooterSection />
      </main>
    </div>
  );
}
