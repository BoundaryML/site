import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: 'Boundary',
    subtitle: 'Build, test, and develop LLM applications.',
  });
}
