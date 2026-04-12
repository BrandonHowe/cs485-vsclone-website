export default function CTA() {
  return (
    <section id="download" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-accent/15 via-accent-secondary/15 to-accent/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
          Start coding with AI today
        </h2>
        <p className="text-text-secondary mb-10 leading-relaxed">
          VSClone is free and open source. Download it, connect your API keys,
          and experience AI-native development.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M8 2v9M4 8l4 4 4-4M3 14h10" />
            </svg>
            Download for macOS
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
