/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import type { Post } from '@/app/blog/_lib/get-posts';
import getPosts from '@/app/blog/_lib/get-posts';
import {
  BaseLayout,
  contentType,
  size,
} from '@/components/shared-images/base-layout';
import { PostCard } from '@/components/shared-images/post-card';
import { Title } from '@/components/shared-images/title';

export { size, contentType };

export default async function Image() {
  // Get the latest blog post
  const posts = await getPosts();
  const latestPost = posts
    .filter((post: Post) => post?.isPublished)
    .sort(
      (a: Post, b: Post) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )[0];

  const baseLayout = BaseLayout({
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Title
          subtitle="Insights and updates from the Boundary team on AI, LLMs, and developer tools"
          title="Boundary Blog"
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
          }}
        >
          {latestPost && (
            <PostCard author={latestPost.author} title={latestPost.title} />
          )}
        </div>
      </div>
    ),
  });

  return new ImageResponse(baseLayout, {
    ...size,
  });
}
