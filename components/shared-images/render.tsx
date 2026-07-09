/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { BaseLayout, contentType, size } from './base-layout';
import { Title } from './title';

export { size, contentType };

export function renderTitleImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    BaseLayout({
      children: <Title subtitle={subtitle} title={title} />,
    }),
    { ...size },
  );
}
