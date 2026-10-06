import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { TopAdSlot, BottomAdSlot } from '../components/ads';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <SEOHead
        title="Disclaimer – IndiaToolbox"
        description="Important mathematical, financial, and educational disclaimer for IndiaToolbox calculators."
        canonicalPath="/disclaimer"
      />

      <TopAdSlot />

      <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
        Notice
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
        Disclaimer
      </h1>
      <p className="text-xs text-neutral-400 mb-8 font-mono">
        Last updated: October 2026
      </p>

      <div className="p-5 bg-amber-950/30 border border-amber-500/30 rounded-2xl flex items-start gap-3.5 mb-8 text-xs text-amber-200 leading-relaxed shadow-sm">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <p>
          The calculators, unit converters, and algorithms provided on IndiaToolbox are intended strictly for educational, informational, and general estimation purposes.
        </p>
      </div>

      <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">1. No Financial or Tax Advice</h2>
          <p className="text-neutral-400">
            Our financial calculators (including Loan EMI, Salary, Overtime, GST, and Compound Interest) provide estimates based on user-supplied numbers and standard mathematical formulas. Real-world financial contracts, mortgage terms, payroll deductions, and tax liabilities depend upon specific jurisdictional laws, bank lending criteria, employer policies, and deductions. Always consult a certified financial planner (CFP) or certified chartered accountant (CA) before making major financial commitments.
          </p>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">2. Educational & Academic Grading Disclaimers</h2>
          <p className="text-neutral-400">
            Grading systems, CGPA conversions (such as the 9.5 multiplier), and attendance guidelines vary between universities, school boards, and regional educational departments. Results from our Marks to Percentage, CGPA Converter, and Attendance Calculator should be verified against your specific institution&apos;s official handbook.
          </p>
        </section>

        <section className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08]">
          <h2 className="text-base font-bold text-white mb-2">3. Accuracy of Calculations</h2>
          <p className="text-neutral-400">
            While IndiaToolbox exercises diligence to ensure formulas adhere strictly to standard mathematical algorithms, we make no guarantees regarding complete error-free execution or suitability for mission-critical scientific applications. IndiaToolbox shall not be liable for any losses or damages resulting from reliance on calculation outputs.
          </p>
        </section>
      </div>

      <BottomAdSlot />
    </div>
  );
};
