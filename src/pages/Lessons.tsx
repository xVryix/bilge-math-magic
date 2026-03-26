import { BookOpen, MessageSquare, FileText, Presentation } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const sessionSteps = [
  { icon: MessageSquare, title: "Share what's tricky", desc: "Your child tells me what they're struggling with — whether it's homework, a specific topic, or just general confusion." },
  { icon: Presentation, title: "Work through it together", desc: "We hop on a virtual whiteboard and work through problems step by step. I guide, I don't just give answers." },
  { icon: BookOpen, title: "Build real understanding", desc: "I make sure your child actually understands the 'why' behind each concept, not just the 'how.'" },
  { icon: FileText, title: "Recap sent to parents", desc: "After every session, I send a short summary of what we covered, how it went, and what to practice next." },
];

const topics = [
  "Arithmetic (addition, subtraction, multiplication, division)",
  "Fractions and decimals",
  "Word problems",
  "Basic geometry concepts",
  "Pre-algebra foundations",
  "Building number sense and confidence",
];

const tools = ["Google Meet", "Desmos", "Interactive Online Whiteboard"];

const Lessons = () => (
  <div className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl text-foreground">What a Session Looks Like</h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
          Every session is tailored to your child. Here's the general flow:
        </p>
      </FadeIn>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {sessionSteps.map((step, i) => (
          <FadeIn key={i} delay={0.1 * (i + 1)}>
            <div className="p-6 rounded-lg border bg-card">
              <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="mt-3 text-lg text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="mt-16">
          <h2 className="text-3xl text-foreground">What I Cover</h2>
          <ul className="mt-6 space-y-3">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-3 text-foreground/80">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-16">
          <h2 className="text-3xl text-foreground">Tools We Use</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default Lessons;
