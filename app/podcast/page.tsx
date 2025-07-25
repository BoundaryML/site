import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Headphones, Mic, Calendar, Code, Users } from 'lucide-react';

const podcastEpisodes = [
  {
    id: 1,
    episodeNumber: "#16",
    title: "Evaluating Prompts Across Models",
    description: "AI That Works #16 will be a super-practical deep dive into real-world examples and techniques for evaluating a single prompt against multiple models. While this is a commonly heralded use case for Evals, e.g. \"how do we know if the new model is better\" / \"how do we know if the new model breaks anything\", there's not a ton of practical examples out there for real-world use cases.",
    date: "2025-07-29",
    featured: true,
    rsvpUrl: "https://lu.ma/gnvx0iic",
    topics: ["Evaluation", "Multi-Model", "Prompts"]
  },
  {
    id: 2,
    episodeNumber: "#15",
    title: "PDFs, Multimodality, Vision Models",
    description: "Dive deep into practical PDF processing techniques for AI applications. We'll explore how to extract, parse, and leverage PDF content effectively in your AI workflows, tackling common challenges like layout preservation, table extraction, and multi-modal content handling.",
    date: "2025-07-22",
    featured: false,
    youtubeUrl: "https://youtu.be/sCScFZB4Am8",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-07-22-multimodality",
    topics: ["PDFs", "Multimodality", "Vision Models"]
  },
  {
    id: 3,
    episodeNumber: "#14",
    title: "Implementing Decaying-Resolution Memory",
    description: "Last week on #13, we did a conceptual deep dive on context engineering and memory - this week, we're going to jump right into the weeds and implement a version of Decaying-Resolution Memory that you can pick up and apply to your AI Agents today. For this episode, you'll probably want to check out episode #13 in the session listing to get caught up on DRM and why its worth building from scratch.",
    date: "2025-07-15",
    featured: false,
    youtubeUrl: "https://www.youtube.com/watch?v=CEGSDlCtI8U",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-07-15-decaying-resolution-memory",
    topics: ["Memory", "AI Agents", "Implementation"]
  },
  {
    id: 4,
    episodeNumber: "#13",
    title: "Building AI with Memory & Context",
    description: "How do we build agents that can remember past conversations and learn over time? We'll explore memory and context engineering techniques to create AI systems that maintain state across interactions.",
    date: "2025-07-08",
    featured: false,
    youtubeUrl: "https://www.youtube.com/watch?v=-doV02eh8XI",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-07-08-context-engineering",
    topics: ["Memory", "Context Engineering", "AI Agents"]
  },
  {
    id: 5,
    episodeNumber: "#12",
    title: "Boosting AI Output Quality",
    description: "This week's session was a bit meta! We explored \"Boosting AI Output Quality\" by building the very AI pipeline that generated this email from our Zoom recording. The real breakthrough: separating extraction from polishing for high-quality AI generation.",
    date: "2025-07-01",
    featured: false,
    youtubeUrl: "https://www.youtube.com/watch?v=HsElHU44xJ0",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-07-01-ai-content-pipeline-2",
    topics: ["Content Generation", "Quality", "Pipeline"]
  },
  {
    id: 6,
    episodeNumber: "#11",
    title: "Building an AI Content Pipeline",
    description: "Content creation involves a lot of manual work - uploading videos, sending emails, and other follow-up tasks that are easy to drop. We'll build an agent that integrates YouTube, email, GitHub and human-in-the-loop to fully automate the AI that Works content pipeline, handling all the repetitive work while maintaining quality.",
    date: "2025-06-24",
    featured: false,
    youtubeUrl: "https://www.youtube.com/watch?v=Xece-W7Xf48",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-06-24-ai-content-pipeline",
    topics: ["Automation", "Content Pipeline", "Integration"]
  },
  {
    id: 7,
    episodeNumber: "#10",
    title: "Entity Resolution: Extraction, Deduping, and Enriching",
    description: "Disambiguating many ways of naming the same thing (companies, skills, etc.) - from entity extraction to resolution to deduping. We'll explore breaking problems into extraction → resolution → enrichment stages, scaling with two-stage designs, and building async workflows with human-in-loop patterns for production entity resolution systems.",
    date: "2025-06-17",
    featured: false,
    youtubeUrl: "https://youtu.be/niR896pQWOQ",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-06-17-entity-extraction",
    topics: ["Entity Resolution", "Data Processing", "Production Systems"]
  },
  {
    id: 8,
    episodeNumber: "#9",
    title: "Cracking the Prompting Interview",
    description: "Ready to level up your prompting skills? Join us for a deep dive into advanced prompting techniques that separate good prompt engineers from great ones. We'll cover systematic prompt design, testing tools / inner loops, and tackle real-world prompting challenges. Perfect prep for becoming a more effective AI engineer.",
    date: "2025-06-10",
    featured: false,
    youtubeUrl: "https://youtu.be/PU2h0V-pANQ",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-06-10-cracking-the-prompting-interview",
    topics: ["Prompting", "Engineering", "Best Practices"]
  },
  {
    id: 9,
    episodeNumber: "#8",
    title: "Humans as Tools: Async Agents and Durable Execution",
    description: "Agents are great, but for the most accuracy-sensitive scenarios, we some times want a human in the loop. Today we'll discuss techniques for how to make this possible. We'll dive deep into concepts from our 4/22 session on 12-factor agents and extend them to handle asynchronous operations where agents need to contact humans for help, feedback, or approvals across a variety of channels.",
    date: "2025-06-03",
    featured: false,
    youtubeUrl: "https://youtu.be/NMhH5_ju3-I",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-06-03-humans-as-tools-async",
    topics: ["Human-in-the-Loop", "Async Agents", "Durable Execution"]
  },
  {
    id: 10,
    episodeNumber: "#7",
    title: "12-factor agents: selecting from thousands of MCP tools",
    description: "MCP is only as great as your ability to pick the right tools. We'll dive into showing how to leverage MCP servers and accurately use the right ones when only a few have actually relevant tools.",
    date: "2025-05-27",
    featured: false,
    youtubeUrl: "https://www.youtube.com/watch?v=P5wRLKF4bt8",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-05-27-mcp-with-10000-tools",
    topics: ["MCP", "Tool Selection", "12-Factor"]
  },
  {
    id: 11,
    episodeNumber: "#6",
    title: "Policy to Prompt: Evaluating w/ the Enron Emails Dataset",
    description: "One of the most common problems in AI engineering is looking at a set of policies / rules and evaluating evidence to determine if the rules were followed. In this session we'll explore turning policies into prompts and pipelines to evaluate which emails in the massive enron email dataset violated SEC and Sarbanes-Oxley regulations.",
    date: "2025-05-20",
    featured: false,
    youtubeUrl: "https://www.youtube.com/watch?v=gkekVC67iVs",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-05-20-policies-to-prompts",
    topics: ["Policy Evaluation", "Enron Dataset", "Compliance"]
  },
  {
    id: 12,
    episodeNumber: "#5",
    title: "evals evals evals",
    description: "Stay tuned for our season 2 kickoff topic on minimalist and high-performance testing/evals for LLM applications",
    date: "2025-05-13",
    featured: false,
    youtubeUrl: "https://youtu.be/-N6MajRfqYw",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-05-13-designing-evals",
    topics: ["Evaluation", "Testing", "LLM Applications"]
  },
  {
    id: 13,
    episodeNumber: "#4",
    title: "twelve factor agents",
    description: "Learn how to build production-ready AI agents using the twelve-factor methodology. we'll cover the core concepts and build a real agent from scratch.",
    date: "2025-04-22",
    featured: false,
    youtubeUrl: "https://youtu.be/yxJDyQ8v6P0",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-04-22-twelve-factor-agents",
    topics: ["12-Factor", "AI Agents", "Production"]
  },
  {
    id: 14,
    episodeNumber: "#3",
    title: "code generation with small models",
    description: "Large models can do a lot, but so can small models. we'll discuss techniques for how to leverge extremely small models for generating diffs and making changes in complete codebases.",
    date: "2025-04-15",
    featured: false,
    youtubeUrl: "https://youtu.be/KJkvYdGEnAY",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-04-15-code-generation-with-small-models",
    topics: ["Code Generation", "Small Models", "Optimization"]
  },
  {
    id: 15,
    episodeNumber: "#2",
    title: "reasoning models vs reasoning prompts",
    description: "Models can reason but you can also reason within a prompt. which technique wins out when and why? we'll find out by adding reasoning to a chat bot that generates complex cypher/sql queries.",
    date: "2025-04-08",
    featured: false,
    youtubeUrl: "https://youtu.be/D-pcKduKdYM",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-04-07-reasoning-models-vs-prompts",
    topics: ["Reasoning", "Models", "Prompts"]
  },
  {
    id: 16,
    episodeNumber: "#1",
    title: "large scale classification",
    description: "LLMs are great at classification from 5, 10, maybe even 50 categories. but how do we deal with situations when we have over 1000? perhaps its an ever changing list of categories?",
    date: "2025-03-31",
    featured: false,
    youtubeUrl: "https://youtu.be/6B7MzraQMZk",
    codeUrl: "https://github.com/hellovai/ai-that-works/tree/main/2025-03-31-large-scale-classification",
    topics: ["Classification", "Scale", "Dynamic Categories"]
  }
];

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const podcastPlatforms = [
  { name: "Event Calendar", icon: "📅", url: "https://lu.ma/baml" },
  { name: "Discord", icon: "💬", url: "https://boundaryml.com/discord" },
  { name: "GitHub", icon: "🚀", url: "https://github.com/boundaryml/baml" },
  { name: "YouTube", icon: "📺", url: "https://www.youtube.com/@boundaryml" }
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
              🦄 ai that works
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              A weekly conversation about how we can all get the most juice out of todays models 
              with <Link href="https://www.github.com/hellovai" className="underline">@hellovai</Link> & <Link href="https://www.github.com/dexhorthy" className="underline">@dexhorthy</Link>
            </p>
            <p className="text-base text-muted-foreground">
              Every <span className="font-semibold text-foreground">Tuesday</span> at{' '}
              <span className="font-semibold text-foreground">10 AM PST</span> on Zoom.{' '}
              1 hour of live code, Q&A with some prepped content to help you take your AI app from a demo to production.
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
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                          LATEST EPISODE
                        </span>
                        <span className="text-sm text-muted-foreground">{episode.episodeNumber}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">{episode.title}</h2>
                      <p className="text-base text-muted-foreground mb-4">{episode.description}</p>
                      
                      <div className="flex items-center gap-1 mb-4">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {new Date(episode.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {episode.topics.map((topic) => (
                          <span key={topic} className="text-sm bg-muted px-3 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>

                      {episode.rsvpUrl && (
                        <Button size="lg" className="gap-2" asChild>
                          <Link href={episode.rsvpUrl} target="_blank">
                            <Users className="h-4 w-4" />
                            RSVP
                          </Link>
                        </Button>
                      )}
                    </div>

                    {episode.youtubeUrl && getYouTubeVideoId(episode.youtubeUrl) && (
                      <div className="flex flex-col gap-3">
                        <Link href={episode.youtubeUrl} target="_blank" className="block rounded-lg overflow-hidden bg-black aspect-video w-full md:w-80 relative group">
                          <img
                            src={`https://img.youtube.com/vi/${getYouTubeVideoId(episode.youtubeUrl)}/0.jpg`}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                        {episode.codeUrl && (
                          <Button size="sm" variant="outline" className="gap-2 w-full" asChild>
                            <Link href={episode.codeUrl} target="_blank">
                              <Code className="h-4 w-4" />
                              View Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
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
                <Card key={episode.id} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
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
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{episode.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{episode.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {episode.topics.map((topic) => (
                          <span key={topic} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                      {episode.rsvpUrl && (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <Link href={episode.rsvpUrl} target="_blank">
                            <Users className="h-4 w-4" />
                            RSVP
                          </Link>
                        </Button>
                      )}
                    </div>
                    
                    {episode.youtubeUrl && getYouTubeVideoId(episode.youtubeUrl) && (
                      <div className="flex flex-col gap-2">
                        <Link href={episode.youtubeUrl} target="_blank" className="block rounded-lg overflow-hidden bg-black aspect-video w-64 relative group">
                          <img
                            src={`https://img.youtube.com/vi/${getYouTubeVideoId(episode.youtubeUrl)}/0.jpg`}
                            alt={episode.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                        {episode.codeUrl && (
                          <Button variant="outline" size="sm" className="gap-2 w-full" asChild>
                            <Link href={episode.codeUrl} target="_blank">
                              <Code className="h-4 w-4" />
                              View Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
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
              Join our weekly sessions and learn how to build AI that actually works in production.
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