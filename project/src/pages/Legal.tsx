import { Container } from '@/components/ui';

function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="bg-white pt-28 lg:pt-36">
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-12 lg:py-16">
          <h1 className="text-3xl font-800 text-navy-900 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-navy-500">Last updated: {updated}</p>
        </Container>
      </header>
      <Container className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-navy-700">{children}</div>
      </Container>
    </article>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <p>
        Nexavera ("we", "us", "our") respects your privacy. This policy explains what we collect when
        you use our website and services, why we collect it, and the choices you have.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Information we collect</h2>
      <p>
        We collect the details you voluntarily share through our contact and project estimator forms,
        including your name, email address, company, and project notes. We also collect limited
        analytics data such as pages visited and approximate region, used in aggregate to improve the site.
      </p>
      <h2 className="text-xl font-700 text-navy-900">How we use information</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>To respond to your inquiry and schedule consultations.</li>
        <li>To send relevant project proposals and follow-ups.</li>
        <li>To improve our website, content, and services over time.</li>
        <li>To meet legal, accounting, and contractual obligations.</li>
      </ul>
      <h2 className="text-xl font-700 text-navy-900">Data sharing</h2>
      <p>
        We do not sell your personal information. We share data only with trusted processors that help
        us operate (such as hosting and email providers), under contracts that require them to protect
        your data and use it only for the purpose we share it.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Data retention</h2>
      <p>
        We keep inquiry data for as long as needed to respond and for a reasonable period afterward for
        record-keeping. You may request deletion of your data at any time by emailing hello@nexavera.com.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Security</h2>
      <p>
        We follow industry best practices and SOC 2-aligned controls to protect your data. No method of
        transmission or storage is fully secure, but we work hard to protect your information using
        encryption, access controls, and regular reviews.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Your rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, or delete your personal
        data, and to object to or restrict certain processing. To exercise any right, contact us at
        hello@nexavera.com.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Contact</h2>
      <p>
        Questions about this policy? Email hello@nexavera.com or write to us at our Lahore or Doha studios.
      </p>
    </LegalLayout>
  );
}

export function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="August 2026">
      <p>
        These terms govern your use of the Nexavera website and our engagement for professional services.
        By using the site or contacting us, you agree to these terms.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Use of the website</h2>
      <p>
        You may browse and use this site for legitimate business purposes. You agree not to misuse the
        site, attempt to gain unauthorized access, or submit content that is unlawful, infringing, or
        harmful.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Inquiries and proposals</h2>
      <p>
        Information you share through our forms is used to prepare a response or proposal. Any proposal
        we provide is valid for 30 days unless stated otherwise and does not constitute a binding contract
        until a signed agreement is in place.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Intellectual property</h2>
      <p>
        All content on this site — including text, graphics, logos, and design — is owned by Nexavera or
        its licensors and may not be reproduced without permission. Client-owned code and deliverables are
        governed by the terms of the individual engagement agreement.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Disclaimers</h2>
      <p>
        This site is provided "as is" without warranties of any kind. We do not guarantee that the site
        will be error-free or uninterrupted. Project estimates provided on the site are directional only
        and not a binding quote.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Nexavera shall not be liable for any indirect, incidental,
        or consequential damages arising from your use of the site or reliance on any content provided here.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Governing law</h2>
      <p>
        These terms are governed by the laws applicable to our studios in Pakistan and Qatar. Disputes
        will be resolved in the competent courts of the relevant jurisdiction.
      </p>
      <h2 className="text-xl font-700 text-navy-900">Contact</h2>
      <p>
        Questions about these terms? Email hello@nexavera.com.
      </p>
    </LegalLayout>
  );
}
