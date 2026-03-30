import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";

const BookFreeSession = () => {
  const [form, setForm] = useState({ name: "", email: "", grade: "", struggles: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Free Intro Session Request — Math with Bilge");
    const body = encodeURIComponent(
      `Parent Name: ${form.name}\nEmail: ${form.email}\nChild's Grade: ${form.grade}\nWhat they're struggling with: ${form.struggles}\nPreferred Day/Time: ${form.time}`
    );
    window.location.href = `mailto:mypulum@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening your email client — send the message to book your free session!");
    setForm({ name: "", email: "", grade: "", struggles: "", time: "" });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl text-foreground">Book Your Free Intro Session</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Let's meet and see if we're a great fit. The first session is always free — no commitment, no pressure. Just fill out the form below and I'll get back to you within 24 hours.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
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
              Book My Free Session
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              I'll respond within 24 hours to confirm a time that works for you.
            </p>

            <p className="text-center text-xs text-muted-foreground mt-2">
              Already a student?{" "}
              <a href="/review" className="text-primary hover:underline font-medium">Leave a review</a>{" "}
              — it really helps!
            </p>
          </form>
        </FadeIn>
      </div>
    </div>
  );
};

export default BookFreeSession;
