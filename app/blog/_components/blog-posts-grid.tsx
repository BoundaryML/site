import { formatDistanceToNow } from 'date-fns';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { Post } from '../_lib/get-posts';
import { formatCategoryForDisplay } from './category-filter';

interface BlogPostsGridProps {
  posts: Post[];
}

export function BlogPostsGrid({ posts }: BlogPostsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-80 relative group">
            {/* Background Image */}
            <div className="absolute inset-0">
              {post.og?.image ? (
                <>
                  <Image
                    alt={post.title}
                    className="object-cover w-full h-full blur-sm group-hover:blur-none transition-all duration-300"
                    fill
                    priority
                    src={
                      post.og.image.startsWith('/blog/')
                        ? post.og.image
                        : `/blog${post.og.image}`
                    }
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300" />
                </>
              ) : (
                <Image
                  alt="BAML Background"
                  className="object-cover w-full h-full"
                  fill
                  priority
                  src="/baml-og-background.png"
                />
              )}
              {/* Dark overlay */}
            </div>

            {/* Glassmorphism Card Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
              <div className="flex-1">
                {/* Category and Meta Info */}
                <div className="flex items-center gap-3 text-sm text-white/80 mb-3 justify-between">
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/20">
                    <Tag className="h-3 w-3" />
                    {formatCategoryForDisplay(post.tags[0])}
                  </span>
                  {/* <span className="flex items-center gap-1 text-xs">
                    <Calendar className="h-3 w-3" />
                    {formatDistanceToNow(new Date(post.date), {
                      addSuffix: true,
                    })}
                  </span> */}
                  <span className="flex items-center gap-1 text-xs">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-white">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm line-clamp-3">
                  {post.description}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  {post.author?.imageUrl && (
                    <div className="relative size-8 rounded-full overflow-hidden border border-white/20">
                      <Image
                        alt={post.author.name}
                        className="object-cover"
                        fill
                        src={post.author.imageUrl}
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-white">
                      {post.author?.name}
                    </p>
                    <p className="text-xs text-white/60">
                      {formatDistanceToNow(new Date(post.date), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-white/80 group-hover:text-white transition-colors">
                  <span className="text-sm">Read</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
