export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          {/* Product */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#how-it-works">How It Works</FooterLink>
              <FooterLink href="#download">Download</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-4">
              Features
            </h4>
            <ul className="space-y-2.5">
              <FooterLink href="#features">AI Chat</FooterLink>
              <FooterLink href="#features">Tab Autocomplete</FooterLink>
              <FooterLink href="#features">Agent Tools</FooterLink>
              <FooterLink href="#features">Plan Mode</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">GitHub</FooterLink>
              <FooterLink href="#">Community</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-4">
              Project
            </h4>
            <ul className="space-y-2.5">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Contributing</FooterLink>
              <FooterLink href="#">License</FooterLink>
              <FooterLink href="#">Privacy</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              className="text-accent"
            >
              <rect
                x="2"
                y="2"
                width="24"
                height="24"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 8l6 6-6 6M15 20h5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-text-tertiary">
              VSClone &middot; Open Source AI Code Editor
            </span>
          </div>
          <span className="text-xs text-text-tertiary">
            Built at NJIT
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        {children}
      </a>
    </li>
  );
}
