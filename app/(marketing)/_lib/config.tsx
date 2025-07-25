import { Globe } from 'lucide-react';
import { FirstBentoAnimation } from '@/components/first-bento-animation';
import { FourthBentoAnimation } from '@/components/fourth-bento-animation';
import { SyntaxTypingAnimation } from '@/components/magicui/syntax-typing-animation';
import { SecondBentoAnimation } from '@/components/second-bento-animation';
import { ThirdBentoAnimation } from '@/components/third-bento-animation';
import { VSCodeMock } from '@/components/vscode';
import { cn } from '@/lib/utils';
// import { FirstBentoAnimation } from '@/todo/(marketing)/_components/first-bento-animation';
// import { FourthBentoAnimation } from '@/todo/(marketing)/_components/fourth-bento-animation';
// import { SecondBentoAnimation } from '@/todo/(marketing)/_components/second-bento-animation';
// import { SecurityShieldBackground } from '@/todo/(marketing)/_components/security-shield-background';
// import { ThirdBentoAnimation } from '@/todo/(marketing)/_components/third-bento-animation';
// import { FirstBentoAnimation } from '@/todo/(marketing)/_components/first-bento-animation';
// import { FourthBentoAnimation } from '@/todo/(marketing)/_components/fourth-bento-animation';
// import { SecondBentoAnimation } from '@/todo/(marketing)/_components/second-bento-animation';
// import { SecurityShieldBackground } from '@/todo/(marketing)/_components/security-shield-background';
// import { ThirdBentoAnimation } from '@/todo/(marketing)/_components/third-bento-animation';

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'p-1 py-0.5 font-medium dark:font-semibold text-secondary',
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

// Team pricing constants
export const TEAM_PRICING = {
  BASE_PRICE_MONTHLY: 25,
  BASE_PRICE_YEARLY: 20,
  DEFAULT_SEATS: 1,
  INCLUDED_SEATS: 1,
  MAX_SEATS: 50,
  PRICE_PER_SEAT_MONTHLY: 8,
  PRICE_PER_SEAT_YEARLY: 6,
} as const;

const url = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const bamlCode = `class Analysis {
  issues string[]
}

function AnalyzeCodebase(code: string) -> Analysis {
  client openai/gpt-4o
  prompt "Analyze the codebase for: {code}"
}`;

const bamlCodePython = `from baml_client import b

result = b.AnalyzeCodebase("<html>...</html>")

print(result)
`;

const bamlCodeTypescript = `import { b } from "baml_client"

const result = b.AnalyzeCodebase("<html>...</html>")

console.log(result)
`;

const bamlCodeRuby = `require "baml_client"

result = b.AnalyzeCodebase("<html>...</html>")

print(result)
`;

const bamlCodeGo = `import "baml_client"

result := b.AnalyzeCodebase("<html>...</html>")

fmt.Println(result)
`;

const bamlCodeJava = `import com.boundaryml.baml.client.BamlClient;

BamlClient b = new BamlClient();

result = b.AnalyzeCodebase("<html>...</html>")

print(result)
`;

export const siteConfig = {
  benefits: [
    {
      id: 1,
      image: '/Device-6.png',
      text: 'Build AI applications with type safety and reliability.',
    },
    {
      id: 2,
      image: '/Device-7.png',
      text: 'Generate TypeScript types automatically from your BAML schemas.',
    },
    {
      id: 3,
      image: '/Device-8.png',
      text: 'Debug faster with compile-time error checking and runtime validation.',
    },
    {
      id: 4,
      image: '/Device-1.png',
      text: 'Collaborate with your team on AI interfaces seamlessly.',
    },
  ],
  bentoSection: {
    description:
      'Build AI applications with type safety, generate TypeScript types, and validate your schemas.',
    items: [
      {
        content: <FirstBentoAnimation />,
        description:
          'Define AI interfaces with confidence. Write BAML schemas that generate TypeScript types automatically.',
        id: 1,
        title: 'Type-Safe AI Interfaces',
      },
      {
        content: <SecondBentoAnimation />,
        description:
          'Built-in support for OpenAI, Anthropic, and other AI providers. Easy to extend for custom providers.',
        id: 2,
        title: 'AI Provider Integrations',
      },
      {
        content: <ThirdBentoAnimation />,
        description:
          'Test your agents in CI/CD pipelines to ensure they are working as expected.',
        id: 3,
        title: 'Test Your Agents in CI/CD',
      },
      {
        content: <FourthBentoAnimation once={false} />,
        description:
          'Automatically retry failed requests and provide fallback responses when errors occur.',
        id: 4,
        title: 'Automatic Retry and Fallback',
      },
    ],
    title: 'Empower Your AI Development',
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        logo: 'OpenAI',
        name: 'OpenAI',
      },
      {
        id: 2,
        logo: 'Anthropic',
        name: 'Anthropic',
      },
      {
        id: 3,
        logo: 'Google',
        name: 'Google',
      },
      {
        id: 4,
        logo: 'Meta',
        name: 'Meta',
      },
    ],
  },
  cta: 'Playground',
  ctaSection: {
    backgroundImage: '/agent-cta-background.png',
    button: {
      href: '/docs/getting-started?utm_source=marketing-site&utm_medium=cta-button',
      text: 'Start Building AI Apps Today',
    },
    id: 'cta',
    subtext: 'Start building type-safe AI applications in minutes',
    title: 'Build AI Applications with Confidence',
  },
  description: 'Type-safe AI application development platform.',
  faqSection: {
    description:
      "Answers to common questions about BAML and its features. If you have any other questions, please don't hesitate to contact us.",
    faQitems: [
      {
        answer:
          'BAML is a modern AI application development platform that enables developers to build type-safe AI applications. It provides schema definition, TypeScript type generation, and runtime validation to streamline AI development.',
        id: 1,
        question: 'What is BAML?',
      },
      {
        answer:
          'BAML works by defining AI interfaces using a declarative schema language. These schemas automatically generate TypeScript types and runtime validation, ensuring type safety throughout your AI application development process.',
        id: 2,
        question: 'How does BAML work?',
      },
      {
        answer:
          'Yes, BAML is designed with security in mind. Your AI schemas and API keys are protected, and the platform provides input validation and output sanitization to ensure secure AI interactions.',
        id: 3,
        question: 'Is my data secure?',
      },
      {
        answer:
          'Simply install the BAML VS Code extension and start writing .baml files. The extension provides syntax highlighting, autocomplete, and validation to help you write correct BAML schemas.',
        id: 4,
        question: 'How do I get started with BAML in VS Code?',
      },
      {
        answer:
          'Yes, the VS Code extension and core BAML functionality are completely free to use. You can define schemas, generate types, and build AI applications at no cost. Premium features are available with paid plans.',
        id: 5,
        question: 'Is BAML free to use?',
      },
      {
        answer:
          'BAML is perfect for building AI applications that integrate with OpenAI, Anthropic, and other AI providers. It provides type-safe interfaces and automatic validation to ensure your AI interactions are reliable.',
        id: 6,
        question: 'How can I integrate with AI providers?',
      },
      {
        answer:
          'BAML supports multiple AI providers including OpenAI, Anthropic, Google, and others. You can easily define schemas for different providers and switch between them while maintaining type safety.',
        id: 7,
        question: 'Which AI providers does BAML support?',
      },
      {
        answer:
          'Yes! BAML schemas can be shared across your entire team. When team members check out the code, they automatically get access to the same BAML configuration and generated types.',
        id: 8,
        question: 'Can my entire team use the same BAML schemas?',
      },
      {
        answer:
          'Create a baml.config.json file in your repository with your BAML schemas. When team members check out the code, they automatically get access to the same configuration and generated types.',
        id: 9,
        question: 'How do I share BAML configuration with my team?',
      },
    ],
    title: 'Frequently Asked Questions',
  },
  featureSection: {
    description:
      'Discover how BAML transforms AI development in four easy steps',
    items: [
      {
        content: (
          <div>
            Yes, Cursor, Claude, already know BAML.
            <br />
            Yes, we made a whole VSCode extension for BAML.
          </div>
        ),
        id: 1,
        title: (
          <div>
            Define your{' '}
            <span className="line-through text-destructive">prompts</span>{' '}
            <span className="text-secondary">functions</span>
          </div>
        ),
        // component: (
        //   <VSCodeMock
        //     className="w-full"
        //     code={bamlCode}
        //     dark={false}
        //     filename="agent.baml"
        //     // height={650}
        //     language="TypeScript"
        //     lineNumbers
        //     showSidebar={false}
        //     showStatusBar={false}
        //   />
        // ),
        video: '/define-agents.mp4',
      },
      {
        content: (
          <div>
            Do it in VSCode, or the editor of your choice.
            <br />
            Or in CI/CD
            <br />
            <pre>baml-cli test</pre>
          </div>
        ),
        id: 2,
        title: (
          <div>
            Test your{' '}
            <span className="line-through text-destructive">prompts</span>{' '}
            <span className="text-secondary">functions</span>
          </div>
        ),
        video: '/test-agent.mp4',
      },
      {
        component: (
          <VSCodeMock
            className="w-full"
            dark={false}
            files={[
              // {
              //   code: bamlCode,
              //   filename: 'agent.baml',
              //   language: 'BAML',
              // },
              {
                code: bamlCodePython,
                filename: 'main.py',
                language: 'Python',
              },
              {
                code: bamlCodeTypescript,
                filename: 'main.ts',
                language: 'TypeScript',
              },
              {
                code: bamlCodeRuby,
                filename: 'main.rb',
                language: 'Ruby',
              },
              {
                code: bamlCodeGo,
                filename: 'main.go',
                language: 'Go',
              },
              // {
              //   code: bamlCodeJava,
              //   filename: 'Main.java',
              //   language: 'Java',
              // },
            ]}
            lineNumbers
            showSidebar={false}
            showStatusBar={false}
            showTerminal={true}
            terminalContent={
              <SyntaxTypingAnimation
                code={`{
  "endpoints": [
    "https://api.example.com/auth/login",
    "https://api.example.com/auth/logout"
  ]
}`}
                // className="text-green-400"
                delay={1000}
                duration={30}
              />
            }
            terminalHeight={200}
          />
        ),
        content:
          'Test and iterate on your prompts directly within the editor, enabling rapid experimentation and debugging.',
        id: 3,
        title: '3. Run Agent',
      },
      // {
      //   component: <IterateTestDemo />,
      //   content:
      //     'Test and iterate on your prompts directly within the editor, enabling rapid experimentation and debugging.',
      //   id: 4,
      //   title: '4. Iterate & Test',
      // },
    ],
    title: 'Complete Development Workflow',
  },
  footerLinks: [
    {
      links: [
        { id: 1, title: 'About Us', url: '/who-are-we' },
        { id: 2, title: 'Why BAML?', url: '/why-the-f-did-we-make-a-language' },
        { id: 3, title: 'Privacy Policy', url: '/privacy-policy' },
        { id: 4, title: 'Terms of Service', url: '/tos' },
      ],
      title: 'Company',
    },
    {
      links: [
        {
          id: 12,
          title: 'VS Code Extension',
          url: 'https://marketplace.visualstudio.com/items?itemName=boundaryml.baml',
        },
        {
          id: 13,
          title: 'JetBrains Plugin',
          url: 'https://plugins.jetbrains.com/plugin/24002-baml',
        },
        {
          id: 14,
          title: 'BAML CLI',
          url: '/docs/cli',
        },
      ],
      title: 'Products',
    },
    {
      links: [
        {
          id: 16,
          title: 'Changelog',
          url: 'https://github.com/boundaryml/baml/releases',
        },
        { id: 18, title: 'Docs', url: 'https://docs.boundaryml.com' },
      ],
      title: 'Resources',
    },
    // {
    //   links: [
    //     { id: 3, title: 'All Comparisons', url: '/comparisons' },
    //     { id: 4, title: 'vs LangChain', url: '/comparisons#langchain' },
    //     { id: 5, title: 'vs OpenAI SDK', url: '/comparisons#openai-sdk' },
    //     { id: 6, title: 'vs Anthropic SDK', url: '/comparisons#anthropic-sdk' },
    //     { id: 7, title: 'vs TypeScript', url: '/comparisons#typescript' },
    //     { id: 8, title: 'vs Zod', url: '/comparisons#zod' },
    //     {
    //       id: 9,
    //       title: 'vs Pydantic',
    //       url: '/comparisons#pydantic',
    //     },
    //     { id: 10, title: 'vs JSDoc', url: '/comparisons#jsdoc' },
    //     { id: 11, title: 'vs GraphQL', url: '/comparisons#graphql' },
    //   ],
    //   title: 'Compare',
    // },
    {
      links: [
        { id: 20, title: 'GitHub', url: 'https://github.com/boundaryml' },
        { id: 21, title: 'Twitter', url: 'https://twitter.com/boundaryml' },
        { id: 22, title: 'Discord', url: 'https://discord.gg/boundaryml' },
        {
          id: 23,
          title: 'LinkedIn',
          url: 'https://linkedin.com/company/boundaryml',
        },
        { id: 24, title: 'YouTube', url: 'https://youtube.com/@boundaryml' },
      ],
      title: 'Social',
    },
  ],
  growthSection: {
    description:
      'Where type safety meets AI development—designed to protect your AI applications and empower your development.',
    items: [
      {
        // content: <SecurityShieldBackground />,
        description:
          'Build AI applications without leaving your editor. Keep your focus on code while maintaining type safety throughout your AI development process.',
        id: 1,
        title: 'Seamless Workflow Integration',
      },
      {
        content: (
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_50%)] -translate-y-20">
            <Globe className="top-28" />
          </div>
        ),
        description:
          'Works with VS Code, JetBrains IDEs, Cursor, and other editors. Compatible with all major AI providers and development environments.',
        id: 2,
        title: 'Universal Compatibility',
      },
    ],
    title: 'Built for Type-Safe AI Development',
  },
  hero: {
    badge: 'Free During Beta',
    badgeIcon: <span>🔥</span>,
    badgeUrl:
      'https://boundaryml.com/docs/getting-started?utm_source=marketing-site&utm_medium=hero-cta',
    cta: {
      primary: {
        href: '/playground',
        text: 'Playground',
      },
      secondary: {
        href: '/docs',
        text: 'View Docs',
      },
    },
    description:
      'Open source toolkit for AI development. Build type-safe AI applications with your team - all with confidence and reliability.',
    title: 'Type-Safe AI Development',
  },
  keywords: [
    'AI Development',
    'Type Safety',
    'TypeScript Generation',
    'Schema Validation',
  ],
  links: {
    discord: 'https://discord.gg/boundaryml',
    email: 'hello@boundaryml.com',
    github: 'https://github.com/boundaryml',
    twitter: 'https://twitter.com/boundaryml',
  },
  name: 'BAML',
  nav: {
    links: [
      { href: '/', id: 1, name: 'Home' },
      { href: '/cloud', id: 2, name: 'Cloud' },
      { href: '/blog', id: 3, name: 'Blog' },
      { href: '/podcast', id: 4, name: 'Podcast' },
      { href: '/who-are-we', id: 5, name: 'Team' },
      // { href: '/play', id: 5, name: 'Playground' },
      // { href: '/solutions', id: 6, name: 'Solutions' },
      // { href: '/pricing', id: 7, name: 'Pricing' },
    ],
  },
  pricing: {
    description:
      'Start for free and upgrade as your team grows. No credit card required.',
    pricingItems: [
      {
        buttonColor: 'bg-accent text-primary',
        buttonText: 'Playground',
        description: 'Perfect for individual developers',
        features: [
          'CLI & Editor extension access',
          'Unlimited BAML schemas',
          'TypeScript type generation',
          'Basic schema validation',
          'Local development',
          'Single developer',
          'Open source',
          'Community support',
        ],
        href: '/docs/getting-started?utm_source=marketing-site&utm_medium=pricing-cta-free',
        isPopular: false,
        name: 'Free',
        period: 'month',
        price: '$0',
        yearlyPrice: '$0',
      },
      {
        betaFree: false,
        buttonColor: 'bg-secondary text-white',
        buttonText: 'Start Trial',
        description: 'Ideal for development teams',
        features: [
          'Advanced type generation',
          'Runtime validation',
          'Unlimited schemas',
          'Team collaboration',
          'Unlimited developers',
          'Private schemas',
          'Custom transformations',
          'Advanced validation',
          'Priority support',
          'Custom integrations',
          'Enterprise features',
        ],
        href: '/docs/getting-started?utm_source=marketing-site&utm_medium=pricing-cta-team',
        isPopular: true,
        name: 'Team',
        period: 'month',
        price: '$25',
        yearlyPrice: '$20',
      },
      {
        buttonColor: 'bg-primary text-primary-foreground',
        buttonText: 'Schedule a call',
        description: 'For large organizations with custom needs',
        features: [
          'On-premise deployment',
          'SSO & SAML integration',
          'Custom rate limits',
          'Audit logs & compliance',
          '99.9% uptime SLA',
          'Dedicated account manager',
          'Priority support',
          'Custom training & onboarding',
        ],
        href: 'https://cal.com/boundaryml/30min',
        isPopular: false,
        name: 'Enterprise',
        period: 'month',
        price: 'Custom',
        yearlyPrice: 'Custom',
      },
    ],
    title: 'Simple, transparent pricing',
  },
  quoteSection: {
    author: {
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      name: 'Sarah Chen',
      role: 'Lead Developer, TechFlow',
    },
    quote:
      'BAML has transformed our AI development process. What used to be a complex type management effort is now seamless type-safe development.',
  },
  testimonials: [
    {
      description: (
        <p>
          The AI-driven analytics from #QuantumInsights have revolutionized our
          product development cycle.
          <Highlight>
            Insights are now more accurate and faster than ever.
          </Highlight>{' '}
          A game-changer for tech companies.
        </p>
      ),
      id: '1',
      img: 'https://randomuser.me/api/portraits/men/91.jpg',
      name: 'Alex Rivera',
      role: 'CTO at InnovateTech',
    },
    {
      description: (
        <p>
          Implementing #AIStream&apos;s customer prediction model has
          drastically improved our targeting strategy.
          <Highlight>Seeing a 50% increase in conversion rates!</Highlight>{' '}
          Highly recommend their solutions.
        </p>
      ),
      id: '2',
      img: 'https://randomuser.me/api/portraits/women/12.jpg',
      name: 'Samantha Lee',
      role: 'Marketing Director at NextGen Solutions',
    },
    {
      description: (
        <p>
          As a startup, we need to move fast and stay ahead. #CodeAI&apos;s
          automated coding assistant helps us do just that.
          <Highlight>Our development speed has doubled.</Highlight> Essential
          tool for any startup.
        </p>
      ),
      id: '3',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
      name: 'Raj Patel',
      role: 'Founder & CEO at StartUp Grid',
    },
    {
      description: (
        <p>
          #VoiceGen&apos;s AI-driven voice synthesis has made creating global
          products a breeze.
          <Highlight>Localization is now seamless and efficient.</Highlight> A
          must-have for global product teams.
        </p>
      ),
      id: '4',
      img: 'https://randomuser.me/api/portraits/women/83.jpg',
      name: 'Emily Chen',
      role: 'Product Manager at Digital Wave',
    },
    {
      description: (
        <p>
          Leveraging #DataCrunch&apos;s AI for our financial models has given us
          an edge in predictive accuracy.
          <Highlight>
            Our investment strategies are now powered by real-time data
            analytics.
          </Highlight>{' '}
          Transformative for the finance industry.
        </p>
      ),
      id: '5',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Michael Brown',
      role: 'Data Scientist at FinTech Innovations',
    },
    {
      description: (
        <p>
          #LogiTech&apos;s supply chain optimization tools have drastically
          reduced our operational costs.
          <Highlight>
            Efficiency and accuracy in logistics have never been better.
          </Highlight>{' '}
        </p>
      ),
      id: '6',
      img: 'https://randomuser.me/api/portraits/women/5.jpg',
      name: 'Linda Wu',
      role: 'VP of Operations at LogiChain Solutions',
    },
    {
      description: (
        <p>
          By integrating #GreenTech&apos;s sustainable energy solutions,
          we&apos;ve seen a significant reduction in carbon footprint.
          <Highlight>
            Leading the way in eco-friendly business practices.
          </Highlight>{' '}
          Pioneering change in the industry.
        </p>
      ),
      id: '7',
      img: 'https://randomuser.me/api/portraits/men/14.jpg',
      name: 'Carlos Gomez',
      role: 'Head of R&D at EcoInnovate',
    },
    {
      description: (
        <p>
          #TrendSetter&apos;s market analysis AI has transformed how we approach
          fashion trends.
          <Highlight>
            Our campaigns are now data-driven with higher customer engagement.
          </Highlight>{' '}
          Revolutionizing fashion marketing.
        </p>
      ),
      id: '8',
      img: 'https://randomuser.me/api/portraits/women/56.jpg',
      name: 'Aisha Khan',
      role: 'Chief Marketing Officer at Fashion Forward',
    },
    {
      description: (
        <p>
          Implementing #MediCareAI in our patient care systems has improved
          patient outcomes significantly.
          <Highlight>
            Technology and healthcare working hand in hand for better health.
          </Highlight>{' '}
          A milestone in medical technology.
        </p>
      ),
      id: '9',
      img: 'https://randomuser.me/api/portraits/men/18.jpg',
      name: 'Tom Chen',
      role: 'Director of IT at HealthTech Solutions',
    },
    {
      description: (
        <p>
          #LearnSmart&apos;s AI-driven personalized learning plans have doubled
          student performance metrics.
          <Highlight>
            Education tailored to every learner&apos;s needs.
          </Highlight>{' '}
          Transforming the educational landscape.
        </p>
      ),
      id: '10',
      img: 'https://randomuser.me/api/portraits/women/73.jpg',
      name: 'Sofia Patel',
      role: 'CEO at EduTech Innovations',
    },
    {
      description: (
        <p>
          With #CyberShield&apos;s AI-powered security systems, our data
          protection levels are unmatched.
          <Highlight>Ensuring safety and trust in digital spaces.</Highlight>{' '}
          Redefining cybersecurity standards.
        </p>
      ),
      id: '11',
      img: 'https://randomuser.me/api/portraits/men/25.jpg',
      name: 'Jake Morrison',
      role: 'CTO at SecureNet Tech',
    },
    {
      description: (
        <p>
          #DesignPro&apos;s AI has streamlined our creative process, enhancing
          productivity and innovation.
          <Highlight>Bringing creativity and technology together.</Highlight> A
          game-changer for creative industries.
        </p>
      ),
      id: '12',
      img: 'https://randomuser.me/api/portraits/women/78.jpg',
      name: 'Nadia Ali',
      role: 'Product Manager at Creative Solutions',
    },
    {
      description: (
        <p>
          #VentureAI&apos;s insights into startup ecosystems have been
          invaluable for our growth and funding strategies.
          <Highlight>Empowering startups with data-driven decisions.</Highlight>{' '}
          A catalyst for startup success.
        </p>
      ),
      id: '13',
      img: 'https://randomuser.me/api/portraits/men/54.jpg',
      name: 'Omar Farooq',
      role: 'Founder at Startup Hub',
    },
  ],
  url,
};

export type SiteConfig = typeof siteConfig;
