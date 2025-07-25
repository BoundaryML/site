import { notFound } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getPost, getPosts } from '../_lib/get-posts';
import { PostBody } from '../content';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author?.name].filter(Boolean),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        {/* Back Button */}
        <section className="w-full px-4 py-8">
          <div className="mx-auto max-w-4xl">
            <Link href="/blog">
              <Button variant="ghost" className="group mb-8">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="w-full px-4 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
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
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.description}
            </p>

            {post.author && (
              <div className="flex items-center gap-4 pb-8 border-b">
                {post.author.imageUrl && (
                  <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  {post.author.linkedin && (
                    <Link 
                      href={post.author.linkedin}
                      className="text-sm text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Article Content */}
        <section className="w-full px-4 py-8">
          <PostBody>{post.body}</PostBody>
        </section>

        {/* Back to Blog CTA */}
        <section className="w-full px-4 py-8">
          <div className="mx-auto max-w-4xl text-center">
            <Link href="/blog">
              <Button size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}