'use client'

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { getPosts, type Post } from './_lib/get-posts';

const categories = ["All", "Announcements", "Tutorials", "Research", "Engineering", "LaunchWeek"];

const getCategoryStyles = (category: string) => {
  // Convert tag to camelCase format for style lookup
  const normalizeCategory = (cat: string) => {
    if (cat.toLowerCase() === 'launch week') return 'LaunchWeek';
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

  const normalizedCategory = normalizeCategory(category);
  
  const styles = {
    "All": { backgroundColor: '#f1f5f9', color: '#1e293b' },
    "Announcements": { backgroundColor: '#dbeafe', color: '#1e40af' },
    "Tutorials": { backgroundColor: '#dcfce7', color: '#166534' }, 
    "Research": { backgroundColor: '#f3e8ff', color: '#7c3aed' },
    "Engineering": { backgroundColor: '#fed7aa', color: '#ea580c' },
    "LaunchWeek": { backgroundColor: '#fce7f3', color: '#be185d' }
  };
  return styles[normalizedCategory as keyof typeof styles] || styles["All"];
};

const formatCategoryForDisplay = (category: string) => {
  if (category.toLowerCase() === "launch week" || category === "LaunchWeek") return "Launch Week";
  return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
};

const formatCategoryForFilter = (category: string) => {
  if (category === "LaunchWeek") return "launch week";
  return category.toLowerCase();
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getPosts().then(data => {
      setPosts(data);
      setFilteredPosts(data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      const filterCategory = formatCategoryForFilter(selectedCategory);
      setFilteredPosts(posts.filter(post => 
        post.tags.some((tag: string) => 
          tag.toLowerCase() === filterCategory
        )
      ));
    }
  }, [selectedCategory, posts]);

  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative flex w-full items-center justify-center px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              BAML Blog
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Insights, tutorials, and updates from the BAML team. Learn about AI development, 
              type safety, and building reliable AI applications.
            </p>
            <div className="flex gap-4">
              <Button variant="outline">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="w-full px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  className="rounded-full whitespace-nowrap border"
                  style={category === selectedCategory ? getCategoryStyles(category) : {}}
                  onClick={() => setSelectedCategory(category)}
                >
                  {formatCategoryForDisplay(category)}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full px-4 py-12">
          <div className="mx-auto max-w-6xl">
            {filteredPosts.filter(post => post.featured).map(post => (
              <Card key={post.slug} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    {post.author?.imageUrl && <img 
                      src={post.author.imageUrl} 
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />}
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span 
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                        style={getCategoryStyles(post.tags[0])}
                      >
                        <Tag className="h-4 w-4" />
                        {formatCategoryForDisplay(post.tags[0])}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <p className="text-muted-foreground mb-6">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {post.author?.name}</span>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="group">
                          Read More 
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.filter(post => !post.featured).map(post => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {post.author?.imageUrl && <div className="relative h-48">
                    <img 
                      src={post.author.imageUrl} 
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span 
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={getCategoryStyles(post.tags[0])}
                      >
                        {formatCategoryForDisplay(post.tags[0])}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{post.author?.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="group">
                          Read 
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest BAML tutorials, updates, and insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}