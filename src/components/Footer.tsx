import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/book-free-session", label: "Book Free Session" },
  { to: "/privacy", label: "Privacy Policy" },
];

const Footer = () => (
  <footer className="border-t bg-secondary/50 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 max-w-4xl mx-auto">
        <div className="text-center md:text-left">
          <Link to="/" className="font-serif text-xl text-primary">
            Math With Clarity
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Making math make sense, one student at a time.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="text-center md:text-right">
          <Link
            to="/review"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            ⭐ Leave a Review
          </Link>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Math With Clarity. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
