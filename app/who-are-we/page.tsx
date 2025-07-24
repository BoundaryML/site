import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Users, Target, Heart, Rocket, Github, Twitter, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Co-Founder & CEO",
    bio: "Former ML engineer at Google. Passionate about making AI development accessible and reliable for everyone.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 2,
    name: "Alex Rivera",
    role: "Co-Founder & CTO",
    bio: "Previously built AI infrastructure at Meta. Believes in the power of type safety for production AI systems.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Engineering",
    bio: "Open source advocate with 15+ years in developer tools. Leading our mission to build the best AI development experience.",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 4,
    name: "David Park",
    role: "Head of Product",
    bio: "Former PM at Anthropic. Focused on building products that developers love and trust for their AI applications.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Head of Developer Relations",
    bio: "Community builder and educator. Helping developers succeed with BAML through docs, tutorials, and support.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: 6,
    name: "Marcus Thompson",
    role: "Principal Engineer",
    bio: "Compiler design expert. Building the type system that makes BAML reliable and performant at scale.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

const values = [
  {
    icon: Target,
    title: "Developer First",
    description: "We build tools we'd want to use ourselves. Every decision starts with developer experience."
  },
  {
    icon: Heart,
    title: "Open Source",
    description: "We believe in building in public and empowering the community to shape the future of AI development."
  },
  {
    icon: Rocket,
    title: "Ship Fast, Learn Faster",
    description: "We iterate quickly based on user feedback. Perfect is the enemy of good enough to learn from."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our users and contributors are our greatest asset. We build together, not in isolation."
  }
];

export default function WhoAreWePage() {
  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative flex w-full items-center justify-center px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              Building the Future of AI Development
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              We're a team of engineers and researchers passionate about making AI development 
              more reliable, type-safe, and accessible to developers everywhere.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/careers">Join Our Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/boundaryml">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We started Boundary because we saw developers struggling with the complexity 
                  and unreliability of building AI applications. Every team was reinventing 
                  the wheel, dealing with the same type safety issues and runtime failures.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  BAML is our answer: a purpose-built language that brings the reliability 
                  of modern software engineering to AI development. We believe AI should be 
                  as easy to build with as any other technology.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to empower every developer to build production-ready AI 
                  applications with confidence, knowing their code is type-safe, tested, 
                  and reliable.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">BAML</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide how we build, how we work, and how we serve our community
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="p-6">
                  <value.icon className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The people behind BAML, working to make AI development better for everyone
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                        <Twitter className="h-4 w-4" />
                      </Link>
                      <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Building the Future</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate people who want to make AI development better. 
              Check out our open positions or contribute to our open source project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/boundaryml/baml">Contribute on GitHub</Link>
              </Button>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}