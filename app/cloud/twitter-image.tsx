import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: 'BAML Cloud',
    subtitle: 'AI infrastructure that scales with you.',
  });
}
