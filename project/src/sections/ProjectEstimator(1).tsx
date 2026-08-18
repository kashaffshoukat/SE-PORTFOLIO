import { useMemo, useState } from 'react';
import {
  ArrowRight, ArrowLeft, Check, Clock, DollarSign, Layers, Rocket,
  Sparkles, X, ShieldCheck,
} from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/ui';

type Option = { label: string; value: number; hint?: string };

const steps: {
  key: string;
  icon: typeof Layers;
  question: string;
  options: Option[];
}[] = [
  {
    key: 'product',
    icon: Layers,
    question: 'What are you building?',
    options: [
      { label: 'Web app', value: 1, hint: 'Dashboard, SaaS, portal' },
      { label: 'Mobile app', value: 1.2, hint: 'iOS / Android' },
      { label: 'Cloud / infra', value: 0.9, hint: 'Migration, DevOps' },
      { label: 'AI feature', value: 1.1, hint: 'Copilot, automation' },
    ],
  },
  {
    key: 'scope',
    icon: Rocket,
    question: 'How big is the scope?',
    options: [
      { label: 'MVP', value: 1, hint: '4–8 weeks' },
      { label: 'Growth', value: 1.8, hint: '8–16 weeks' },
      { label: 'Platform', value: 2.8, hint: '16–24 weeks' },
      { label: 'Enterprise', value: 4, hint: '24+ weeks' },
    ],
  },
  {
    key: 'design',
    icon: Sparkles,
    question: 'Design involvement?',
    options: [
      { label: 'Use our brand', value: 0.8, hint: 'Light styling' },
      { label: 'Refresh', value: 1, hint: 'UI redesign' },
      { label: 'Full UX', value: 1.25, hint: 'Research + system' },
    ],
  },
  {
    key: 'timeline',
    icon: Clock,
    question: 'How soon do you need it?',
    options: [
      { label: 'Flexible', value: 1, hint: '3+ months' },
      { label: 'Standard', value: 1.1, hint: '1–3 months' },
      { label: 'Rushed', value: 1.3, hint: '< 1 month' },
    ],
  },
];

const BASE_WEEKS = 6;
const BASE_LOW = 18000;
const BASE_HIGH = 30000;

export function ProjectEstimator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(steps.length).fill(0));

  const complete = step >= steps.length;
  const factor = useMemo(
    () => answers.reduce((acc, v) => acc * v, 1),
    [answers]
  );

  const weeksLow = Math.round(BASE_WEEKS * factor);
  const weeksHigh = Math.round(BASE_WEEKS * factor * 1.4);
  const costLow = Math.round((BASE_LOW * factor) / 1000) * 1000;
  const costHigh = Math.round((BASE_HIGH * factor * 1.4) / 1000) * 1000;

  const choose = (value: number) => {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    setTimeout(() => setStep((s) => s + 1), 180);
  };

  const reset = () => {
    setAnswers(Array(steps.length).fill(0));
    setStep(0);
  };

  const progress = Math.min((step / steps.length) * 100, 100);

  return (
    <section id="estimator" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="Project estimator"
          title="Estimate your project in under a minute"
          subtitle="Answer four quick questions to get a rough timeline and budget range. It's a starting point — we'll refine it together in a free consultation."
          align="center"
        />

        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-navy-100 bg-navy-50/40 shadow-navy">
            {/* Progress */}
            <div className="border-b border-navy-100 bg-white px-6 py-4">
              <div className="flex items-center justify-between text-xs font-600 text-navy-500">
                <span>{complete ? 'Estimate ready' : `Step ${step + 1} of ${steps.length}`}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
                <div
                  className="h-full rounded-full bg-navy-900 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {!complete ? (
                <StepView
                  step={steps[step]}
                  onChoose={choose}
                  onBack={() => setStep((s) => Math.max(0, s - 1))}
                  canBack={step > 0}
                />
              ) : (
                <Result
                  weeksLow={weeksLow}
                  weeksHigh={weeksHigh}
                  costLow={costLow}
                  costHigh={costHigh}
                  onReset={reset}
                />
              )}
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-navy-400">
          Estimates are directional only and based on typical engagements. Actual scope, timeline,
          and cost are confirmed during discovery.
        </p>
      </div>
    </section>
  );
}

function StepView({
  step,
  onChoose,
  onBack,
  canBack,
}: {
  step: (typeof steps)[number];
  onChoose: (v: number) => void;
  onBack: () => void;
  canBack: boolean;
}) {
  const Icon = step.icon;
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-700 text-navy-900">{step.question}</h3>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {step.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => onChoose(opt.value)}
            className="group flex items-center justify-between rounded-xl border border-navy-200 bg-white p-4 text-left transition-all hover:border-navy-900 hover:shadow-navy"
          >
            <span>
              <span className="block text-sm font-700 text-navy-900">{opt.label}</span>
              {opt.hint && <span className="mt-0.5 block text-xs text-navy-500">{opt.hint}</span>}
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy-50 text-navy-400 transition-all group-hover:bg-navy-900 group-hover:text-white">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {canBack && (
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-navy-500 transition-colors hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      )}
    </div>
  );
}

function Result({
  weeksLow, weeksHigh, costLow, costHigh, onReset,
}: {
  weeksLow: number; weeksHigh: number;
  costLow: number; costHigh: number; onReset: () => void;
}) {
  return (
    <div className="text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        <Check className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-xl font-700 text-navy-900">Your rough estimate</h3>
      <p className="mt-1.5 text-sm text-navy-500">Based on the answers you gave.</p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-navy-100 bg-white p-6">
          <Clock className="mx-auto h-6 w-6 text-accent-600" />
          <p className="mt-3 text-xs font-600 uppercase tracking-wider text-navy-400">Timeline</p>
          <p className="mt-1 text-2xl font-800 text-navy-900">
            {weeksLow}–{weeksHigh} <span className="text-base font-600 text-navy-500">weeks</span>
          </p>
        </div>
        <div className="rounded-2xl border border-navy-100 bg-white p-6">
          <DollarSign className="mx-auto h-6 w-6 text-accent-600" />
          <p className="mt-3 text-xs font-600 uppercase tracking-wider text-navy-400">Budget range</p>
          <p className="mt-1 text-2xl font-800 text-navy-900">
            ${costLow.toLocaleString()}–{costHigh.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <a
          href="#/contact"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-700 text-white transition-all hover:bg-navy-800 hover:shadow-navy"
        >
          Discuss this estimate
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-600 text-navy-700 ring-1 ring-navy-200 transition-all hover:bg-navy-50"
        >
          <X className="h-4 w-4" /> Start over
        </button>
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-navy-400">
        <ShieldCheck className="h-4 w-4" /> No commitment — just a starting conversation.
      </p>
    </div>
  );
}
