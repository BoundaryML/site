import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Building Type-Safe AI Applications: A Complete Guide",
    excerpt: "Learn how to build reliable AI applications with BAML's type safety features. From schema definition to production deployment.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Tutorial",
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Why We Built BAML: The Story Behind Our Language",
    excerpt: "The journey of creating a domain-specific language for AI development. Understanding the problems we set out to solve.",
    author: "Alex Rivera",
    date: "2024-01-10",
    readTime: "5 min read",
    category: "Engineering",
    featured: false,
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "BAML vs Traditional AI Development: A Performance Analysis",
    excerpt: "Comparing development speed, reliability, and maintainability between BAML and traditional approaches to AI development.",
    author: "Michael Chen",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Analysis",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Getting Started with BAML: Your First AI Application",
    excerpt: "A step-by-step guide to building your first type-safe AI application with BAML. Perfect for beginners.",
    author: "Emily Watson",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Tutorial",
    featured: false,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Advanced BAML Patterns for Production Applications",
    excerpt: "Deep dive into advanced patterns and best practices for building production-ready AI applications with BAML.",
    author: "David Park",
    date: "2024-01-03",
    readTime: "12 min read",
    category: "Advanced",
    featured: false,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Integrating BAML with OpenAI and Anthropic APIs",
    excerpt: "How to seamlessly integrate BAML with popular AI providers while maintaining type safety and reliability.",
    author: "Lisa Zhang",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Integration",
    featured: false,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60"
  }
];

const categories = ["All", "Tutorial", "Engineering", "Analysis", "Advanced", "Integration"];

export default function BlogPage() {
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
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full px-4 py-12">
          <div className="mx-auto max-w-6xl">
            {blogPosts.filter(post => post.featured).map(post => (
              <Card key={post.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        {post.category}
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
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">By {post.author}</span>
                      <Button variant="ghost" className="group">
                        Read More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
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
              {blogPosts.filter(post => !post.featured).map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-primary/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Read 
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Button>
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