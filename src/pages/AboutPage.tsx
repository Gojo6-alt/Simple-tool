import React from 'react';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { TopAdSlot, BottomAdSlot } from '../components/ads';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <SEOHead
        title="About IndiaToolbox – Powerful Tools. Made Simple."
        description="Learn about IndiaToolbox: our mission, zero-tracking privacy philosophy, and modern client-side utility architecture."
        canonicalPath="/about"
      />

      <TopAdSlot />

      <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
        Company & Philosophy
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
        About IndiaToolbox
      </h1>

      <p className="text-base text-neutral-300 leading-relaxed mb-10">
        IndiaToolbox was built with a singular vision: online utilities should be fast, accurate, completely free, and built with uncompromising privacy.
      </p>

      <div className="space-y-5 text-sm text-neutral-300 leading-relaxed mb-10">
        <div className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center gap-3 font-bold text-white mb-2.5">
            <div className="p-2 bg-purple-600/20 text-purple-400 rounded-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-base">100% Client-Side Privacy</h2>
          </div>
          <p className="text-neutral-400">
            Most utility websites upload your numbers, financial figures, and text to remote web servers. At IndiaToolbox, all calculations and formatting run entirely within your local browser sandbox using modern JavaScript. Your confidential figures never touch a remote server.
          </p>
        </div>

        <div className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center gap-3 font-bold text-white mb-2.5">
            <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-base">No Accounts, No Friction</h2>
          </div>
          <p className="text-neutral-400">
            We never gate tools behind mandatory sign-ups, email capture popups, or credit card forms. When you need to estimate loan EMIs, convert lengths, or clean text, you get your result in seconds.
          </p>
        </div>

        <div className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <div className="flex items-center gap-3 font-bold text-white mb-2.5">
            <div className="p-2 bg-violet-600/20 text-violet-400 rounded-lg">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-base">Mathematical Rigor & Verification</h2>
          </div>
          <p className="text-neutral-400">
            Every calculator is grounded in standard mathematical, financial, and scientific standards. Whether computing compound interest, overtime wage multipliers, or academic GPA conversions, calculations are thoroughly verified.
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.08] pt-6 text-xs text-neutral-400">
        Have feedback, suggestions for a new tool, or noticed a bug? Visit our{' '}
        <a href="/contact" className="text-purple-400 underline font-medium">Contact & Feedback page</a>.
      </div>

      <BottomAdSlot />
    </div>
  );
};
