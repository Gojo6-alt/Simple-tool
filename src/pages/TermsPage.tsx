import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { TopAdSlot, BottomAdSlot } from '../components/ads';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <SEOHead
        title="Terms of Use – IndiaToolbox"
        description="Terms of Use for IndiaToolbox. Permitted uses, disclaimer, and conditions for our free online utility website."
        canonicalPath="/terms"
      />

      <TopAdSlot />

      <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
        Legal
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
        Terms of Use
      </h1>
      <p className="text-xs text-neutral-400 mb-8 font-mono">
        Last updated: October 2026
      </p>

      <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">1. Acceptance of Terms</h2>
          <p className="text-neutral-400">
            By accessing or using IndiaToolbox, you agree to be bound by these Terms of Use. If you do not agree to these terms, please refrain from using our online utilities.
          </p>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">2. Permitted Use</h2>
          <p className="text-neutral-400">
            IndiaToolbox provides free calculators and utilities for personal, educational, and commercial calculation needs. You may use all interactive tools without fee or license restriction. However, you agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 mt-2">
            <li>Engage in denial-of-service or automated abusive scraping attacks.</li>
            <li>Attempt to reverse-engineer delivery scripts.</li>
            <li>Misrepresent IndiaToolbox as your own product or service.</li>
          </ul>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">3. Intellectual Property</h2>
          <p className="text-neutral-400">
            All original code, interface designs, branding, and editorial guides on IndiaToolbox are the intellectual property of IndiaToolbox. Mathematical formulas and public conversion constants remain in the public domain.
          </p>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">4. Disclaimer of Warranties</h2>
          <p className="text-neutral-400">
            The services and calculation outputs are provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind.
          </p>
        </section>
      </div>

      <BottomAdSlot />
    </div>
  );
};
