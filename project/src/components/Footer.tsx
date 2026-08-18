import { MapPin, Mail, Phone, Linkedin, Twitter, Github, ArrowUpRight, ShieldCheck, Sparkles, Activity } from 'lucide-react';
import { routeToHref } from '@/lib/router';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-navy-950 via-[#030712] to-navy-950 text-navy-100 overflow-hidden border-t border-navy-800/80">
      
      {/* Background Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e90a_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e90a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      {/* Glowing Ambient Gradient Orbs */}
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="container relative z-10 py-16 lg:py-24">
        
        

        {/* Main Footer Grid Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Brand & Studio Info */}
          <div className="lg:col-span-7 space-y-6">
            <a href={routeToHref({ name: 'home' })} className="flex items-center gap-2.5 group">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-navy-900 text-navy-950 shadow-lg transition-transform group-hover:scale-105">
                <svg viewBox="0 0 64 64" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 44V20l24 24V20" />
                </svg>
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">Nexavera</span>
            </a>

            <p className="max-w-xl text-sm leading-relaxed text-navy-300">
              An elite software engineering and digital product studio anchored in Pakistan and Qatar, building scalable custom software, cloud architectures, and AI integrations for global enterprises.
            </p>

            <div className="space-y-3 text-sm pt-2">
              <div className="flex items-center gap-3 text-navy-200">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Lahore · Doha · Remote Worldwide</span>
              </div>
              <a href="mailto:hello@nexavera.com" className="flex items-center gap-3 text-navy-200 transition-colors hover:text-cyan-400">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>hello@nexavera.com</span>
              </a>
              <a href="tel:+97444000000" className="flex items-center gap-3 text-navy-200 transition-colors hover:text-cyan-400">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>+974 4400 0000</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Github, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#/"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900/80 text-navy-200 border border-navy-800 transition-all duration-300 hover:bg-cyan-500 hover:text-navy-950 hover:border-cyan-400 hover:-translate-y-0.5 shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Confidential / Security Column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Security &amp; Trust</h4>
            
            <div className="rounded-2xl border border-navy-800 bg-navy-900/40 p-5 space-y-3 backdrop-blur-sm shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Activity className="h-3.5 w-3.5 animate-pulse" />
                <span>All Systems Operational</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-navy-300">
                <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Enterprise NDA &amp; 256-Bit SSL Protection</span>
              </div>
            </div>

            <p className="text-xs text-navy-400 leading-relaxed">
              Confidentiality guaranteed on all initial briefs and engineering assessments.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-navy-800/80 pt-8 text-xs text-navy-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Nexavera. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#/privacy" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#/terms" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#/contact" className="transition-colors hover:text-cyan-400">Security Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  );
}