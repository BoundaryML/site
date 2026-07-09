import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: 'BAML Blog',
    subtitle: 'Insights, tutorials, and AI development updates.',
  });
}
