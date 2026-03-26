import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, CalendarCheck, Monitor, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const steps = [
  { icon: CalendarCheck, title: "Book a free intro", desc: "Schedule a no-pressure intro session so we can meet and talk about your child's needs." },
  { icon: Monitor, title: "We meet on Google Meet", desc: "Sessions happen live on Google Meet with an interactive whiteboard — visual, engaging, and fun." },
  { icon: TrendingUp, title: "Your child builds confidence", desc: "With patient guidance and regular practice, your child starts to truly understand math." },
];

const testimonials = [
  { name: "Sarah M.", text: "Bilge is incredibly patient and explains things in a way my daughter actually understands. Her grades have gone up a full letter since we started!", stars: 5 },
  { name: "David L.", text: "We were skeptical at first, but Bilge's enthusiasm is contagious. My son now actually looks forward to math practice.", stars: 5 },
  { name: "Jessica T.", text: "The recap notes after each session are so helpful. I always know exactly what they worked on and what to practice next.", stars: 5 },
  { name: "Michael R.", text: "Bilge connects with kids on their level — something most tutors can't do. My daughter went from crying over homework to solving problems on her own.", stars: 5 },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="py-20 md:py-32 bg-primary-light">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl text-foreground leading-tight">
            Math finally makes sense.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Online 1-on-1 math tutoring for grades 3–7. Patient, relatable, and built around your child's unique needs.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Button asChild size="lg" className="mt-8 text-base px-8">
            <Link to="/contact">Book a free intro session</Link>
          </Button>
        </FadeIn>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center text-foreground">How it works</h2>
        </FadeIn>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center text-foreground">What parents are saying</h2>
        </FadeIn>
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">"{t.text}"</p>
                <p className="mt-3 text-sm font-semibold text-foreground">— {t.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;
