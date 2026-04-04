import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="text-center max-w-md px-4">
        <p className="font-serif text-2xl text-primary mb-4">Math With Clarity</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-2">
          This page doesn't add up!
        </p>
        <p className="text-muted-foreground mb-8">
          Looks like this equation has no solution. Let's get you back to familiar territory.
        </p>
        <Button asChild size="lg">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
