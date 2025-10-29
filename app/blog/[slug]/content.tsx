// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import rehypeShiki from '@shikijs/rehype';
import { bundledLanguages } from 'shiki';
import { type CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { mdxComponents } from '../../../lib/mdx';
import rehypePreserveCodeProps from '../../../lib/mdx/rehype-preserve-code-props';
import remarkCodeMetadata from '../../../lib/mdx/remark-code-metadata';
import {
  bamlJinjaTextmate,
  bamlTextmate,
} from '../../../lib/mdx/shiki-grammars';

// Rehype plugin to fix invalid HTML nesting (e.g., <ol> inside <p>)
function rehypeFixInvalidNesting() {
  return (tree: unknown) => {
    const visit = (node: unknown) => {
      const typedNode = node as {
        type?: string;
        tagName?: string;
        children?: unknown[];
      };
      if (typedNode.type === 'element' && typedNode.tagName === 'p') {
        // Check if paragraph contains block-level elements
        const hasBlockElements = typedNode.children?.some((child: unknown) => {
          const typedChild = child as { type?: string; tagName?: string };
          return (
            typedChild.type === 'element' &&
            ['ol', 'ul', 'div', 'table', 'pre', 'blockquote'].includes(
              typedChild.tagName || '',
            )
          );
        });

        if (hasBlockElements) {
          // Replace the paragraph with a div to allow block elements
          typedNode.tagName = 'div';
        }
      }

      // Recursively visit children
      if (typedNode.children) {
        typedNode.children.forEach(visit);
      }
    };

    visit(tree);
    return tree;
  };
}

export async function PostBody({ children }: { children: string }) {
  const { content }: CompileMDXResult = await compileMDX({
    components: mdxComponents,
    options: {
      mdxOptions: {
        format: 'mdx',
        rehypePlugins: [
          rehypeSlug,
          rehypeAutolinkHeadings,
          [rehypePreserveCodeProps, { tagName: 'pre' }],
          rehypeFixInvalidNesting,
          [
            rehypeShiki,
            {
              themes: {
                dark: 'github-dark',
                light: 'github-light',
              },
              defaultColor: 'dark',
              langs: [...Object.values(bundledLanguages), bamlTextmate, bamlJinjaTextmate],
            },
          ],
          [rehypeStringify as () => void, { allowDangerousHtml: true }],
        ],
        remarkPlugins: [
          remarkGfm,
          remarkFrontmatter,
          remarkA11yEmoji,
          remarkCodeMetadata,
          [
            remarkToc,
            {
              maxDepth: 5,
              tight: true,
            },
          ],
        ],
      },
    },
    source: children,
  });

  return (
    <div className="prose flex flex-col flex-1 mx-auto container-sm max-w-screen-md">
      {content}
    </div>
  );
}
