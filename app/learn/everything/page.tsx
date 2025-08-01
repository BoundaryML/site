import fs from 'node:fs';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import { createHighlighter } from 'shiki';
import './everything.css';
import { bamlJinjaTextmate, bamlTextmate } from '@/lib/mdx/shiki-grammars';

interface NavSection {
  chapter: string;
  sections: { title: string; id: string }[];
}

function parseNavigation(content: string): NavSection[] {
  const lines = content.split('\n');
  const navigation: NavSection[] = [];
  let currentChapter: NavSection | null = null;

  for (const line of lines) {
    // Match h1 headers (chapters)
    if (line.startsWith('# ')) {
      const chapterTitle = line.substring(2).trim();
      currentChapter = {
        chapter: chapterTitle,
        sections: [],
      };
      navigation.push(currentChapter);
    }
    // Match h2 headers (sections)
    else if (line.startsWith('## ') && currentChapter) {
      const sectionTitle = line.substring(3).trim();
      const sectionId = sectionTitle.toLowerCase().replace(/\s+/g, '-');
      currentChapter.sections.push({
        id: sectionId,
        title: sectionTitle,
      });
    }
  }

  return navigation;
}

let highlighterPromise: Promise<any> | null = null;

async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      langs: [
        'javascript',
        'typescript',
        'python',
        'rust',
        bamlTextmate,
        bamlJinjaTextmate,
      ],
      themes: ['github-light'],
    });
  }
  return highlighterPromise;
}

export default async function EverythingPage() {
  // Read the markdown file at build time
  const markdownPath = path.join(process.cwd(), 'lessons', 'everything.md');
  const content = fs.readFileSync(markdownPath, 'utf-8');

  // Parse navigation from content
  const navigation = parseNavigation(content);

  // Get the highlighter
  const highlighter = await getHighlighter();

  return (
    <div className="learn-baml-container">
      <nav className="learn-baml-sidebar">
        <div className="learn-baml-logo">
          <span className="learn-baml-star">⭐</span>
          <span>BAML Language Tour</span>
        </div>

        {navigation.map((navSection) => (
          <div className="learn-baml-nav-section" key={navSection.chapter}>
            <h3>{navSection.chapter}</h3>
            <ul>
              {navSection.sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <main className="learn-baml-main">
        <article className="learn-baml-content">
          <ReactMarkdown
            components={{
              code: ({ children, className }) => {
                // In react-markdown, inline code doesn't have a className
                const isInline = !className;

                if (isInline) {
                  return (
                    <code className="learn-baml-inline-code">{children}</code>
                  );
                }

                // Extract language from className (e.g., "language-baml")
                const match = /language-(\w+)/.exec(className || '');
                let lang = 'text';
                if (match?.[1]) {
                  lang = match[1];
                } else {
                  console.log('No language found for code block:', className);
                }

                // Map common language names
                const langMap: Record<string, string> = {
                  baml: 'baml',
                  'baml-jinja': 'baml-jinja',
                  js: 'javascript',
                  py: 'python',
                  rs: 'rust',
                  ts: 'typescript',
                };

                const mappedLang = langMap[lang] || lang;
                const codeString = String(children).replace(/\n$/, '');

                try {
                  const html = highlighter.codeToHtml(codeString, {
                    lang: mappedLang,
                    theme: 'github-light',
                  });

                  return (
                    <div
                      className="learn-baml-code-block"
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: we're using a trusted source
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  );
                } catch (e) {
                  // Fallback if highlighting fails
                  return (
                    <div className="learn-baml-code-block">
                      <pre>
                        <code>{children}</code>
                      </pre>
                    </div>
                  );
                }
              },
              h1: ({ children }) => {
                const text = String(children);
                const id = text.toLowerCase().replace(/\s+/g, '-');
                return (
                  <h1 className="learn-baml-h1" id={id}>
                    {children}
                  </h1>
                );
              },
              h2: ({ children }) => {
                const text = String(children);
                const id = text.toLowerCase().replace(/\s+/g, '-');
                return (
                  <h2 className="learn-baml-h2" id={id}>
                    {children}
                  </h2>
                );
              },
              h3: ({ children }) => (
                <h3 className="learn-baml-h3">{children}</h3>
              ),
              hr: () => <div className="learn-baml-separator" />,
              li: ({ children }) => (
                <li className="learn-baml-list-item">{children}</li>
              ),
              p: ({ children }) => <p className="learn-baml-p">{children}</p>,
              pre: ({ children }) => <>{children}</>,
              ul: ({ children }) => (
                <ul className="learn-baml-list">{children}</ul>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
