import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="D&C Contracting - Home">
              <img
                src={logo}
                alt="D&C Contracting"
                className="h-20 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Professional construction, renovation, remodeling, and contracting
              services built on quality workmanship you can trust.
            </p>
          </div>

          <div>
            <h4 className="text-minimal text-muted-foreground mb-4">EXPLORE</h4>
            <ul className="space-y-3">
              <li><Link to="/work" className="text-foreground hover:text-muted-foreground transition-colors duration-300">Work</Link></li>
              <li><Link to="/services" className="text-foreground hover:text-muted-foreground transition-colors duration-300">Services</Link></li>
              <li><Link to="/about" className="text-foreground hover:text-muted-foreground transition-colors duration-300">About</Link></li>
              <li><Link to="/blog" className="text-foreground hover:text-muted-foreground transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="text-foreground hover:text-muted-foreground transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-minimal text-muted-foreground mb-4">CONNECT</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+17168634913" className="text-foreground hover:text-muted-foreground transition-colors duration-300">
                  716-863-4913
                </a>
              </li>
              <li>
                <a href="tel:+17169081800" className="text-foreground hover:text-muted-foreground transition-colors duration-300">
                  716-908-1800
                </a>
              </li>
              <li>
                <a href="mailto:dylanszal9912@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors duration-300 break-all">
                  dylanszal9912@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground text-sm pt-2">WNY · Buffalo, NY</li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61589264420672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-minimal text-muted-foreground">
            © {new Date().getFullYear()} D&amp;C CONTRACTING. ALL RIGHTS RESERVED.
          </p>
          <p className="text-minimal text-muted-foreground">
            QUALITY · TRUST · CRAFTSMANSHIP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
