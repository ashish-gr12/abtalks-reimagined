import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

function ABTalksLogo() {
  return (
    <svg aria-label="AB Talks" className="h-6 w-[75px] text-slate-950 dark:text-white" role="img" viewBox="0 0 176 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="32" fill="currentColor" fontFamily="cursive" fontSize="31" fontStyle="italic" fontWeight="700" letterSpacing="-2">AB TALKS</text>
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Discord', href: '#', icon: DiscordIcon },
  { name: 'YouTube', href: '#', icon: YoutubeIcon },
  { name: 'X', href: '#', icon: XIcon },
]

function Footer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.2 }}
      className="border-t border-slate-200/80 bg-slate-50/60 px-5 pb-10 pt-12 dark:border-white/10 dark:bg-[#06060c] sm:px-8 sm:pb-12 sm:pt-16 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* Final Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-[-0.035em] text-slate-950 dark:text-white sm:text-3xl">
            Ready to build your 60-day streak?
          </h2>
          <p className="mx-auto mt-2.5 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">
            Join Indian college students in learning, building daily projects, and proving work through GitHub and LinkedIn.
          </p>
          <div className="mt-5 flex justify-center">
            <motion.a
              href="/dashboard"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-950/20 hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:shadow-indigo-950/40 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-300"
            >
              Start Your 60 Days <ArrowRight className="size-4" aria-hidden="true" />
            </motion.a>
          </div>
        </div>

        {/* Faint Divider */}
        <div className="my-10 border-t border-slate-200/80 dark:border-white/8" />

        {/* Footer Content Grid */}
        <div className="grid gap-8 text-center sm:text-left md:grid-cols-2 md:items-start md:justify-between">
          {/* Left Column: Description & Quote */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <ABTalksLogo />
            </div>
            <p className="max-w-md text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
              ABTalks is a platform for students to learn, build, showcase their work, and accelerate their careers through consistent proof of work.
            </p>
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5 dark:border-indigo-400/15 dark:bg-indigo-500/10">
              <p className="text-xs font-bold tracking-tight text-indigo-950 dark:text-indigo-200">
                “Consistency compounds.”
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-indigo-700/90 dark:text-indigo-300/80">
                One day at a time. One build at a time.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="flex flex-col items-center space-y-5 sm:items-end">
            {/* Contact Email */}
            <div className="text-center sm:text-right">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                For any issue or enquiry:
              </p>
              <a
                href="mailto:team@abtalks.in"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-300"
              >
                <Mail className="size-3.5 shrink-0" aria-hidden="true" />
                <span>team@abtalks.in</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="space-y-2 text-center sm:text-right">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                Follow our journey
              </p>
              <div className="flex items-center justify-center gap-1.5 sm:justify-end">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.05 }}
                      transition={{ duration: 0.18 }}
                      className="grid size-10 place-items-center rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:shadow-none dark:hover:border-indigo-400/30 dark:hover:bg-indigo-500/15 dark:hover:text-indigo-300"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="mt-10 border-t border-slate-200/60 pt-6 text-center dark:border-white/5">
          <p className="text-[11px] text-slate-500 dark:text-slate-500">
            © 2026 ABTalks. Reimagined for Indian College Students. Mobile-first 60-Day Challenge.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
