import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#1e1e32] bg-[#0a0a0f] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-[#6b6b80]">
          <Shield className="h-4 w-4 text-[#00e5ff]" />
          <span className="font-mono text-xs">
            {'Krishna'} &mdash; Ethical Hacker & Security Researcher
          </span>
        </div>
        <p className="font-mono text-xs text-[#6b6b80]">
          {'Built with discipline. Driven by curiosity.'}
        </p>
      </div>
    </footer>
  )
}
