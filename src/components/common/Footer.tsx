import React from 'react';
import { Sparkles, Shield, Cpu, Zap } from 'lucide-react';
import { CATEGORY_LIST } from '../../data/categories';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080C] text-neutral-400 text-sm mt-20 relative overflow-hidden">
      {/* Subtle top violet ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Purpose */}
          <div className="md:col-span-1">
            <button
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2 group cursor-pointer text-left block select-none"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-violet-500 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0C14] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                IndiaToolbox
              </span>
            </button>
            <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
              Smart calculators and everyday tools designed to save you time and make difficult tasks simple. Completely private and instant.
            </p>
            <div className="mt-4 flex items-center gap-3 text-[11px] text-neutral-500 font-mono">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-emerald-400" /> Private</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-purple-400" /> Instant</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-indigo-400" /> Client-side</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3.5">
              Categories
            </div>
            <ul className="space-y-2 text-xs">
              {CATEGORY_LIST.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate(`/categories/${cat.slug}`)}
                    className="hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3.5">
              Popular Tools
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/tools/salary-calculator')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Salary Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tools/emi-calculator')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Loan EMI Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tools/gst-calculator')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  GST Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tools/percentage-calculator')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Percentage Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tools/age-calculator')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Age Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tools/word-counter')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Word & Character Counter
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3.5">
              Platform & Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/tools')}
                  className="hover:text-purple-400 transition-colors cursor-pointer text-purple-300 font-medium"
                >
                  All 32 Tools Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  About IndiaToolbox
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Contact & Feedback
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/privacy-policy')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/terms')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/disclaimer')}
                  className="hover:text-purple-400 transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            &copy; 2026 IndiaToolbox. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>Client-side execution · Zero cookies required</span>
            <span>·</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 hover:underline"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
