import {
  Search,
  Globe,
  Shield,
  Wifi,
  Bug,
  ScanSearch,
} from "lucide-react"

const skills = [
  {
    icon: Search,
    title: "Penetration Testing",
    description:
      "Systematic evaluation of systems, networks, and applications for exploitable vulnerabilities.",
  },
  {
    icon: ScanSearch,
    title: "OSINT",
    description:
      "Open-source intelligence gathering and reconnaissance for threat assessment and profiling.",
  },
  {
    icon: Globe,
    title: "Web App Security",
    description:
      "Identifying and mitigating OWASP Top 10 vulnerabilities in modern web applications.",
  },
  {
    icon: Wifi,
    title: "Network Security",
    description:
      "Analyzing network infrastructure for misconfigurations, weak protocols, and attack surfaces.",
  },
  {
    icon: Shield,
    title: "Vulnerability Assessment",
    description:
      "Comprehensive scanning and analysis to identify, classify, and prioritize security weaknesses.",
  },
  {
    icon: Bug,
    title: "Bug Hunting",
    description:
      "Actively discovering and responsibly reporting security flaws in real-world platforms and services.",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#0c0c14] py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e32] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#00e5ff]" />
          <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">
            Skills
          </span>
        </div>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-[#e0e0e8] text-balance md:text-4xl">
          Core <span className="text-[#00e5ff]">Competencies</span>
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group relative rounded-lg border border-[#1e1e32] bg-[#0a0a0f] p-6 transition-all duration-300 hover:border-[#00e5ff]/30"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-[#00e5ff]/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#1e1e32] bg-[#141420] transition-colors duration-300 group-hover:border-[#00e5ff]/30">
                  <skill.icon className="h-5 w-5 text-[#00e5ff]" />
                </div>
                <h3 className="mb-2 font-semibold text-[#e0e0e8]">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6b80]">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
