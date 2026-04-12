import EditorMockup from "./EditorMockup";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Headline */}
        <h1 className="animate-fade-in animate-delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-text-primary mb-6">
          The AI-native
          <br />
          <span className="gradient-text">code editor</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in animate-delay-200 max-w-2xl mx-auto text-lg text-text-secondary mb-10 leading-relaxed">
          VSClone brings AI chat, tab autocomplete, and agentic tool execution
          directly into your editor. Choose your model &mdash; OpenAI, Anthropic,
          or Google &mdash; and code with extraordinary productivity.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in animate-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://github.com/BrandonHowe/cs485-llm-ide/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent/90 transition-colors"
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
            href="#features"
            className="px-7 py-3.5 text-sm font-medium rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-border-hover transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Editor mockup */}
        <div className="animate-fade-in animate-delay-400 relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 rounded-2xl blur-3xl hero-glow" />
          <EditorMockup />
        </div>
      </div>
    </section>
  );
}
