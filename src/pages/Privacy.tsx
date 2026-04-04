import FadeIn from "@/components/FadeIn";

const Privacy = () => (
  <div className="py-20">
    <div className="container mx-auto px-4 max-w-2xl">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: April 4, 2026</p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">What We Collect</h2>
            <p>
              We collect only the information you provide through our forms: your name, email address, and your child's grade level. This information is used solely for the purpose of scheduling and delivering tutoring sessions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">How We Use Your Information</h2>
            <p>
              Your information is used to communicate with you about tutoring sessions, respond to your inquiries, and provide a personalized learning experience for your child. We do not use your data for marketing or advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">Data Sharing</h2>
            <p>
              We do not share, sell, or distribute your personal information to any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">Data Deletion</h2>
            <p>
              Parents can request that their data be deleted at any time by emailing{" "}
              <a href="mailto:mathwithclaritytutors@gmail.com" className="text-primary hover:underline font-medium">
                mathwithclaritytutors@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">Questions</h2>
            <p>
              If you have any questions about this privacy policy, please reach out to us at{" "}
              <a href="mailto:mathwithclaritytutors@gmail.com" className="text-primary hover:underline font-medium">
                mathwithclaritytutors@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default Privacy;
