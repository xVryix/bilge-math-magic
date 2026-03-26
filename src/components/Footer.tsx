import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-secondary/50 py-12">
    <div className="container mx-auto px-4 text-center">
      <Link to="/" className="font-serif text-xl text-primary">
        Math with Bilge
      </Link>
      <p className="mt-2 text-sm text-muted-foreground">
        Making math make sense, one student at a time.
      </p>
      <p className="mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Math with Bilge. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
