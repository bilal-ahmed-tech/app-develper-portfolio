import { navLinks, socialLinks } from "../../data/data";

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-main text-text-body border-t border-border">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-6">

        {/* ── Top Section ── */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-bold text-text-heading mb-3">
              Husnain <span className="text-primary">Ahmad</span>
            </h3>

            <p className="text-sm text-text-muted leading-relaxed">
              I design and develop modern, fast, and scalable websites and applications tailored to help startups and businesses grow in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-4">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-2">
              {navLinks
                .filter((l) => l.id !== "projects")
                .map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.id);
                      }}
                      className="
                        text-sm text-text-body
                        transition-colors duration-200
                        hover:text-primary
                        active:text-primary-dark
                      "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-heading mb-4">
              Connect
            </h4>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="
                    w-11 h-11 flex items-center justify-center
                    rounded-md text-xl
                    bg-bg-card
                    border border-border
                    text-text-body
                    transition-all duration-200
                    hover:text-white
                    hover:border-transparent
                    active:scale-95
                  "
                  style={{
                    "--hover-bg": s.hoverBg,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = s.hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "";
                  }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-border mb-6" />

        {/* ── Bottom Section ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-sm text-text-muted text-center sm:text-left">
            © {currentYear} Husnain Ahmad. All rights reserved.
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            aria-label="Back to top"
            className="
              w-10 h-10 flex items-center justify-center
              rounded-xl
              bg-bg-card
              border border-border
              text-text-body
              transition-all duration-200
              hover:border-primary
              hover:-translate-y-0.5
              active:scale-95
            "
          >
            <i className="fa-solid fa-arrow-up" />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;