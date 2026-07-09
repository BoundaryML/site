import {
  contentType,
  renderTitleImage,
  size,
} from '@/components/shared-images/render';

export { size, contentType };

export default function Image() {
  return renderTitleImage({
    title: 'Solutions',
    subtitle: 'Build AI agents, workflows, and production systems with BAML.',
  });
}
