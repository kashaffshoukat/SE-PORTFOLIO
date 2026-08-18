import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useRouter, scrollToSection, routeToHref } from '@/lib/router';
import { services } from '@/data/services';

const navLinks = [
  { label: 'Services', id: 'services', hasMenu: true },
  { label: 'Work', id: 'work', hasMenu: false },
  { label: 'About', id: 'about', hasMenu: false },
  { label: 'Insights', id: 'insights', hasMenu: false },
  { label: 'Contact', id: 'contact', hasMenu: false },
];

export function Navbar() {
  const { route } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [route]);

  const go = (id: string) => {
    setOpen(false);
    if (route.name === 'home') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'services') {
      window.location.hash = '/services';
    } else if (id === 'work') {
      window.location.hash = '/work';
    } else if (id === 'insights') {
      window.location.hash = '/insights';
    } else if (id === 'about') {
      window.location.hash = '/about';
    } else if (id === 'contact') {
      window.location.hash = '/contact';
    } else {
      window.location.hash = '/';
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 90);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open || servicesOpen ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(14,31,63,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between lg:h-20">
        <a
          href={routeToHref({ name: 'home' })}
          className="group flex items-center gap-2.5"
          aria-label="Nexavera home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-white transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 64 64" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 44V20l24 24V20" />
            </svg>
          </span>
          <span className="font-display text-lg font-700 tracking-tight text-navy-900">
            Nexavera
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasMenu ? (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  onClick={() => go(link.id)}
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-500 text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-[460px] -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white p-3 shadow-navy-lg">
                      <div className="grid grid-cols-2 gap-1.5">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <a
                              key={s.slug}
                              href={`#/services/${s.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-navy-50"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white">
                                <Icon className="h-4.5 w-4.5" />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-700 text-navy-900">{s.short}</span>
                                <span className="mt-0.5 block text-xs leading-tight text-navy-500 line-clamp-2">{s.blurb}</span>
                              </span>
                            </a>
                          );
                        })}
                      </div>
                      <a
                        href="#/services"
                        onClick={() => setServicesOpen(false)}
                        className="mt-2 flex items-center justify-between rounded-xl bg-navy-50 px-4 py-3 text-sm font-600 text-navy-800 transition-colors hover:bg-navy-100"
                      >
                        View all services
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="rounded-full px-4 py-2 text-sm font-500 text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-600 text-white transition-all duration-300 hover:bg-navy-800 hover:shadow-navy"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white lg:hidden ${open ? 'max-h-[640px] border-t border-navy-100' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.35s ease' }}
      >
        <nav className="container flex flex-col gap-1 py-4">
          <button
            onClick={() => go('services')}
            className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-base font-500 text-navy-800 hover:bg-navy-50"
          >
            Services
            <ArrowRight className="h-4 w-4 text-navy-400" />
          </button>
          <div className="ml-4 space-y-1">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-500 text-navy-600 hover:bg-navy-50"
              >
                <s.icon className="h-4 w-4 text-navy-400" />
                {s.short}
              </a>
            ))}
          </div>
          {navLinks.filter((l) => !l.hasMenu).map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-left text-base font-500 text-navy-800 hover:bg-navy-50"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 text-navy-400" />
            </button>
          ))}
          <a
            href="#/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-base font-600 text-white"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export { scrollToSection };
