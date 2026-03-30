import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeIn from "@/components/FadeIn";

const faqs = [
  { q: "What platform do we use for sessions?", a: "All sessions happen on Google Meet. I'll send you a link before each session. We also use an interactive online whiteboard and Desmos for visual problem-solving." },
  { q: "What grades do you tutor?", a: "I specialize in grades 3 through 7, covering everything from basic arithmetic to pre-algebra foundations." },
  { q: "How do I pay?", a: "Payment is accepted through PayPal or Venmo. I'll send you payment details after you book your sessions." },
  { q: "How long are sessions?", a: "Each session is 1 hour. This gives us enough time to review concepts, work through problems, and make real progress without feeling rushed." },
  { q: "What if my child needs to cancel or reschedule?", a: "No problem! Just let me know at least 24 hours in advance and we'll find a new time that works. Life happens — I totally understand." },
  { q: "Do you assign homework between sessions?", a: "I can suggest optional practice problems if the parent and student want it, but I never assign mandatory homework. The goal is to build confidence, not add stress." },
  { q: "How quickly will my child see improvement?", a: "Every child is different, but most students start feeling more confident within the first 3–4 sessions. Consistent practice and regular sessions make the biggest difference." },
  { q: "What if my child doesn't connect with the tutor?", a: "That's exactly what the free intro session is for! We'll meet, work through a problem or two, and see if it's a good fit. There's absolutely no pressure." },
  { q: "Are you available on weekends?", a: "Yes! I'm available on both weekdays and weekends. We'll find a time that fits your family's schedule." },
  { q: "What is the free intro session?", a: "It's a no-commitment 30-minute session where I meet your child, learn about what they're working on, and do a little math together. It's a great way to see if we're a good fit." },
  { q: "What devices does my child need?", a: "Any computer, tablet, or Chromebook with a webcam and internet connection works. A laptop or desktop is ideal so your child can easily see the whiteboard." },
  { q: "Can I sit in on the session?", a: "Absolutely! Parents are welcome to sit in on any session. Some parents like to observe, and others prefer to let their child work independently — both are totally fine." },
  { q: "When are you available?", a: "I'm available for sessions on Tuesdays and Thursdays from 6:00 to 8:00 PM, as well as weekends at any time. To find a slot that works best for your family, just reach out via the contact form or email and we'll coordinate scheduling together." },
];

const FAQ = () => (
  <div className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl text-foreground">Frequently Asked Questions</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Got questions? I've got answers.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground font-sans font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  </div>
);

export default FAQ;
