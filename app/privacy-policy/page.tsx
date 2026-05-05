import fs from 'node:fs';
import path from 'node:path';
import { FooterSection } from '@/components/footer-section';
import { Navbar } from '@/components/navbar';

export default function PrivacyPolicyPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'public', 'privacy.html'),
    'utf8',
  );

  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        <section className="w-full px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div
              className="prose prose-gray dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
        <FooterSection />
      </main>
    </div>
  );
}
