import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';

export default function WhoAreWePage() {
  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative flex w-full items-center justify-center px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Who are we?
            </h1>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground">
                We hate the current DX of building agents. So we're building a <span className="text-foreground font-semibold">whole new programming language</span>! 
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Yes, we're that crazy.
              </p>
              <p className="text-lg text-muted-foreground mt-6">
                (We literally use Notion to present slides)
              </p>
            </div>
            
            {/* Team Image */}
            <div className="mt-12 w-full max-w-2xl">
              <img 
                src="/team.jpg" 
                alt="Our team" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}