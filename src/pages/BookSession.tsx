import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";

const planDetails: Record<string, { name: string; price: string; description: string; sessions: string }> = {
  single: {
    name: "Single Session",
    price: "$20",
    description: "One 1-hour tutoring session via Google Meet.",
    sessions: "1 session",
  },
  "4-session": {
    name: "4-Session Bundle",
    price: "$72",
    description: "Four 1-hour tutoring sessions via Google Meet. Save $8!",
    sessions: "4 sessions",
  },
  "8-session": {
    name: "8-Session Bundle",
    price: "$136",
    description: "Eight 1-hour tutoring sessions via Google Meet. Save $24!",
    sessions: "8 sessions",
  },
};

const BookSession = () => {
  const { plan } = useParams<{ plan: string }>();
  const details = planDetails[plan || ""] || planDetails.single;

  const [form, setForm] = useState({ name: "", email: "", grade: "", childName: "", interests: "", struggles: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Booking Request: ${details.name}`);
    const body = encodeURIComponent(
      `Parent Name: ${form.name}\nEmail: ${form.email}\nChild's Name: ${form.childName}\nChild's Grade: ${form.grade}\nChild's Interests/Hobbies: ${form.interests}\nStruggles: ${form.struggles}\nPreferred Day/Time: ${form.time}\nPlan: ${details.name} (${details.price})`
    );
    window.location.href = `mailto:mypulum@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening your email client — send the message to complete your booking!");
    setForm({ name: "", email: "", grade: "", struggles: "", time: "" });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <Link to="/pricing" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>

          <div className="rounded-lg border bg-card p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">{details.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{details.description}</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold font-sans text-foreground">{details.price}</span>
                <p className="text-xs text-muted-foreground">{details.sessions}</p>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl text-foreground">Book {details.name}</h1>
          <p className="mt-3 text-muted-foreground">
            Fill out the form below and I'll get back to you within 24 hours to confirm your session.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground">Parent Name</label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Child's Grade</label>
              <Select value={form.grade} onValueChange={(v) => setForm({ ...form, grade: v })}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a grade" />
                </SelectTrigger>
                <SelectContent>
                  {["3rd", "4th", "5th", "6th", "7th"].map((g) => (
                    <SelectItem key={g} value={g}>{g} Grade</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">What is your child struggling with?</label>
              <Textarea
                value={form.struggles}
                onChange={(e) => setForm({ ...form, struggles: e.target.value })}
                placeholder="e.g., fractions, word problems, math anxiety..."
                className="mt-1"
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Preferred Session Day/Time</label>
              <Input
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                placeholder="e.g., Tuesdays at 6pm"
                className="mt-1"
              />
              <p className="text-xs text-muted-foreground mt-1">
                I'm available Tuesdays & Thursdays 6–8 PM, and weekends anytime.
              </p>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Booking Request
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Payment details (PayPal or Venmo) will be provided after booking confirmation.
            </p>
          </form>
        </FadeIn>
      </div>
    </div>
  );
};

export default BookSession;
