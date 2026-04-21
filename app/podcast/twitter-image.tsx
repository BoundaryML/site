import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: '🦄 ai that works',
    subtitle:
      'Weekly live coding with @hellovai & @dexhorthy · Tuesdays 10am PT',
  });
}
