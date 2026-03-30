import { Check, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const plans = [
  { name: "Single Session", price: "$20", per: "per session", features: ["1 hour on Google Meet", "Session recap for parents", "Interactive whiteboard"], popular: false },
  { name: "4-Session Bundle", price: "$72", per: "save $8", features: ["4 × 1-hour sessions", "Session recaps for parents", "Interactive whiteboard", "Flexible scheduling"], popular: true },
  { name: "8-Session Bundle", price: "$136", per: "save $24", features: ["8 × 1-hour sessions", "Session recaps for parents", "Interactive whiteboard", "Flexible scheduling", "Priority booking"], popular: false },
];

const Pricing = () => (
  <div className="py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl text-foreground text-center">Simple, Honest Pricing</h1>
        <p className="mt-4 text-muted-foreground text-lg text-center max-w-2xl mx-auto">
          All sessions are 1 hour via Google Meet. Payment accepted through PayPal or Venmo.
        </p>
      </FadeIn>

      {/* Solo Plans */}
      <FadeIn delay={0.05}>
        <h2 className="mt-14 text-2xl md:text-3xl text-foreground text-center">1-on-1 Sessions</h2>
      </FadeIn>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <FadeIn key={i} delay={0.1 * (i + 1)}>
            <div
              className={`relative rounded-lg border p-8 bg-card flex flex-col ${
                plan.popular ? "border-primary border-2 shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl text-foreground">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold font-sans text-foreground">{plan.price}</span>
                <span className="ml-2 text-sm text-muted-foreground">{plan.per}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full" variant={plan.popular ? "default" : "outline"}>
                <Link to={`/book/${plan.slug}`}>Get Started</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Group Session */}
      <FadeIn delay={0.45}>
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl text-foreground text-center">Group Sessions</h2>
          <p className="mt-2 text-muted-foreground text-center max-w-xl mx-auto text-sm">
            Exclusive to students who have completed at least one solo session.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.55}>
        <div className="mt-8 max-w-md mx-auto relative">
          <div className="relative rounded-lg border-2 border-dashed border-border p-8 bg-card flex flex-col items-center text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
              Coming Soon
            </span>
            <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl text-foreground">Group Session</h3>
            <div className="mt-3">
              <span className="text-4xl font-bold font-sans text-foreground">$15</span>
              <span className="ml-2 text-sm text-muted-foreground">per person</span>
            </div>
            <ul className="mt-6 space-y-3 text-left w-full">
              {[
                "1 hour on Google Meet",
                "Up to 4 students per group",
                "Interactive whiteboard",
                "Collaborative problem-solving",
                "Better value than solo sessions",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5" />
              <span>Available only to returning students</span>
            </div>
            <Button disabled className="mt-6 w-full cursor-not-allowed opacity-60">
              Coming Soon
            </Button>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.65}>
        <div className="mt-12 text-center p-6 rounded-lg bg-primary-light">
          <p className="text-foreground font-medium">
            🎉 Your first intro session is always free — no commitment, no pressure.
          </p>
          <Button asChild size="sm" className="mt-3">
            <Link to="/contact">Book Your Free Intro</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default Pricing;
