import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Clock, HelpCircle } from "lucide-react";
import { toast } from "sonner";
import FadeIn from "@/components/FadeIn";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Question from Math with Bilge website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:mypulum@gmail.com?subject=${subject}&body=${body}`;

    toast.success("Opening your email client — send the message to reach me!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl text-foreground">Have a Question?</h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Whether it's about scheduling, pricing, or how sessions work — I'm happy to help.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form — left/main column */}
          <FadeIn delay={0.1}>
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
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
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What would you like to know?"
                    className="mt-1"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Sidebar — right column */}
          <FadeIn delay={0.2}>
            <div className="md:col-span-2 space-y-6">
              {/* Direct email */}
              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Email Directly</h3>
                </div>
                <a href="mailto:mypulum@gmail.com" className="text-sm text-primary hover:underline font-medium">
                  mypulum@gmail.com
                </a>
              </div>

              {/* Availability */}
              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Availability</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Tuesdays & Thursdays: 6–8 PM</li>
                  <li>Weekends: Anytime</li>
                </ul>
              </div>

              {/* FAQ link */}
              <div className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Common Questions?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Your question might already be answered.
                </p>
                <Link to="/faq" className="text-sm text-primary hover:underline font-medium">
                  Check the FAQ →
                </Link>
              </div>

              {/* Book CTA */}
              <div className="rounded-lg bg-primary-light p-5 text-center">
                <p className="text-sm text-foreground font-medium mb-3">
                  Ready to get started instead?
                </p>
                <Button asChild size="sm">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
