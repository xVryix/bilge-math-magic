import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, CalendarCheck, Monitor, TrendingUp, Heart, ShieldCheck, FileText, Clock, CheckCircle, Users } from "lucide-react";
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

const trustSignals = [
  { icon: FileText, text: "Session recap sent to parents after every lesson" },
  { icon: ShieldCheck, text: "Parents welcome to sit in on any session" },
  { icon: Clock, text: "No long-term commitment — book as you go" },
  { icon: Heart, text: "Free intro session, no pressure" },
];

const milestones = [
  { session: "After Session 1", result: "We identify exactly where your child is struggling and build a personalized plan." },
  { session: "After Session 2–3", result: "Your child starts to recognize patterns and attempt problems independently." },
  { session: "After Session 4", result: "Parents typically report improved confidence, better homework habits, and less math anxiety." },
];

const stats = [
  { number: "50+", label: "Sessions Delivered", showStars: false },
  { number: "20+", label: "Students Helped", showStars: false },
  { number: "5.0", label: "Average Rating", showStars: true },
  { number: "100%", label: "Satisfaction Rate", showStars: false },
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="py-20 md:py-32 bg-primary-light">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <FadeIn>
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-4">
            Trusted by parents of 3rd–7th graders
          </p>
          <h1 className="text-4xl md:text-6xl text-foreground leading-tight">
            Math finally makes sense.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Online 1-on-1 math tutoring in a safe, supportive space — patient, relatable, and built around your child's unique needs.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Button asChild size="lg" className="mt-8 text-base px-8">
            <Link to="/book-free-session">Book a free intro session</Link>
          </Button>
        </FadeIn>
      </div>
    </section>

    {/* Social Proof Stats */}
    <section className="py-10 border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={0.05 * (i + 1)}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Trust Signals */}
    <section className="py-12 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {trustSignals.map((signal, i) => (
            <FadeIn key={i} delay={0.05 * (i + 1)}>
              <div className="flex flex-col items-center text-center gap-2">
                <signal.icon className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground leading-snug">{signal.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
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
              <div className="text-center p-6 rounded-lg transition-shadow duration-300 hover:shadow-md">
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

    {/* Why a Young Tutor */}
    <section className="py-20 bg-primary-light">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center text-foreground">Why a young tutor?</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-8 space-y-5 text-center">
            <p className="text-muted-foreground leading-relaxed text-lg">
              As a 13-year-old student, I remember exactly what it feels like to stare at a math problem and feel completely lost. That memory makes me more patient, more empathetic, and more creative in how I teach.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I've experienced firsthand how much a teacher's approach matters. In 6th grade, my math class was all about assignments — one after another — with very little explanation. I had an 80 in the class and felt like I was falling behind. Now in 8th grade, my teacher takes the time to break things down and make sure every student truly understands the material. That shift brought my grade up to a 96 — and completely changed how I feel about math. That experience is exactly why I tutor the way I do: with patience, clarity, and a focus on real understanding.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Kids open up to someone closer to their age. There's no intimidation — just a relatable mentor who speaks their language and genuinely loves math.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.25}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Relatable & patient", "No intimidation", "Recent learner perspective", "Genuinely passionate"].map((tag) => (
              <span key={tag} className="bg-card border text-foreground text-sm px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Progress / Results */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl text-center text-foreground">What to expect</h2>
          <p className="mt-3 text-center text-muted-foreground">
            Real progress parents can see — session by session.
          </p>
        </FadeIn>
        <div className="mt-12 space-y-6">
          {milestones.map((m, i) => (
            <FadeIn key={i} delay={0.1 * (i + 1)}>
              <div className="flex gap-4 items-start p-5 rounded-lg border bg-card transition-shadow duration-300 hover:shadow-md">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground">{m.session}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.result}</p>
                </div>
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
              <div className="bg-card p-6 rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
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

    {/* Final CTA */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl text-foreground">Ready to give it a try?</h2>
          <p className="mt-3 text-muted-foreground">
            The first session is always free. No commitment, no pressure — just math.
          </p>
          <Button asChild size="lg" className="mt-6 text-base px-8">
            <Link to="/book-free-session">Book your free intro session</Link>
          </Button>
        </FadeIn>
      </div>
    </section>

    {/* Sticky Mobile CTA */}
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t p-3">
      <Button asChild className="w-full" size="lg">
        <Link to="/book-free-session">Book Free Session</Link>
      </Button>
    </div>
  </div>
);

export default Home;
