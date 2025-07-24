import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Play, Pause, Headphones, Mic, Clock, Calendar, ExternalLink } from 'lucide-react';

const podcastEpisodes = [
  {
    id: 1,
    episodeNumber: "EP 012",
    title: "The Future of Type-Safe AI Development",
    description: "We explore how type safety is revolutionizing AI development and making it more reliable for production use cases.",
    guest: "Dr. Sarah Mitchell",
    guestTitle: "AI Research Lead at Stanford",
    duration: "45:23",
    date: "2024-01-18",
    featured: true,
    topics: ["Type Safety", "AI Development", "Production Systems"]
  },
  {
    id: 2,
    episodeNumber: "EP 011",
    title: "Building AI Agents That Actually Work",
    description: "A deep dive into creating reliable AI agents using BAML, with real-world examples from production deployments.",
    guest: "Alex Chen",
    guestTitle: "CTO at TechFlow",
    duration: "38:45",
    date: "2024-01-11",
    featured: false,
    topics: ["AI Agents", "Production", "Best Practices"]
  },
  {
    id: 3,
    episodeNumber: "EP 010",
    title: "From Prototype to Production: AI Scaling Strategies",
    description: "Learn how companies are taking AI from proof of concept to production scale with proper infrastructure and tooling.",
    guest: "Maria Rodriguez",
    guestTitle: "VP Engineering at CloudScale",
    duration: "42:18",
    date: "2024-01-04",
    featured: false,
    topics: ["Scaling", "Infrastructure", "DevOps"]
  },
  {
    id: 4,
    episodeNumber: "EP 009",
    title: "The Economics of AI Development",
    description: "Understanding the cost structures and ROI of building AI applications, and how to optimize for efficiency.",
    guest: "David Park",
    guestTitle: "Founder of AI Economics Institute",
    duration: "51:07",
    date: "2023-12-28",
    featured: false,
    topics: ["Economics", "ROI", "Cost Optimization"]
  },
  {
    id: 5,
    episodeNumber: "EP 008",
    title: "Security and Privacy in AI Applications",
    description: "Essential security considerations when building AI applications, from data privacy to prompt injection prevention.",
    guest: "Lisa Thompson",
    guestTitle: "Security Architect at SecureAI",
    duration: "47:32",
    date: "2023-12-21",
    featured: false,
    topics: ["Security", "Privacy", "Compliance"]
  },
  {
    id: 6,
    episodeNumber: "EP 007",
    title: "Open Source AI: Building in Public",
    description: "The importance of open source in AI development and how the community is shaping the future of AI tools.",
    guest: "James Wilson",
    guestTitle: "Open Source Advocate",
    duration: "36:54",
    date: "2023-12-14",
    featured: false,
    topics: ["Open Source", "Community", "Collaboration"]
  }
];

const podcastPlatforms = [
  { name: "Apple Podcasts", icon: "🎵", url: "#" },
  { name: "Spotify", icon: "🎧", url: "#" },
  { name: "Google Podcasts", icon: "📻", url: "#" },
  { name: "RSS Feed", icon: "📡", url: "#" }
];

export default function PodcastPage() {
  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative flex w-full items-center justify-center px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium">
              <Mic className="h-4 w-4" />
              Podcast
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              AI That Works Podcast
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Conversations about practical AI implementation and real-world applications. 
              Join us as we explore how teams are building production-ready AI systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {podcastPlatforms.map((platform) => (
                <Button key={platform.name} variant="outline" asChild>
                  <Link href={platform.url} className="flex items-center gap-2">
                    <span>{platform.icon}</span>
                    {platform.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Episode */}
        <section className="w-full px-4 py-12">
          <div className="mx-auto max-w-6xl">
            {podcastEpisodes.filter(ep => ep.featured).map(episode => (
              <Card key={episode.id} className="overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      LATEST EPISODE
                    </span>
                    <span className="text-sm text-muted-foreground">{episode.episodeNumber}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{episode.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{episode.description}</p>
                  
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Guest</p>
                      <p className="font-semibold">{episode.guest}</p>
                      <p className="text-sm text-muted-foreground">{episode.guestTitle}</p>
                    </div>
                    <div className="flex gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Duration</p>
                        <p className="font-semibold flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {episode.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Released</p>
                        <p className="font-semibold flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(episode.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {episode.topics.map((topic) => (
                      <span key={topic} className="text-sm bg-muted px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg" className="gap-2">
                      <Play className="h-4 w-4" />
                      Play Episode
                    </Button>
                    <Button size="lg" variant="outline">
                      Show Notes
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Episodes List */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">All Episodes</h2>
            <div className="space-y-6">
              {podcastEpisodes.filter(ep => !ep.featured).map(episode => (
                <Card key={episode.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-muted-foreground">
                          {episode.episodeNumber}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(episode.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {episode.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                      <p className="text-muted-foreground mb-4">{episode.description}</p>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-sm">
                            <span className="text-muted-foreground">with</span>{' '}
                            <span className="font-medium">{episode.guest}</span>
                          </p>
                          <p className="text-sm text-muted-foreground">{episode.guestTitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 md:justify-center">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Play className="h-4 w-4" />
                        Play
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Notes
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <Headphones className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Never Miss an Episode</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to AI That Works on your favorite podcast platform and get notified 
              when new episodes are released.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {podcastPlatforms.map((platform) => (
                <Button key={platform.name} asChild>
                  <Link href={platform.url} className="flex items-center gap-2">
                    <span>{platform.icon}</span>
                    Subscribe on {platform.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}