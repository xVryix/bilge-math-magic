import { Check } from "lucide-react";
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

      <div className="mt-14 grid md:grid-cols-3 gap-6">
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
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
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
