/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { CodeBlock } from './magicui/code-block';

// Constants for better maintainability
const CODE_SNIPPETS = {
  baml: `class Resume {
  name: string
  title: string
}`,
  typescript: `const resume = getResume();
console.log(resume.education);`,
} as const;

export function FirstBentoAnimation() {
  const [showError] = useState(true);

  // Add error styling to the education property
  const renderCodeWithError = () => {
    const lines = CODE_SNIPPETS.typescript.split('\n');
    return (
      <>
        <div>{lines[0]}</div>
        <div>
          console.log(resume
          <span className="error-underline">.education</span>
          );
        </div>
      </>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 relative">
      {/* Background gradients for visual depth */}
      {/* <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-10" /> */}
      {/* <div className="pointer-events-none absolute top-0 left-0 h-20 w-full " /> */}

      {/* BAML Schema Section */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <CodeBlock className="mb-2" filename="resume.baml">
          <pre className="text-[14px] font-mono text-primary leading-relaxed p-4">
            <code>{CODE_SNIPPETS.baml}</code>
          </pre>
        </CodeBlock>
        <div className="text-xs text-muted-foreground mt-1 ml-2">
          BAML schema
        </div>
      </motion.div>

      {/* TypeScript Code Section */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <CodeBlock className="mb-2 relative" filename="main.ts">
          <pre className="text-[14px] font-mono text-primary leading-relaxed p-4">
            <code>
              {showError ? renderCodeWithError() : CODE_SNIPPETS.typescript}
            </code>
          </pre>
        </CodeBlock>

        {/* Error message */}
        <AnimatePresence>
          {showError && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-2 ml-2 text-xs text-destructive font-mono"
              exit={{ opacity: 0, y: 10 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <ErrorIcon />
              Property 'education' does not exist on type 'Resume'.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-xs text-muted-foreground mt-1 ml-2">
          TypeScript
        </div>
      </motion.div>

      {/* Error underline styles */}
      <style jsx>{`
        :global(.error-underline) {
          text-decoration: underline wavy red;
          text-underline-offset: 2px;
          font-weight: 600;
          color: #e11d48;
          background: rgba(255,0,0,0.04);
          border-radius: 2px;
          padding: 0 2px;
        }
      `}</style>
    </div>
  );
}

// Extracted error icon component for better organization
function ErrorIcon() {
  return (
    <svg
      aria-label="Error icon"
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
    >
      <title>Error icon</title>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 8v4m0 4h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}
