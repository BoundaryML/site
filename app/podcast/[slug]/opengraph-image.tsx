import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';
import { fetchPodcastEpisodes } from '../podcast-data';

export { size, contentType };

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const episodes = await fetchPodcastEpisodes();
  const episode = episodes.find((ep) => ep.slug === params.slug);

  if (!episode) {
    return renderTitleImage({
      title: '🦄 ai that works',
      subtitle: 'Weekly AI development sessions.',
    });
  }

  const formattedDate = new Date(episode.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return renderTitleImage({
    title: `🦄 ${episode.title}`,
    subtitle: `${episode.episodeNumber} · ai that works · ${formattedDate}`,
  });
}
