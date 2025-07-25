/* eslint-disable @next/next/no-img-element */
'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CodeBlock } from './magicui/code-block';
import { SyntaxTypingAnimation } from './magicui/syntax-typing-animation';

export function FirstBentoAnimation() {
  // Removed unused ref, isInView, showPayload, showEvent
  const [showError, setShowError] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const theme = useTheme();

  // Removed unused effect for event/payload logic

  // BAML class code
  const bamlCode = `class Resume {
  name: string
  title: string
}`;

  // TypeScript code with error (no error comment)
  const tsCode = `const resume = getResume();
console.log(resume.education);`;

  // Helper to highlight .education with a squiggly underline (only in the console.log line)
  function highlightErrorLine(code: string) {
    // Only underline the .education part in console.log(resume.education);
    return code.replace(
      /(console\.log\(resume)(\.education)(\);)/,
      '$1<span class="error-underline">$2</span>$3',
    );
  }

  // When typing is done, show error underline after a short delay
  useEffect(() => {
    if (typingDone) {
      const timeout = setTimeout(() => setShowError(true), 600);
      return () => clearTimeout(timeout);
    }
    setShowError(false);
  }, [typingDone]);

  // Removed unused event, payload

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-4 relative">
      {/* Animated background gradient for subtle effect */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-10" />

      {/* Left: BAML class */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <CodeBlock className="mb-2" filename="resume.baml">
          <SyntaxTypingAnimation
            className="min-h-[100px] text-[14px]"
            code={bamlCode}
            delay={200}
            duration={30}
            language="yaml"
          />
        </CodeBlock>
        <div className="text-xs text-muted-foreground mt-1 ml-2">
          BAML schema
        </div>
      </motion.div>

      {/* Right: TypeScript code with error underline */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <CodeBlock className="mb-2" filename="main.ts">
          <SyntaxTypingAnimation
            className="min-h-[100px] text-[14px]"
            code={tsCode}
            delay={800}
            duration={30}
            language="typescript"
            // When typing is done, trigger error underline
            onAnimationComplete={() => setTypingDone(true)}
          />
          {/* Overlay error underline after typing is done */}
          <AnimatePresence>
            {showError && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-0 right-0 top-0 pointer-events-none px-4 pt-4"
                exit={{ opacity: 0, y: 10 }}
                initial={{ opacity: 0, y: 10 }}
                style={{ zIndex: 20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Render the code with error underline */}
                <div
                  className="font-mono text-[14px] leading-relaxed text-primary"
                  // Removed unused dangerouslySetInnerHTML
                >
                  {highlightErrorLine(tsCode)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CodeBlock>
        {/* Error message below code */}
        <AnimatePresence>
          {showError && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mt-2 ml-2 text-xs text-destructive font-mono"
              exit={{ opacity: 0, y: 10 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <svg
                aria-label="Error icon"
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
              >
                <title>Error icon</title>
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 8v4m0 4h.01"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
              Property 'education' does not exist on type 'Resume'.
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-xs text-muted-foreground mt-1 ml-2">
          TypeScript
        </div>
      </motion.div>

      {/* Error underline style */}
      <style jsx>{`
        .error-underline {
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
