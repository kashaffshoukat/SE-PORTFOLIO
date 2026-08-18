import { useState, type FormEvent } from 'react';
import {
  ArrowRight, Check, Loader2, Mail, Phone, MapPin, MessageSquare,
  AlertCircle, Calendar,
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
        // Fallback: simulate success when Supabase env is not present.
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
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Let's talk"
              title="Tell us what you're building"
              subtitle="Share a few details and we'll get back within one business day with next steps — no sales pressure, just a real conversation."
            />

            <div className="mt-8 space-y-4">
              <ContactRow icon={Mail} label="Email" value="hello@nexavera.com" href="mailto:hello@nexavera.com" />
              <ContactRow icon={Phone} label="Phone" value="+974 4400 0000" href="tel:+97444000000" />
              <ContactRow icon={MessageSquare} label="WhatsApp" value="+92 300 0000000" href="https://wa.me/923000000000" />
              <ContactRow icon={MapPin} label="Studios" value="Lahore, PK · Doha, QA" />
            </div>

            <div className="mt-8 rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent-600" />
                <h4 className="text-sm font-700 text-navy-900">Prefer a slot?</h4>
              </div>
              <p className="mt-2 text-sm text-navy-600">
                Book a free 30-minute consultation and we'll walk through your project, timeline,
                and whether we're the right fit.
              </p>
              <a
                href="#/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-600 text-white transition-all hover:bg-navy-800"
              >
                Book a free consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-navy-100 bg-navy-50/40 p-6 shadow-navy sm:p-8">
                {status === 'success' ? (
                  <SuccessState onReset={() => setStatus('idle')} />
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" required>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Doe"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Work email" required>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="jane@company.com"
                          className={inputCls}
                        />
                      </Field>
                    </div>

                    <Field label="Company (optional)">
                      <input
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className={inputCls}
                      />
                    </Field>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Service of interest">
                        <select name="service" className={inputCls} defaultValue="">
                          <option value="" disabled>Select a service</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>{s.title}</option>
                          ))}
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </Field>
                      <Field label="Budget range">
                        <select name="budget" className={inputCls} defaultValue="">
                          <option value="" disabled>Select a range</option>
                          <option value="< $25k">&lt; $25k</option>
                          <option value="$25k – $75k">$25k – $75k</option>
                          <option value="$75k – $150k">$75k – $150k</option>
                          <option value="$150k+">$150k+</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Timeline">
                      <select name="timeline" className={inputCls} defaultValue="">
                        <option value="" disabled>Select a timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="Exploring">Just exploring</option>
                      </select>
                    </Field>

                    <Field label="Project details" required>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project, goals, and any constraints we should know about."
                        className={`${inputCls} resize-none`}
                      />
                    </Field>

                    {status === 'error' && (
                      <div className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-700 text-white transition-all hover:bg-navy-800 hover:shadow-navy disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-navy-400">
                      By submitting, you agree to our{' '}
                      <a href="#/privacy" className="underline hover:text-navy-600">Privacy Policy</a>.
                      We'll never share your details.
                    </p>
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
  'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/10';

function Field({
  label, required, children,
}: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-600 text-navy-700">
        {label} {required && <span className="text-accent-600">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-navy-100 bg-white p-4 transition-all hover:border-navy-200 hover:shadow-navy">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-600 uppercase tracking-wider text-navy-400">{label}</p>
        <p className="text-sm font-600 text-navy-900">{value}</p>
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
    <div className="flex flex-col items-center py-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Check className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-xl font-700 text-navy-900">Message sent</h3>
      <p className="mt-2 max-w-sm text-sm text-navy-600">
        Thanks for reaching out. A member of our team will get back to you within one business day.
      </p>
      <button
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-600 text-navy-700 ring-1 ring-navy-200 transition-all hover:bg-navy-50"
      >
        Send another message
      </button>
    </div>
  );
}
