import { formatDistanceToNow } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogCoverImage } from '@/components/blog-cover-image';
import { Card } from '@/components/ui/card';
import type { Post } from '../_lib/get-posts';

// import { formatCategoryForDisplay, getCategoryStyles } from './category-filter';

interface BlogPostsGridProps {
  posts: Post[];
}

export function BlogPostsGrid({ posts }: BlogPostsGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.slug}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer py-0 flex flex-col h-full">
            <BlogCoverImage post={post} />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                {post.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  {post.author?.imageUrl && (
                    <div className="relative size-8 rounded-full overflow-hidden">
                      <Image
                        alt={post.author.name}
                        className="object-cover"
                        fill
                        src={post.author.imageUrl}
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">{post.author?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(post.date), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <span className="text-sm">Read</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
