// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { type CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';
import rehypeShikiFromHighlighter, {
  type RehypeShikiCoreOptions,
} from '@shikijs/rehype/core';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { createHighlighterCore, createOnigurumaEngine } from 'shiki';
import go from 'shiki/langs/go.mjs';
import php from 'shiki/langs/php.mjs';
import python from 'shiki/langs/python.mjs';
import ruby from 'shiki/langs/ruby.mjs';
import rust from 'shiki/langs/rust.mjs';
import typescript from 'shiki/langs/typescript.mjs';
import githubDarkDefault from 'shiki/themes/github-dark-default.mjs';
import { mdxComponents } from '../../lib/mdx';
import rehypePreserveCodeProps from '../../lib/mdx/rehype-preserve-code-props';
import remarkCodeMetadata from '../../lib/mdx/remark-code-metadata';
import {
  bamlTextmate,
  bamlJinjaTextmate as jinjajson,
} from '../../lib/mdx/shiki-grammars';

export async function PostBody({ children }: { children: string }) {
  const highlighter = await createHighlighterCore({
    engine: createOnigurumaEngine(await import('shiki/wasm')),
    langs: [jinjajson, bamlTextmate, python, typescript, ruby, rust, go, php],
    themes: [githubDarkDefault],
  });

  const { content }: CompileMDXResult = await compileMDX({
    source: children,
    options: {
      mdxOptions: {
        remarkPlugins: [
          remarkGfm,
          remarkFrontmatter,
          remarkA11yEmoji,
          remarkCodeMetadata,
          [
            remarkToc,
            {
              tight: true,
              maxDepth: 5,
            },
          ],
        ],
        rehypePlugins: [
          rehypeSlug,
          rehypeAutolinkHeadings,
          [rehypePreserveCodeProps, { tagName: 'pre' }],
          [
            rehypeShikiFromHighlighter as unknown as () => void,
            highlighter,
            {
              themes: {
                light: 'github-dark-default',
                dark: 'github-dark-default',
              },
            } satisfies RehypeShikiCoreOptions,
          ],
          [rehypeStringify as () => void, { allowDangerousHtml: true }],
        ],
        format: 'mdx',
      },
    },
    components: mdxComponents,
  });

  return (
    <div className="prose flex flex-col flex-1 mx-auto container-sm max-w-screen-md">
      {content}
    </div>
  );
}
