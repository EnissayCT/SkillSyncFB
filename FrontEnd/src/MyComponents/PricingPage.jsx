"use client"

import { useState } from "react"
import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups",
      price: billingCycle === "monthly" ? 49 : 39,
      features: [
        "Up to 50 resume scans per month",
        "Basic candidate ranking",
        "Job specification templates",
        "Email notifications",
        "1 team member",
      ],
      limitations: ["No AI-powered insights", "No custom ranking criteria", "No API access"],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      description: "Ideal for growing recruitment teams",
      price: billingCycle === "monthly" ? 99 : 79,
      features: [
        "Up to 200 resume scans per month",
        "Advanced candidate ranking",
        "Custom job specification builder",
        "AI-powered insights",
        "Resume parsing and data extraction",
        "Up to 5 team members",
        "Priority support",
      ],
      limitations: ["Limited API access"],
      popular: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: billingCycle === "monthly" ? 249 : 199,
      features: [
        "Unlimited resume scans",
        "Advanced AI candidate matching",
        "Custom ranking algorithms",
        "Full API access",
        "Dedicated account manager",
        "Unlimited team members",
        "White-labeling options",
        "Advanced analytics and reporting",
        "Custom integrations",
      ],
      limitations: [],
      popular: false,
      buttonText: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply at the start of your next billing cycle.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial on our Professional plan so you can experience all the features before committing.",
    },
    {
      question: "What happens if I exceed my monthly resume scan limit?",
      answer:
        "If you reach your monthly limit, you can purchase additional scans or upgrade to a higher tier plan. We'll notify you when you're approaching your limit.",
    },
    {
      question: "Can I get a custom plan for my specific needs?",
      answer:
        "Contact our sales team for custom pricing and features tailored to your organization's specific requirements.",
    },
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan to streamline your recruitment process and find the best candidates faster.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <Tabs
          defaultValue="monthly"
          className="w-[300px]"
          onValueChange={(value) => setBillingCycle(value)}
        >
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annually">
              Annually
              <Badge variant="outline" className="ml-2 bg-primary/10 text-primary text-xs">
                Save 20%
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`flex flex-col h-full border-2 ${plan.popular ? "border-primary" : "border-border"}`}
          >
            <CardHeader>
              {plan.popular && (
                <Badge className="w-fit mb-2" variant="default">
                  Most Popular
                </Badge>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground ml-1">
                  /{billingCycle === "monthly" ? "month" : "month, billed annually"}
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium">What's included:</h4>
                <ul className="space-y-2.5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Limitations:</h4>
                    <ul className="space-y-2.5">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="flex items-start">
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Feature Comparison */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-6 font-medium">Feature</th>
                {pricingPlans.map((plan, index) => (
                  <th key={index} className="text-center py-4 px-6 font-medium">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Resume Scans</td>
                <td className="text-center py-4 px-6">50/month</td>
                <td className="text-center py-4 px-6">200/month</td>
                <td className="text-center py-4 px-6">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">
                  <div className="flex items-center">
                    AI-Powered Insights
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 ml-1 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-[200px] text-sm">
                            Get AI recommendations on candidate fit and potential areas to explore during interviews
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </td>
                <td className="text-center py-4 px-6">—</td>
                <td className="text-center py-4 px-6">
                  <Check className="h-5 w-5 text-primary mx-auto" />
                </td>
                <td className="text-center py-4 px-6">
                  <Check className="h-5 w-5 text-primary mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Team Members</td>
                <td className="text-center py-4 px-6">1</td>
                <td className="text-center py-4 px-6">Up to 5</td>
                <td className="text-center py-4 px-6">Unlimited</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">API Access</td>
                <td className="text-center py-4 px-6">—</td>
                <td className="text-center py-4 px-6">Limited</td>
                <td className="text-center py-4 px-6">Full Access</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Custom Ranking Criteria</td>
                <td className="text-center py-4 px-6">—</td>
                <td className="text-center py-4 px-6">
                  <Check className="h-5 w-5 text-primary mx-auto" />
                </td>
                <td className="text-center py-4 px-6">
                  <Check className="h-5 w-5 text-primary mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Dedicated Support</td>
                <td className="text-center py-4 px-6">Email</td>
                <td className="text-center py-4 px-6">Priority</td>
                <td className="text-center py-4 px-6">Dedicated Manager</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 p-10 border border-border rounded-lg bg-muted/30">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our enterprise plan can be tailored to your specific requirements. Get in touch with our sales team to discuss
          your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Contact Sales</Button>
          <Button size="lg" variant="outline">
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  )
}

