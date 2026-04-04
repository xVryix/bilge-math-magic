import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }

    const validate = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } }
        );
        const data = await res.json();
        if (!res.ok) {
          setStatus("invalid");
        } else if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("error");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) {
        setStatus("error");
      } else if (data?.success) {
        setStatus("success");
      } else if (data?.reason === "already_unsubscribed") {
        setStatus("already");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-lg text-center">
        <FadeIn>
          {status === "loading" && <p className="text-muted-foreground">Verifying...</p>}

          {status === "valid" && (
            <>
              <h1 className="text-3xl text-foreground mb-4">Unsubscribe</h1>
              <p className="text-muted-foreground mb-6">
                Are you sure you want to unsubscribe from Math With Clarity emails?
              </p>
              <Button onClick={handleUnsubscribe} variant="destructive" size="lg">
                Confirm Unsubscribe
              </Button>
            </>
          )}

          {status === "success" && (
            <>
              <h1 className="text-3xl text-foreground mb-4">Unsubscribed</h1>
              <p className="text-muted-foreground">
                You've been unsubscribed and won't receive any more emails from us.
              </p>
            </>
          )}

          {status === "already" && (
            <>
              <h1 className="text-3xl text-foreground mb-4">Already Unsubscribed</h1>
              <p className="text-muted-foreground">
                You've already been unsubscribed from our emails.
              </p>
            </>
          )}

          {status === "invalid" && (
            <>
              <h1 className="text-3xl text-foreground mb-4">Invalid Link</h1>
              <p className="text-muted-foreground">
                This unsubscribe link is invalid or has expired.
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <h1 className="text-3xl text-foreground mb-4">Something Went Wrong</h1>
              <p className="text-muted-foreground">
                Please try again later or contact us directly.
              </p>
            </>
          )}
        </FadeIn>
      </div>
    </div>
  );
};

export default Unsubscribe;
