import FadeIn from "@/components/FadeIn";

const tags = ["Grades 3–7", "Pre-Algebra", "Elementary Math", "Online via Google Meet"];

const About = () => (
  <div className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl text-foreground">About Me</h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
          <p>
            Hi! My name is Bilge, and I'm a 13-year-old math tutor. I know what you might be
            thinking — "a 13-year-old tutor?" But hear me out, because my age is actually one of
            the best things I bring to the table.
          </p>
          <p>
            I remember exactly what it felt like to stare at a math problem and feel completely
            lost. That frustration, the feeling that everyone else gets it except you — I've been
            there. And because those memories are still fresh, I'm able to meet my students where
            they are with real patience and understanding.
          </p>
          <p>
            I'm currently studying algebra and geometry, and I specialize in tutoring students in
            grades 3 through 7. I cover everything from basic arithmetic and fractions to
            pre-algebra foundations. My teaching style is all about making math feel approachable
            — I never just give answers. Instead, I guide students step by step until that
            lightbulb moment happens.
          </p>
          <p>
            Every session happens online via Google Meet, which means your child can learn from the
            comfort of home. I use interactive whiteboards and tools like Desmos to make lessons
            visual and engaging.
          </p>
          <p>
            I genuinely love math and I genuinely love helping younger students discover that they
            can love it too. If you're looking for a tutor who's relatable, patient, and passionate
            — I'd love to work with your child.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
    </div>
  </div>
);

export default About;
