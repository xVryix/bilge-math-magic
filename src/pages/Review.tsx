import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FadeIn from "@/components/FadeIn";

const ReviewPage = () => {
  const [form, setForm] = useState({ name: "", rating: 0, review: "" });
  const [hovered, setHovered] = useState(0);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) {
      toast.error("Please select a star rating before submitting.");
      return;
    }
    setSending(true);

    try {
      // Save review to database
      const { error: dbError } = await supabase.from("reviews").insert({
        name: form.name,
        rating: form.rating,
        review: form.review,
      });
      if (dbError) throw dbError;

      // Also send email notification
      const id = crypto.randomUUID();
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "review-submission",
          recipientEmail: "mathwithclaritytutors@gmail.com",
          idempotencyKey: `review-${id}`,
          templateData: { name: form.name, rating: form.rating, review: form.review },
        },
      });

      toast.success("Review submitted — thank you so much!");
      setForm({ name: "", rating: 0, review: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl text-foreground text-center">Leave a Review</h1>
          <p className="mt-4 text-muted-foreground text-lg text-center max-w-xl mx-auto">
            Your feedback means the world to me. Honest reviews help other parents find the right tutor for their child — and they help me grow as an educator.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground">Your Name</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="First name & last initial (e.g., Sarah M.)" className="mt-1" />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onMouseEnter={() => setHovered(star)} onMouseLeave={() => setHovered(0)} onClick={() => setForm({ ...form, rating: star })} className="p-1 transition-transform hover:scale-110">
                    <Star className={`w-8 h-8 transition-colors ${star <= (hovered || form.rating) ? "fill-primary text-primary" : "text-border"}`} />
                  </button>
                ))}
              </div>
              {form.rating > 0 && <p className="text-sm text-muted-foreground mt-1">{form.rating} out of 5 stars</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Your Review</label>
              <Textarea required value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })} placeholder={"How has tutoring with Math With Clarity helped your child? What changes have you noticed?"} className="mt-1" rows={5} /> onChange={(e) => setForm({ ...form, review: e.target.value })} placeholder="How has tutoring with Math With Clarity helped your child? What changes have you noticed?" className="mt-1" rows={5} /> value={form.review} onChange={(e) => setForm({ ...form, review: e.target.value })} placeholder="How has tutoring with Math With Clarity helped your child? What changes have you noticed?" className="mt-1" rows={5} /> className="mt-1" rows={5} />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={sending}>
              {sending ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-14 rounded-lg bg-primary-light p-8 text-center">
            <h2 className="text-xl md:text-2xl text-foreground">Spread the Word</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Know another family whose child could use a little extra help with math? Referrals from happy parents are the biggest compliment I can receive — and they help me reach more students who need support. If you know someone, please share my website or send them my way!
            </p>
            <p className="mt-4 text-sm font-medium text-primary">
              Every referral makes a real difference. Thank you! ❤️
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ReviewPage;
