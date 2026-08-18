import { Container } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-navy-50/40 pt-24">
      <Container>
        <div className="text-center">
          <p className="font-display text-7xl font-800 text-navy-900">404</p>
          <h1 className="mt-4 text-2xl font-700 text-navy-800">We couldn't find that page</h1>
          <p className="mx-auto mt-3 max-w-md text-navy-600">
            The page you're looking for may have moved. Let's get you back on track.
          </p>
          <a
            href="#/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-700 text-white transition-all hover:bg-navy-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </a>
        </div>
      </Container>
    </section>
  );
}
