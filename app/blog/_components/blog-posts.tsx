'use client';

import { useEffect, useState } from 'react';
import { getPosts, type Post } from '../_lib/get-posts';
import { BlogPostsGrid } from './blog-posts-grid';
import { FeaturedPost } from './featured-post';

const formatCategoryForFilter = (category: string) => {
  if (category === 'LaunchWeek') return 'launch week';
  return category.toLowerCase();
};

interface BlogPostsProps {
  selectedCategory: string;
}

export function BlogPosts({ selectedCategory }: BlogPostsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
      setFilteredPosts(data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(posts);
    } else {
      const filterCategory = formatCategoryForFilter(selectedCategory);
      setFilteredPosts(
        posts.filter((post) =>
          post.tags.some((tag: string) => tag.toLowerCase() === filterCategory),
        ),
      );
    }
  }, [selectedCategory, posts]);

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Featured Post */}
      {featuredPosts.length > 0 && (
        <section className="w-full px-4">
          <div className="mx-auto max-w-6xl">
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="w-full px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <BlogPostsGrid posts={regularPosts} />
        </div>
      </section>
    </>
  );
}
