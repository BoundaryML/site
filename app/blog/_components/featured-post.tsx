import { formatDistanceToNow } from 'date-fns';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { Post } from '../_lib/get-posts';
import { formatCategoryForDisplay, getCategoryStyles } from './category-filter';

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow h-96 pt-0">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          <div className="relative h-64 md:h-full">
            {post.author?.imageUrl && (
              <Image
                alt={post.title}
                className="object-cover w-full h-full"
                height={512}
                src={post.author.imageUrl}
                width={512}
              />
            )}
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between h-full">
            <div>
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
                  {formatDistanceToNow(new Date(post.date), {
                    addSuffix: true,
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground line-clamp-3">
                {post.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-3">
                {post.author?.imageUrl && (
                  <div className="relative size-16 rounded-full overflow-hidden">
                    <Image
                      alt={post.author.name}
                      className="object-cover"
                      fill
                      // height={512}
                      src={post.author.imageUrl}
                      // width={512}
                    />
                  </div>
                )}
                <span className="text-sm text-muted-foreground">
                  By {post.author?.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-sm">Read More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
