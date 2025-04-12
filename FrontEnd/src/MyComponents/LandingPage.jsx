"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Upload, 
  FileSearch, 
  ListFilter, 
  Brain, 
  FileType, 
  Sliders, 
  Zap, 
  Link, 
  Shield, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Users, 
  Building, 
  Briefcase, 
  GraduationCap 
} from "lucide-react";

import { Button } from "@/components/ui/button";





function HeroSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Find the Right Talent Instantly with AI-Powered Resume Ranking
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                Streamline your recruitment process with our intelligent system that automatically ranks candidates
                based on your specific job requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-black hover:text-white text-gray font-medium px-8 py-6 rounded-lg text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 font-medium px-8 py-6 rounded-lg text-lg"
              >
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              {/* Trusted by Section with Images */}
              <div className="flex gap-6">
                <img src="/assets/google-logo.png" alt="Company Logo 1" className="w-12 h-12 object-contain" />
                <img src="/assets/ig-logo.webp" alt="Company Logo 2" className="w-12 h-12 object-contain" />
                <img src="/assets/vsc-logo.png" alt="Company Logo 3" className="w-12 h-12 object-contain" />
                <img src="/assets/fb-logo.webp" alt="Company Logo 4" className="w-12 h-12 object-contain" />
              </div>
              <p>Trusted by 500+ companies worldwide</p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <img
              src="/assets/Job-Interview.png"
              alt="AI Resume Ranking System"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}






function ContactSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-600 mb-8">
              Have questions about our resume ranking system? Our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Email Us</h3>
                  <p className="text-slate-600">support@SkillSync.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Call Us</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Visit Us</h3>
                  <p className="text-slate-600">123 Recruitment Ave, San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}



function CtaSection() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Recruitment Process?</h2>
            <p className="text-xl opacity-90">
              Join hundreds of companies already saving time and finding better candidates with our AI-powered resume
              ranking system.
            </p>
            <ul className="space-y-3">
              {[
                "Reduce hiring time by up to 75%",
                "Improve candidate quality and fit",
                "Eliminate unconscious bias in resume screening",
                "Scale your recruitment efforts effortlessly",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Start Ranking Resumes Now!</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-slate-500">No credit card required. Free 14-day trial.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}





function FaqSection() {
  const faqs = [
    {
      question: "How does the AI ranking system work?",
      answer:
        "Our AI system analyzes resumes by extracting key information like skills, experience, and education. It then compares this data against your job requirements to generate a relevance score for each candidate. The system continuously learns from your selections to improve future rankings.",
    },
    {
      question: "What file formats are supported for resume uploads?",
      answer:
        "We support all common resume formats including PDF, DOCX, DOC, RTF, TXT, and HTML. Our system can also parse resumes from LinkedIn profiles and other online sources.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We employ enterprise-grade security measures including encryption at rest and in transit. We're GDPR compliant and never share your data with third parties. You retain full ownership of all uploaded content.",
    },
    {
      question: "Can I integrate this with my existing ATS?",
      answer:
        "Yes, we offer seamless integration with most popular Applicant Tracking Systems. We have pre-built connectors for systems like Workday, Greenhouse, Lever, and more. Our API also allows for custom integrations with proprietary systems.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer flexible pricing plans based on your organization's size and needs. Our starter plan begins at $99/month for small teams, while enterprise solutions are custom-priced. All plans include a 14-day free trial with no credit card required.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our resume ranking system
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-primary" />,
      title: "Upload Resumes",
      description: "Recruiters upload candidate resumes in bulk or individually in any format.",
    },
    {
      icon: <FileSearch className="h-10 w-10 text-primary" />,
      title: "Set Job Criteria",
      description: "Define the ideal candidate profile with customizable job requirements.",
    },
    {
      icon: <ListFilter className="h-10 w-10 text-primary" />,
      title: "Get Ranked Results",
      description: "AI ranks and filters the best-fit candidates based on your criteria.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our AI-powered system simplifies your recruitment process in three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 h-full flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-6">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





function KeyFeatures() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI-Powered Ranking",
      description: "Our advanced AI algorithms analyze resumes to find the perfect match for your job requirements.",
    },
    {
      icon: <FileType className="h-8 w-8 text-primary" />,
      title: "Multi-Format Resume Parsing",
      description: "Support for all common file formats including PDF, DOCX, TXT, and more.",
    },
    {
      icon: <Sliders className="h-8 w-8 text-primary" />,
      title: "Customizable Job Criteria",
      description: "Define and adjust your ideal candidate profile with flexible parameters.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast & Accurate Results",
      description: "Get ranked results in seconds, not hours, with high precision matching.",
    },
    {
      icon: <Link className="h-8 w-8 text-primary" />,
      title: "Seamless ATS Integration",
      description: "Easily integrates with your existing Applicant Tracking System.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Privacy & Security",
      description: "Enterprise-grade security with GDPR compliance and data encryption.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful tools designed to transform your recruitment process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




function Testimonials() {
  const testimonials = [
    {
      quote:
        "This AI-powered resume ranking system has cut our hiring time in half. We're finding better candidates faster than ever before.",
      author: "Sarah Johnson",
      title: "HR Director",
      company: "TechGlobal Inc.",
      rating: 5,
      image: "/assets/testim-3.jpg",
    },
    {
      quote:
        "As a startup with limited resources, this tool has been a game-changer. It's like having an entire recruitment team at your fingertips.",
      author: "Michael Chen",
      title: "Founder & CEO",
      company: "InnovateLabs",
      rating: 5,
      image: "/assets/testim-1.jpg",
    },
    {
      quote:
        "The accuracy of the candidate matching is impressive. We've improved our quality of hires while reducing the time spent reviewing resumes.",
      author: "Jessica Williams",
      title: "Talent Acquisition Manager",
      company: "Enterprise Solutions",
      rating: 4,
      image: "/assets/testim-4.jpg",
    },
    {
      quote:
        "Our recruitment agency has scaled our operations thanks to this platform. We can now handle 3x more clients with the same team size.",
      author: "Robert Garcia",
      title: "Senior Recruiter",
      company: "Elite Staffing",
      rating: 5,
      image: "/assets/testim-2.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by recruiters and HR professionals worldwide.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-white rounded-xl p-8 md:p-12 shadow-lg border border-slate-200">
          <div className="flex justify-center mb-4">
            {Array.from({ length: testimonials[currentIndex].rating }, (_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-slate-700 italic text-center">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <div className="flex items-center justify-center mt-6">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].author}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary"
            />
            <div className="text-center ml-4">
              <p className="font-semibold text-slate-900">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-slate-600 text-sm">
                {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-slate-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>
  );
}






function UseCases() {
  const cases = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "HR Managers",
      description: "Streamline your internal hiring process and find the best talent within your organization.",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Startups & Enterprises",
      description: "Scale your hiring efforts regardless of your company size with customizable workflows.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Staffing Agencies",
      description: "Match candidates to client requirements faster and with greater accuracy.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Universities & Career Centers",
      description: "Help students find opportunities that match their skills and career aspirations.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who Can Benefit</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our solution is designed for various recruitment scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary/10 p-4 rounded-full inline-flex mb-6">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{useCase.title}</h3>
              <p className="text-slate-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}





export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <KeyFeatures />
      <Testimonials />
      <UseCases />
      <CtaSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}