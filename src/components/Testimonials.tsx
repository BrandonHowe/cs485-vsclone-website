"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Staff Engineer, Acme Corp",
    quote:
      "VSClone's multi-model support means I can use Claude for architecture discussions and GPT for quick edits. It's the flexibility I've always wanted.",
    initials: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "Indie Developer",
    quote:
      "The tab autocomplete is scary good. It's like the AI read my mind — or at least my codebase. I ship features twice as fast now.",
    initials: "MR",
  },
  {
    name: "Dr. Emily Park",
    role: "CS Professor, NJIT",
    quote:
      "Having the full VS Code ecosystem with built-in AI tools is a game changer for teaching. Students can experiment with AI-assisted coding from day one.",
    initials: "EP",
  },
  {
    name: "James Liu",
    role: "Engineering Lead, Startup",
    quote:
      "Plan mode is underrated. Being able to review the AI's approach before it touches code has saved us from countless bad refactors.",
    initials: "JL",
  },
  {
    name: "Aisha Patel",
    role: "Full Stack Developer",
    quote:
      "I switched from Cursor and haven't looked back. VSClone feels like home if you're already a VS Code power user — because it literally is VS Code.",
    initials: "AP",
  },
  {
    name: "Tom Anderson",
    role: "Open Source Contributor",
    quote:
      "The agent loop is incredible. I described a feature, and VSClone created five files, wired up the imports, and wrote the tests. All I did was review diffs.",
    initials: "TA",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Loved by developers
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            See what engineers are saying about VSClone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stagger vertical offset for masonry-like feel
  const offsetClass = index % 3 === 1 ? "lg:mt-8" : index % 3 === 2 ? "lg:mt-4" : "";

  return (
    <div
      ref={ref}
      className={`rounded-xl border border-border bg-bg-surface p-6 flex flex-col gap-4 ${offsetClass} ${
        visible ? "animate-fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <p className="text-sm text-text-secondary leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent">
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-medium text-text-primary">
            {testimonial.name}
          </div>
          <div className="text-xs text-text-tertiary">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
