import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: 'Pricing',
    subtitle: 'Plans that scale with you — from free to enterprise.',
  });
}
