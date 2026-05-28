import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/work", label: "WORK" },
  { to: "/services", label: "SERVICES" },
  { to: "/about", label: "ABOUT" },
  { to: "/blog", label: "BLOG" },
  { to: "/contact", label: "CONTACT" },
];

const PHONE = "716-863-4913";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Condense header on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const close = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "bg-background/55 backdrop-blur-lg border-b border-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.03]"
          onClick={close}
          aria-label="D&C Contracting - Home"
        >
          <img
            src={logo}
            alt="D&C Contracting"
            className={`w-auto object-contain dark:invert transition-all duration-500 ${
              scrolled ? "h-9" : "h-11"
            }`}
          />
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-9 lg:gap-11">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="group relative py-2">
              {({ isActive }) => (
                <>
                  <span
                    className={`text-minimal transition-colors duration-300 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-amber-500 dark:bg-amber-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right cluster */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:+1${PHONE.replace(/-/g, "")}`}
            className="hidden lg:flex items-center gap-2 text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {PHONE}
          </a>

          <span className="hidden lg:block w-px h-4 bg-border" />

          <ThemeToggle />

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-amber-500 dark:bg-amber-400 text-black px-5 py-2.5 text-[10px] tracking-[0.18em] uppercase font-bold hover:bg-amber-400 dark:hover:bg-amber-300 transition-all duration-300"
          >
            Get a Quote
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            className="p-2 text-foreground hover:text-muted-foreground transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-6 py-6 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={close}
                className={({ isActive }) =>
                  `flex items-center border-l-2 pl-4 py-3.5 text-minimal transition-colors duration-300 ${
                    isActive
                      ? "border-amber-500 dark:border-amber-400 text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href={`tel:+1${PHONE.replace(/-/g, "")}`}
              className="flex items-center gap-2 pl-4 py-3.5 text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Phone className="h-3.5 w-3.5" />
              {PHONE}
            </a>

            <Link
              to="/contact"
              onClick={close}
              className="group mt-4 inline-flex items-center justify-center gap-2 bg-amber-500 dark:bg-amber-400 text-black px-6 py-4 text-[11px] tracking-[0.18em] uppercase font-bold hover:bg-amber-400 dark:hover:bg-amber-300 transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
