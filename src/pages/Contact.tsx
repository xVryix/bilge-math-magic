import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", grade: "", struggles: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Contact from Math with Bilge");
    const body = encodeURIComponent(
      `Parent Name: ${form.name}\nEmail: ${form.email}\nChild's Grade: ${form.grade}\nStruggles: ${form.struggles}\nPreferred Day/Time: ${form.time}`
    );
    window.location.href = `mailto:mypulum@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening your email client — send the message to complete your inquiry!");
    setForm({ name: "", email: "", grade: "", struggles: "", time: "" });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl text-foreground">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Fill out the form below and I'll respond within 24 hours.
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
                placeholder="e.g., Tuesdays at 4pm"
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Send Message
            </Button>
          </form>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Or email me directly at{" "}
              <a href="mailto:mypulum@gmail.com" className="text-primary hover:underline font-medium">
                mypulum@gmail.com
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
