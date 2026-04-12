export default function EditorMockup() {
  return (
    <div className="relative rounded-xl border border-border bg-bg-surface overflow-hidden shadow-2xl shadow-accent/5">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-surface">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 text-center text-xs text-text-tertiary font-mono">
          VSClone
        </div>
      </div>

      {/* Editor body */}
      <div className="flex min-h-[340px] sm:min-h-[420px]">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col w-52 border-r border-border bg-[#0e0c12] p-3 gap-1">
          <div className="text-[10px] uppercase tracking-wider text-text-tertiary mb-2 font-medium">
            Explorer
          </div>
          <SidebarItem name="src" isFolder open />
          <SidebarItem name="app" isFolder indent={1} open />
          <SidebarItem name="page.tsx" indent={2} active />
          <SidebarItem name="layout.tsx" indent={2} />
          <SidebarItem name="globals.css" indent={2} />
          <SidebarItem name="components" isFolder indent={1} />
          <SidebarItem name="package.json" />
          <SidebarItem name="tsconfig.json" />
        </div>

        {/* Code area */}
        <div className="flex-1 flex">
          {/* Line numbers + code */}
          <div className="flex-1 p-4 font-mono text-xs sm:text-sm leading-6 overflow-x-auto">
            <CodeLine n={1} text='export default function Home() {' />
            <CodeLine n={2} text="  return (" />
            <CodeLine n={3} text='    <main className="flex min-h-screen">' />
            <CodeLine n={4} text='      <h1>Welcome to my app</h1>' />
            {/* Ghost text / autocomplete suggestion */}
            <div className="flex items-start gap-3">
              <span className="w-8 text-right text-text-tertiary select-none shrink-0">
                5
              </span>
              <span>
                <span className="text-text-primary">      </span>
                <span className="text-text-primary/40 italic">
                  {`<p>Built with VSClone AI</p>`}
                </span>
              </span>
            </div>
            <CodeLine n={6} text="    </main>" />
            <CodeLine n={7} text="  );" />
            <CodeLine n={8} text="}" />
          </div>

          {/* Chat panel */}
          <div className="hidden md:flex flex-col w-72 border-l border-border bg-[#0e0c12]">
            <div className="px-3 py-2 border-b border-border text-xs text-text-secondary font-medium flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              VSClone Chat
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-3 flex flex-col gap-3 text-xs">
              <ChatBubble
                role="user"
                text="Add a description paragraph below the heading"
              />
              <ChatBubble
                role="assistant"
                text="I'll add a paragraph element below the h1. Here's the edit:"
              />
              <div className="rounded-md bg-accent/10 border border-accent/20 px-2.5 py-1.5 font-mono text-[10px] text-accent">
                + &lt;p&gt;Built with VSClone AI&lt;/p&gt;
              </div>
              <div className="flex gap-2 mt-1">
                <button className="px-2.5 py-1 rounded text-[10px] bg-accent/20 text-accent font-medium">
                  Accept
                </button>
                <button className="px-2.5 py-1 rounded text-[10px] border border-border text-text-tertiary">
                  Reject
                </button>
              </div>
            </div>

            {/* Chat input */}
            <div className="border-t border-border p-2">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-bg-surface px-3 py-2">
                <span className="text-xs text-text-tertiary flex-1">
                  Ask VSClone...
                </span>
                <span className="text-[10px] text-text-tertiary border border-border rounded px-1.5 py-0.5">
                  Claude
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  name,
  isFolder,
  indent = 0,
  active,
  open,
}: {
  name: string;
  isFolder?: boolean;
  indent?: number;
  active?: boolean;
  open?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-xs cursor-default ${
        active
          ? "bg-accent/15 text-accent"
          : "text-text-secondary hover:text-text-primary"
      }`}
      style={{ paddingLeft: `${8 + indent * 12}px` }}
    >
      {isFolder && (
        <span className="text-[10px] text-text-tertiary">
          {open ? "v" : ">"}
        </span>
      )}
      <span>{name}</span>
    </div>
  );
}

function CodeLine({ n, text }: { n: number; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-8 text-right text-text-tertiary select-none shrink-0">
        {n}
      </span>
      <span className="text-text-primary">{text}</span>
    </div>
  );
}

function ChatBubble({ role, text }: { role: "user" | "assistant"; text: string }) {
  return (
    <div
      className={`rounded-lg px-2.5 py-2 ${
        role === "user"
          ? "bg-bg-surface-hover text-text-primary"
          : "text-text-secondary"
      }`}
    >
      <div className="text-[10px] font-medium text-text-tertiary mb-1">
        {role === "user" ? "You" : "Claude"}
      </div>
      {text}
    </div>
  );
}
