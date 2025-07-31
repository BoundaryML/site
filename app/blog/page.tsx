import type { Metadata } from 'next';
import { FooterSection } from '@/components/footer-section';
import { Navbar } from '@/components/navbar';
import { BlogContent } from './_components/blog-content';
import { getPosts } from './_lib/get-posts';

export async function generateMetadata(): Promise<Metadata> {
  return {
    description:
      'Insights, tutorials, and updates from the BAML team. Stay ahead with the latest in AI development.',
    openGraph: {
      description:
        'Insights, tutorials, and updates from the BAML team. Stay ahead with the latest in AI development.',
      title: 'BAML Blog',
      type: 'website',
    },
    title: 'BAML Blog - Insights, Tutorials, and Updates',
    twitter: {
      card: 'summary_large_image',
      description:
        'Insights, tutorials, and updates from the BAML team. Stay ahead with the latest in AI development.',
      title: 'BAML Blog',
    },
  };
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        <BlogContent initialPosts={posts} />
        <FooterSection />
      </main>
    </div>
  );
}
