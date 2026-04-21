import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: 'Learn BAML',
    subtitle: 'Interactive lessons from zero to production.',
  });
}
