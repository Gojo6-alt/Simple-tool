import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { TopAdSlot, BottomAdSlot } from '../components/ads';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <SEOHead
        title="Privacy Policy – IndiaToolbox"
        description="IndiaToolbox Privacy Policy: We do not require accounts, track personal information, or store your inputs on remote servers."
        canonicalPath="/privacy-policy"
      />

      <TopAdSlot />

      <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
        Legal
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
        Privacy Policy
      </h1>
      <p className="text-xs text-neutral-400 mb-8 font-mono">
        Last updated: October 2026 · Effective immediately
      </p>

      <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">1. Overview and Core Privacy Principle</h2>
          <p className="text-neutral-400">
            At IndiaToolbox (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take your digital privacy seriously. Our tools are architected specifically to function without collecting, storing, or transmitting personal information, documents, or calculation inputs to remote web servers.
          </p>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">2. What Information We Do NOT Collect</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
            <li>We do not require user registration, usernames, or passwords.</li>
            <li>We do not store your calculated numbers, loan values, or salary details.</li>
            <li>We do not upload or retain text pasted into our text counters or sanitizers.</li>
            <li>We do not sell personal data to data brokers or third parties.</li>
          </ul>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">3. Local Browser Storage (localStorage)</h2>
          <p className="text-neutral-400">
            To provide convenience features such as &ldquo;Recently Used Tools&rdquo;, IndiaToolbox stores an array of tool slugs and names directly in your browser&apos;s <code>localStorage</code>. This data resides solely on your client device, is never uploaded to our servers, and can be deleted at any time by clicking &ldquo;Clear History&rdquo; or clearing your browser cache.
          </p>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">4. Advertising and Analytics</h2>
          <p className="text-neutral-400">
            To maintain our free tools, IndiaToolbox may display non-intrusive advertising units provided by vetted network partners. These providers may use standard cookies or device identifiers to serve contextual advertisements in compliance with international privacy regulations.
          </p>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">5. Contact</h2>
          <p className="text-neutral-400">
            If you have questions about our privacy practices, please contact us via our Contact page or at privacy@indiatoolbox.com.
          </p>
        </section>
      </div>

      <BottomAdSlot />
    </div>
  );
};
