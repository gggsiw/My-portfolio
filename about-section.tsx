import { Target, BookOpen, Eye } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0a0a0f] py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e32] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#00e5ff]" />
          <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">
            About
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#e0e0e8] text-balance md:text-4xl">
              A Researcher By Nature.
              <br />
              <span className="text-[#00e5ff]">A Hacker By Discipline.</span>
            </h2>
            <p className="mb-4 leading-relaxed text-[#6b6b80]">
              Currently a Class 12 student, I operate at the intersection of
              academic rigor and real-world cybersecurity research. While my
              peers prepare for board exams, I spend my time analyzing
              vulnerabilities in critical systems, writing responsible
              disclosures, and contributing to national cybersecurity
              infrastructure.
            </p>
            <p className="leading-relaxed text-[#6b6b80]">
              My journey is driven by an unwavering commitment to ethical
              responsibility, relentless curiosity, and the belief that age is
              no barrier to making a meaningful impact in the security
              landscape.
            </p>
          </div>

          {/* Right - Stats / Highlights */}
          <div className="flex flex-col gap-6">
            <div className="group rounded-lg border border-[#1e1e32] bg-[#0f0f18] p-6 transition-all duration-300 hover:border-[#00e5ff]/30">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00e5ff]/10">
                  <Target className="h-5 w-5 text-[#00e5ff]" />
                </div>
                <h3 className="font-semibold text-[#e0e0e8]">
                  Precision & Focus
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#6b6b80]">
                Every vulnerability discovered is a step toward a more secure
                digital world. Methodical, disciplined, and thorough in every
                engagement.
              </p>
            </div>

            <div className="group rounded-lg border border-[#1e1e32] bg-[#0f0f18] p-6 transition-all duration-300 hover:border-[#00e5ff]/30">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00e5ff]/10">
                  <BookOpen className="h-5 w-5 text-[#00e5ff]" />
                </div>
                <h3 className="font-semibold text-[#e0e0e8]">
                  Continuous Learning
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#6b6b80]">
                Constantly evolving with the threat landscape. Studying
                advanced exploitation techniques, defensive architectures, and
                emerging attack vectors.
              </p>
            </div>

            <div className="group rounded-lg border border-[#1e1e32] bg-[#0f0f18] p-6 transition-all duration-300 hover:border-[#00e5ff]/30">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00e5ff]/10">
                  <Eye className="h-5 w-5 text-[#00e5ff]" />
                </div>
                <h3 className="font-semibold text-[#e0e0e8]">
                  Ethical Responsibility
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#6b6b80]">
                Committed to responsible disclosure and ethical hacking
                principles. Every action is guided by integrity and the goal
                of protecting, not exploiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
