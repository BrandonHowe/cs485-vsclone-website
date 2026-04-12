export default function Spotlight() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Magically accurate
              <br />
              <span className="gradient-text">autocomplete</span>
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              VSClone predicts your next edit using Fill-in-the-Middle
              architecture. It sees the code before and after your cursor,
              understands your patterns, and suggests completions that feel
              like they were written by you.
            </p>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </span>
                500ms debounce with smart caching for instant suggestions
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </span>
                Accept with Tab, dismiss with Escape
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                </span>
                Works with local FIM servers or cloud APIs
              </li>
            </ul>
          </div>

          {/* Code block mockup */}
          <div className="rounded-xl border border-border bg-bg-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border text-xs text-text-tertiary">
              <span className="w-2 h-2 rounded-full bg-blue-400/60" />
              utils/api.ts
            </div>
            <div className="p-5 font-mono text-xs sm:text-sm leading-7 overflow-x-auto">
              <Line n={1} tokens={[kw("async"), " ", fn("function"), " ", id("fetchUserData"), "(", id("userId"), ": ", tp("string"), ") {"]} />
              <Line n={2} tokens={["  ", kw("const"), " response = ", kw("await"), " ", fn("fetch"), "("]} />
              <Line n={3} tokens={["    ", str("`/api/users/${userId}`")]} />
              <Line n={4} tokens={["  );"]} />
              {/* Ghost text line */}
              <div className="flex items-start gap-3">
                <span className="w-8 text-right text-text-tertiary select-none shrink-0">5</span>
                <span>
                  <span className="text-text-primary/40 italic">{"  const data = await response.json();"}</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 text-right text-text-tertiary select-none shrink-0">6</span>
                <span>
                  <span className="text-text-primary/40 italic">{"  return data as User;"}</span>
                </span>
              </div>
              <Line n={7} tokens={["}"]} />
            </div>
            {/* Tab hint */}
            <div className="border-t border-border px-4 py-2 flex items-center justify-between">
              <span className="text-[10px] text-text-tertiary">
                Ghost text suggestion
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-text-tertiary border border-border rounded px-1.5 py-0.5">
                  Tab
                </span>
                <span className="text-[10px] text-text-tertiary">
                  to accept
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({ n, tokens }: { n: number; tokens: React.ReactNode[] }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-8 text-right text-text-tertiary select-none shrink-0">{n}</span>
      <span>{tokens}</span>
    </div>
  );
}

function kw(text: string) {
  return <span key={text} className="text-purple-400">{text}</span>;
}
function fn(text: string) {
  return <span key={text} className="text-blue-400">{text}</span>;
}
function id(text: string) {
  return <span key={text} className="text-sky-300">{text}</span>;
}
function tp(text: string) {
  return <span key={text} className="text-green-400">{text}</span>;
}
function str(text: string) {
  return <span key={text} className="text-amber-300">{text}</span>;
}
