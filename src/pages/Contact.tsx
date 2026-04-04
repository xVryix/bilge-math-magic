import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FadeIn from "@/components/FadeIn";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", grade: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-inquiry",
          recipientEmail: "mathwithclaritytutors@gmail.com",
          idempotencyKey: `contact-${id}`,
          templateData: { name: form.name, email: form.email, grade: form.grade, message: form.message },
        },
      });

      if (error) throw error;
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", grade: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl text-foreground">Have a Question?</h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Whether it's about scheduling, pricing, or how sessions work — I'm happy to help. Send me a message and I'll get back to you within 24 hours.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Before reaching out, you might find your answer on the{" "}
            <Link to="/faq" className="text-primary hover:underline font-medium">FAQ page</Link>.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground">Your Name</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Child's Grade</label>
              <Select value={form.grade} onValueChange={(val) => setForm({ ...form, grade: val })}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3rd">3rd Grade</SelectItem>
                  <SelectItem value="4th">4th Grade</SelectItem>
                  <SelectItem value="5th">5th Grade</SelectItem>
                  <SelectItem value="6th">6th Grade</SelectItem>
                  <SelectItem value="7th">7th Grade</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What would you like to know?" className="mt-1" rows={5} />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-10 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>Or email me directly at{" "}
                <a href="mailto:mathwithclaritytutors@gmail.com" className="text-primary hover:underline font-medium">
                  mathwithclaritytutors@gmail.com
                </a>
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Looking to book a session? Head to the{" "}
              <Link to="/pricing" className="text-primary hover:underline font-medium">Pricing page</Link>{" "}
              to get started.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
