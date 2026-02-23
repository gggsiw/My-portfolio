import { Github, Linkedin, Mail } from "lucide-react"

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
    handle: "github.com/krishna",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    handle: "linkedin.com/in/krishna",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:krishna@example.com",
    handle: "krishna@example.com",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#0a0a0f] py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1e32] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#00e5ff]" />
          <span className="font-mono text-xs tracking-widest text-[#00e5ff] uppercase">
            Contact
          </span>
        </div>

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e0e0e8] text-balance md:text-4xl">
          Let&apos;s <span className="text-[#00e5ff]">Connect</span>
        </h2>

        <p className="mb-12 max-w-lg text-[#6b6b80]">
          Open to collaborations, responsible disclosure programs, hackathon
          teams, and security research opportunities.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-[#1e1e32] bg-[#0f0f18] p-6 transition-all duration-300 hover:border-[#00e5ff]/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#1e1e32] bg-[#141420] transition-colors duration-300 group-hover:border-[#00e5ff]/30">
                <contact.icon className="h-5 w-5 text-[#6b6b80] transition-colors group-hover:text-[#00e5ff]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#e0e0e8]">
                  {contact.label}
                </p>
                <p className="font-mono text-xs text-[#6b6b80] transition-colors group-hover:text-[#00e5ff]">
                  {contact.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
