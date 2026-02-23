"use client"

import { Award } from "lucide-react"

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative bg-[#0c0c14] py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e32] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#00e5ff]" />
          <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">
            Achievements
          </span>
        </div>

        <h2 className="mb-12 text-3xl font-bold tracking-tight text-[#e0e0e8] text-balance md:text-4xl">
          Recognition & <span className="text-[#00e5ff]">Impact</span>
        </h2>

        {/* NCIIPC Achievement Card */}
        <div className="relative overflow-hidden rounded-xl border border-[#00e5ff]/20 bg-[#0a0a0f]">
          {/* Animated glow border */}
          <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-[#00e5ff]/20 via-transparent to-[#00e5ff]/20 opacity-60" />

          {/* Background glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#00e5ff]/5 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#00e5ff]/5 blur-[80px]" />

          <div className="relative flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
            {/* Badge */}
            <div className="relative shrink-0">
              <div className="absolute -inset-4 animate-pulse rounded-full bg-[#00e5ff]/10 blur-xl" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#00e5ff]/40 bg-[#0f0f18] shadow-[0_0_40px_rgba(0,229,255,0.15)]">
                <Award className="h-12 w-12 text-[#00e5ff]" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00e5ff]" />
                <span className="font-mono text-[10px] tracking-widest text-[#00e5ff] uppercase">
                  National Recognition
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-[#e0e0e8] md:text-3xl">
                Proud Contributor to{" "}
                <span className="text-[#00e5ff]">NCIIPC</span>
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-[#e0e0e8]">
                National Critical Information Infrastructure Protection Centre
              </p>

              <p className="max-w-2xl text-sm leading-relaxed text-[#6b6b80]">
                Recognized for contributing to the security of India&apos;s
                critical national infrastructure. NCIIPC operates under the
                National Technical Research Organisation (NTRO) and is
                designated as the nodal agency for the protection of Critical
                Information Infrastructure in India. This contribution
                reflects the ability to identify and responsibly report
                vulnerabilities in systems of national importance.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                {[
                  "Critical Infrastructure",
                  "Government Recognition",
                  "Responsible Disclosure",
                  "National Security",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#1e1e32] bg-[#141420] px-3 py-1 font-mono text-[10px] tracking-wide text-[#6b6b80]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
