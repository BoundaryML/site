import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: 'Why the f*** did we make a language?',
    subtitle: 'Because prompt engineering hell had to end.',
  });
}
