'use client';

import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Check, Minus, HelpCircle } from 'lucide-react';
import { siteConfig } from '@/app/(marketing)/_lib/config';
import { useState } from 'react';

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers for annual plans, and can work with procurement teams for enterprise contracts."
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start."
  },
  {
    question: "What happens when I exceed my limits?",
    answer: "We'll notify you when you're approaching limits. You can upgrade anytime, and we never shut down your service unexpectedly."
  },
  {
    question: "Do you offer discounts for startups or education?",
    answer: "Yes! We offer 50% off for qualified startups and free Team plans for educational institutions."
  },
  {
    question: "What's included in enterprise support?",
    answer: "Enterprise support includes 24/7 phone support, dedicated Slack channel, custom SLAs, and quarterly business reviews."
  }
];

const allFeatures = [
  { name: "CLI & Editor Extensions", free: true, team: true, enterprise: true },
  { name: "Unlimited BAML Schemas", free: true, team: true, enterprise: true },
  { name: "TypeScript Generation", free: true, team: true, enterprise: true },
  { name: "Basic Schema Validation", free: true, team: true, enterprise: true },
  { name: "Local Development", free: true, team: true, enterprise: true },
  { name: "Community Support", free: true, team: true, enterprise: true },
  { name: "Advanced Type Generation", free: false, team: true, enterprise: true },
  { name: "Runtime Validation", free: false, team: true, enterprise: true },
  { name: "Team Collaboration", free: false, team: true, enterprise: true },
  { name: "Private Schemas", free: false, team: true, enterprise: true },
  { name: "Custom Transformations", free: false, team: true, enterprise: true },
  { name: "Priority Support", free: false, team: true, enterprise: true },
  { name: "On-Premise Deployment", free: false, team: false, enterprise: true },
  { name: "SSO/SAML Integration", free: false, team: false, enterprise: true },
  { name: "Custom Rate Limits", free: false, team: false, enterprise: true },
  { name: "Audit Logs", free: false, team: false, enterprise: true },
  { name: "99.9% Uptime SLA", free: false, team: false, enterprise: true },
  { name: "Dedicated Account Manager", free: false, team: false, enterprise: true }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="max-w-7xl mx-auto border-x relative">
      <Navbar />
      <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
        {/* Hero Section */}
        <section className="relative flex w-full items-center justify-center px-4 py-20 md:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
              {siteConfig.pricing.title}
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              {siteConfig.pricing.description}
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center gap-4 p-1 bg-muted rounded-full">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'yearly' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {siteConfig.pricing.pricingItems.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative p-8 ${plan.isPopular ? 'border-primary shadow-lg' : ''}`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        {billingCycle === 'yearly' && plan.yearlyPrice 
                          ? plan.yearlyPrice 
                          : plan.price}
                      </span>
                      {plan.price !== 'Custom' && (
                        <span className="text-muted-foreground">
                          /{billingCycle === 'yearly' ? 'mo' : plan.period}
                        </span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && plan.price !== 'Custom' && plan.price !== '$0' && (
                      <p className="text-sm text-muted-foreground mt-1">
                        billed annually
                      </p>
                    )}
                  </div>

                  <Button 
                    asChild 
                    className={`w-full mb-8 ${
                      plan.isPopular ? 'bg-primary' : ''
                    }`}
                    variant={plan.isPopular ? 'default' : 'outline'}
                  >
                    <Link href={plan.href}>{plan.buttonText}</Link>
                  </Button>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      Everything in {plan.name === 'Free' ? 'this plan' : 'previous plans'}, plus:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                All plans include core BAML features. Choose based on your team size and needs.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 font-medium">Free</th>
                    <th className="text-center py-4 px-4 font-medium">Team</th>
                    <th className="text-center py-4 px-4 font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-4 px-4 text-sm">{feature.name}</td>
                      <td className="text-center py-4 px-4">
                        {feature.free ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {feature.team ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {feature.enterprise ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <Minus className="h-5 w-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Got questions? We've got answers.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers building reliable AI applications with BAML. 
              Start free and upgrade as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/docs/getting-started">Start Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://cal.com/boundaryml/30min">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
}