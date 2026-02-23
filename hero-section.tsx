"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lines = terminalRef.current?.querySelectorAll(".terminal-line")
    lines?.forEach((line, i) => {
      ;(line as HTMLElement).style.animationDelay = `${0.8 + i * 0.4}s`
    })
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f]">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#00e5ff 1px, transparent 1px), linear-gradient(90deg, #00e5ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00e5ff]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 pt-24 pb-16 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 px-4 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00e5ff]" />
            <span className="font-mono text-xs tracking-wider text-[#00e5ff]">
              SECURITY RESEARCHER
            </span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-[#e0e0e8] md:text-5xl lg:text-6xl">
            Securing The
            <br />
            <span className="text-[#00e5ff]">Digital Frontier.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-[#6b6b80] lg:mx-0 lg:text-lg">
            Professional Ethical Hacker & Security Researcher specializing in
            vulnerability research, penetration testing, and critical
            infrastructure protection.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#achievements"
              className="inline-flex items-center gap-2 rounded-lg bg-[#00e5ff] px-6 py-3 text-sm font-semibold text-[#0a0a0f] transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,229,255,0.3)]"
            >
              View Achievements
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1e1e32] bg-transparent px-6 py-3 text-sm font-semibold text-[#e0e0e8] transition-colors duration-200 hover:border-[#00e5ff]/40 hover:text-[#00e5ff]"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right: Profile + Terminal */}
        <div className="flex flex-1 flex-col items-center gap-8">
          {/* Profile image */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#00e5ff]/40 to-transparent blur-md" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-[#00e5ff]/30 lg:h-56 lg:w-56">
              <img
                src="/Krishna.jpg"
                alt="Krishna - Ethical Hacker and Security Researcher"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Terminal widget */}
          <div
            ref={terminalRef}
            className="w-full max-w-sm overflow-hidden rounded-lg border border-[#1e1e32] bg-[#0c0c14]"
          >
            <div className="flex items-center gap-2 border-b border-[#1e1e32] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-[10px] text-[#6b6b80]">
                terminal
              </span>
            </div>
            <div className="space-y-2 p-4 font-mono text-xs">
              <div className="terminal-line animate-fade-in opacity-0">
                <span className="text-[#00e5ff]">{'krishna@kali'}</span>
                <span className="text-[#6b6b80]">:</span>
                <span className="text-[#27c93f]">~</span>
                <span className="text-[#e0e0e8]">{'$ whoami'}</span>
              </div>
              <div className="terminal-line animate-fade-in text-[#6b6b80] opacity-0">
                ethical_hacker | security_researcher
              </div>
              <div className="terminal-line animate-fade-in opacity-0">
                <span className="text-[#00e5ff]">{'krishna@kali'}</span>
                <span className="text-[#6b6b80]">:</span>
                <span className="text-[#27c93f]">~</span>
                <span className="text-[#e0e0e8]">{'$ cat status.txt'}</span>
              </div>
              <div className="terminal-line animate-fade-in text-[#00e5ff] opacity-0">
                NCIIPC Contributor | Bug Hunter
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#6b6b80] transition-colors hover:text-[#00e5ff]"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  )
}
