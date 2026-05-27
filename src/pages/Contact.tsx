import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve all of Western New York, including Buffalo and surrounding communities.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes. Call us or send a message through the form and we'll provide a free, no-obligation quote.",
  },
  {
    q: "What services do you offer?",
    a: "Concrete work (driveways, sidewalks, patios), basement remodeling and refresh, and general contracting for residential and commercial projects.",
  },
  {
    q: "How quickly can you start a project?",
    a: "Timing depends on the season and project size. Reach out and we'll give you the soonest available start date.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, D&C Contracting is fully licensed and insured for your peace of mind.",
  },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/dylanszal9912@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
          _subject: "New quote request from D&C Contracting website",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      toast({ title: "Message sent", description: "Thanks! We'll get back to you shortly." });
      form.reset();
    } catch {
      toast({
        title: "Could not send message",
        description: "Please call us at 716-863-4913 or email dylanszal9912@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Get a Free Quote
                  <br />
                  Today
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a
                      href="mailto:dylanszal9912@gmail.com"
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      dylanszal9912@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">PHONE</h3>
                    <div className="space-y-1">
                      <a
                        href="tel:+17168634913"
                        className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                      >
                        716-863-4913
                      </a>
                      <a
                        href="tel:+17169081800"
                        className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                      >
                        716-908-1800
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">SERVICE AREA</h3>
                    <address className="text-xl not-italic">
                      WNY · Buffalo WNY · Buffalo WNY · Buffalo, NY · United States Niagara Falls, NY Niagara Falls, NY
                    </address>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">HOURS</h3>
                    <p className="text-xl">Always open</p>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-6">FOLLOW US</h3>
                    <a
                      href="https://www.facebook.com/profile.php?id=61589264420672"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-minimal text-muted-foreground mb-6">REQUEST A QUOTE</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required maxLength={100} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required maxLength={255} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" maxLength={30} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service needed</Label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="Concrete, basement remodel, etc."
                      maxLength={120}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project details</Label>
                    <Textarea id="message" name="message" rows={5} required maxLength={2000} />
                  </div>
                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Your message goes straight to our inbox. We typically reply the same day.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">FIND US</h2>
              <h3 className="text-3xl md:text-5xl font-light text-architectural mb-8">
                Serving Western
                <br />
                New York
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Based in Buffalo, NY — proudly serving homes and businesses across WNY.
              </p>
            </div>
            <div className="w-full h-[400px] overflow-hidden border border-border">
              <iframe
                title="D&C Contracting service area — Buffalo, NY"
                src="https://www.google.com/maps?q=Buffalo,NY&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-minimal text-muted-foreground mb-4">FAQ</h2>
            <h3 className="text-3xl md:text-5xl font-light text-architectural mb-12">
              Frequently Asked
              <br />
              Questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-lg">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
