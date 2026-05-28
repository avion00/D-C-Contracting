import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const explore = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  // { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      {/* CTA band */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-14">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-minimal text-amber-600 dark:text-amber-400 mb-3">Get started</p>
              <h3 className="text-3xl md:text-4xl font-light text-architectural">
                Ready to build something{" "}
                <span className="font-serif italic text-amber-600 dark:text-amber-400">great?</span>
              </h3>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-amber-500 dark:bg-amber-400 text-black px-8 py-4 text-[11px] tracking-[0.18em] uppercase font-bold hover:bg-amber-400 dark:hover:bg-amber-300 transition-all duration-300 shrink-0"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block" aria-label="D&C Contracting - Home">
              <img
                src={logo}
                alt="D&C Contracting"
                className="h-16 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Professional construction, renovation, remodeling, and contracting services built on
              quality workmanship you can trust.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61589264420672"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow D&C Contracting on Facebook"
              className="inline-flex items-center justify-center w-10 h-10 border border-border text-foreground hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-400 transition-colors duration-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="text-minimal text-muted-foreground mb-5">Explore</h4>
            <ul className="space-y-3.5">
              {explore.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block text-foreground hover:text-amber-600 dark:hover:text-amber-400 hover:translate-x-1 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-minimal text-muted-foreground mb-5">Get in touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2.5">
                  <a
                    href="tel:+17168634913"
                    className="text-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
                  >
                    716-863-4913
                  </a>
                  <span className="text-border">·</span>
                  <a
                    href="tel:+17169081800"
                    className="text-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
                  >
                    716-908-1800
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <a
                  href="mailto:dylanszal9912@gmail.com"
                  className="text-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 break-all"
                >
                  dylanszal9912@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-amber-500 dark:text-amber-400 shrink-0 mt-1" />
                <span className="text-muted-foreground">Buffalo, NY &amp; all of Western New York</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-minimal text-muted-foreground">
              © {new Date().getFullYear()} D&amp;C Contracting. All rights reserved.
            </p>
            <p className="text-minimal text-muted-foreground">
              Quality · Trust · Craftsmanship
            </p>
          </div>
          <div className="max-w-7xl mx-auto mt-5 text-center">
            <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground/60">
              Developed by{" "}
              <a
                href="https://autostacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300 font-medium"
              >
                Autostacks
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
