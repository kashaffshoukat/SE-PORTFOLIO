import { useState, type FormEvent } from 'react';
import {
  ArrowRight, Check, Loader2, Mail, Phone, MapPin, MessageSquare,
  AlertCircle, Calendar, ShieldCheck, Lock, TrendingUp, Sparkles,
} from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/ui';
import { supabase, supabaseConfigured } from '@/lib/supabase';
import { services } from '@/data/services';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      company: String(data.get('company') ?? '').trim() || null,
      service: String(data.get('service') ?? '').trim() || null,
      budget: String(data.get('budget') ?? '').trim() || null,
      timeline: String(data.get('timeline') ?? '').trim() || null,
      message: String(data.get('message') ?? '').trim(),
      source: 'contact-form',
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setErrorMsg('Please share your name, email, and a short message.');
      return;
    }

    try {
      if (supabaseConfigured) {
        const { error } = await supabase.from('leads').insert(payload);
        if (error) throw error;
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? `Something went wrong: ${err.message}`
          : 'Something went wrong. Please email us directly.'
      );
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-white via-navy-50/30 to-white py-10 lg:py-10 overflow-hidden">
      
      {/* Background Tech Grid Lines & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Trust Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 text-white text-xs font-semibold tracking-wider uppercase mb-4 border border-navy-800 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-white" />
                <span>NDA Protected & Confidential</span>
              </div>

              <SectionHeading
                eyebrow="Let's Talk Growth"
                title="Tell us what you're building"
                subtitle="Share your architectural or business goals, and our engineering leadership will respond within one business day with a structured roadmap."
              />
            </div>

            {/* Growth & Security Stats Highlight Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-navy-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-accent-600 uppercase tracking-wider">
                  <TrendingUp className="h-3.5 w-3.5" /> Velocity
                </div>
                <p className="text-xl font-extrabold text-navy-900 mt-1">2.4x Faster</p>
                <p className="text-xs text-navy-500 mt-0.5">Average time-to-market</p>
              </div>
              <div className="rounded-2xl border border-navy-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" /> Reliability
                </div>
                <p className="text-xl font-extrabold text-navy-900 mt-1">99.98%</p>
                <p className="text-xs text-navy-500 mt-0.5">Production uptime SLA</p>
              </div>
            </div>

            <div className="space-y-4">
              <ContactRow icon={Mail} label="Direct Email" value="hello@nexavera.com" href="mailto:hello@nexavera.com" />
              <ContactRow icon={Phone} label="Gulf Office" value="+974 4400 0000" href="tel:+97444000000" />
              <ContactRow icon={MessageSquare} label="Instant WhatsApp" value="+92 300 0000000" href="https://wa.me/923000000000" />
              <ContactRow icon={MapPin} label="Global Delivery Hubs" value="Lahore, PK · Doha, QA" />
            </div>

            {/* Consultation Booking Box */}
            <div className="rounded-3xl border border-navy-200 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-navy-950 font-bold">
                  <Calendar className="h-4 w-4" />
                </span>
                <h4 className="text-sm font-bold tracking-tight">Need a direct technical session?</h4>
              </div>
              <p className="mt-2.5 text-xs text-navy-300 leading-relaxed">
                Book a complimentary 30-minute architectural review with our core engineers to de-risk your roadmap.
              </p>
              <a
                href="#/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-bold text-navy-950 transition-all hover:bg-cyan-300 shadow-lg hover:translate-x-0.5"
              >
                Book a free consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Confidential Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative rounded-3xl border border-navy-200 bg-white p-8 shadow-2xl lg:p-10 overflow-hidden">
                
                {/* Top Glowing Border Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-navy-900 to-accent-600" />

                {/* Confidentiality Header Note */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-navy-100 text-xs text-navy-500">
                  <span className="flex items-center gap-1.5 font-semibold text-navy-800">
                    <Lock className="h-3.5 w-3.5 text-cyan-600" /> Secure Inquiry Portal
                  </span>
                  <span className="font-mono text-[11px] bg-navy-50 px-2.5 py-1 rounded-md border border-navy-100">
                    SSL 256-Bit Encrypted
                  </span>
                </div>

                {status === 'success' ? (
                  <SuccessState onReset={() => setStatus('idle')} />
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Full name" required>
                        <input
                          name="name"
                          type="text"
                          required
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Work email" required>
                        <input
                          name="email"
                          type="email"
                          required
                          className={inputCls}
                        />
                      </Field>
                    </div>

                    <Field label="Company / Organization (optional)">
                      <input
                        name="company"
                        type="text"
                        className={inputCls}
                      />
                    </Field>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field label="Service of interest">
                        <select name="service" className={inputCls} defaultValue="">
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>{s.title}</option>
                          ))}
                          <option value="Not sure yet">Not sure yet / Custom scope</option>
                        </select>
                      </Field>
                     
                    </div>

                    

                    <Field label="Project details & objectives" required>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className={`${inputCls} resize-none`}
                      />
                    </Field>

                    {status === 'error' && (
                      <div className="flex items-start gap-2.5 rounded-xl bg-red-50 p-4 text-sm text-red-700 border border-red-200">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-navy-900 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-navy-800 hover:shadow-[0_0_20px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-white" /> Transmitting Securely…
                          </>
                        ) : (
                          <>
                            Submit Project Brief
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-navy-400 text-center sm:text-right">
                        Protected by strict{' '}
                        <a href="#/privacy" className="underline hover:text-navy-600 font-semibold">NDA &amp; Privacy Standards</a>.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-2xl border border-navy-200 bg-navy-50/30 px-4.5 py-3.5 text-sm text-navy-900 placeholder:text-navy-400 transition-all duration-200 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10 shadow-sm';

function Field({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy-700">
        {label} {required && <span className="text-cyan-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-4 transition-all duration-300 hover:border-cyan-300 hover:shadow-md hover:-translate-y-0.5 group">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform group-hover:scale-110 shadow-sm">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-navy-400">{label}</p>
        <p className="text-sm font-bold text-navy-900 truncate mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">{content}</a>
  ) : (
    content
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-12 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-800 shadow-inner">
        <Check className="h-8 w-8" />
      </span>
      <h3 className="mt-6 text-2xl font-extrabold text-navy-900">Brief Successfully Transmitted</h3>
      <p className="mt-2.5 max-w-md text-sm text-navy-600 leading-relaxed">
        Thank you for trusting Nexavera. Our technical leadership team is reviewing your requirements and will contact you within one business day.
      </p>
      <button
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-xs font-bold text-white transition-all hover:bg-navy-800 shadow-md"
      >
        Submit another inquiry
      </button>
    </div>
  );
}