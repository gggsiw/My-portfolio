import { Lightbulb, LayoutPanelTop, ShieldCheck, FlaskConical } from "lucide-react"

const focuses = [
  {
    icon: Lightbulb,
    title: "Security Innovation",
    description:
      "Developing creative approaches to identify and neutralize emerging cyber threats.",
  },
  {
    icon: LayoutPanelTop,
    title: "Threat Modeling",
    description:
      "Systematic analysis of potential threats to design robust defense strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    description:
      "Building security-first systems with defense-in-depth and zero-trust principles.",
  },
  {
    icon: FlaskConical,
    title: "Vulnerability Research",
    description:
      "Deep-dive analysis into real-world systems to uncover critical security flaws.",
  },
]

export function HackathonSection() {
  return (
    <section id="research" className="relative bg-[#0a0a0f] py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e32] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#00e5ff]" />
          <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">
            Research Focus
          </span>
        </div>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-[#e0e0e8] text-balance md:text-4xl">
          Hackathon & <span className="text-[#00e5ff]">Research Focus</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {focuses.map((item, index) => (
            <div
              key={item.title}
              className="group flex gap-5 rounded-lg border border-[#1e1e32] bg-[#0f0f18] p-6 transition-all duration-300 hover:border-[#00e5ff]/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#00e5ff]/10">
                <item.icon className="h-6 w-6 text-[#00e5ff]" />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-mono text-xs text-[#00e5ff]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-[#e0e0e8]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#6b6b80]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
