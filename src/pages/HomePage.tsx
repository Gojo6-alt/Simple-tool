import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  History,
  Trash2,
  Sparkles,
  ChevronDown,
  Zap,
  CheckCircle,
  Coins,
  GraduationCap,
  Briefcase,
  Calculator,
  ArrowRightLeft,
  FileText,
  DollarSign,
  Clock,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { SearchBar } from '../components/common/SearchBar';
import { ToolIcon } from '../components/common/ToolIcon';
import { POPULAR_TOOLS, TOOLS } from '../data/tools';
import { getRecentlyUsedTools, clearRecentlyUsedTools } from '../utils/recentTools';
import { RecentToolItem } from '../types';
import { TopAdSlot, InContentAdSlot, BottomAdSlot } from '../components/ads';
import { SEOHead } from '../components/common/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [recentTools, setRecentTools] = useState<RecentToolItem[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setRecentTools(getRecentlyUsedTools());
  }, []);

  const handleClearRecent = () => {
    clearRecentlyUsedTools();
    setRecentTools([]);
  };

  const homeFaqs = [
    {
      q: 'Is IndiaToolbox completely free to use?',
      a: 'Yes, every calculator and converter is 100% free with no registration, no subscription fees, and no feature limits.',
    },
    {
      q: 'Does IndiaToolbox store my calculations or personal data?',
      a: 'Never. All calculations run strictly client-side inside your own web browser. Your numbers, financial inputs, and text never leave your machine.',
    },
    {
      q: 'Do the calculators work on Android and iOS mobile devices?',
      a: 'Yes. The entire platform is built mobile-first with optimized touch controls, high readability, and rapid loading even on mobile networks.',
    },
    {
      q: 'Can I bookmark or share individual tool URLs?',
      a: 'Yes. Every tool has its own clean, shareable URL (like /tools/salary-calculator or /tools/emi-calculator).',
    },
  ];

  // Specific curated category groups requested by the prompt
  const customCategories = [
    {
      title: 'Money & Salary',
      desc: 'Salary breakdown, loan EMIs, interest & compound growth',
      path: '/categories/finance',
      icon: DollarSign,
      color: 'from-purple-500/20 to-indigo-500/20',
      badge: '9 Tools',
    },
    {
      title: 'Student Tools',
      desc: 'Exam percentages, CGPA conversions & attendance planning',
      path: '/categories/education',
      icon: GraduationCap,
      color: 'from-blue-500/20 to-purple-500/20',
      badge: '4 Tools',
    },
    {
      title: 'Business Tools',
      desc: 'GST tax, profit & loss, discounts, overtime & invoices',
      path: '/categories/finance',
      icon: Briefcase,
      color: 'from-violet-500/20 to-purple-500/20',
      badge: '5 Tools',
    },
    {
      title: 'Everyday Calculators',
      desc: 'Age, date differences, percentages, averages & ratios',
      path: '/categories/calculators',
      icon: Calculator,
      color: 'from-indigo-500/20 to-blue-500/20',
      badge: '7 Tools',
    },
    {
      title: 'Converters',
      desc: 'Length, weight, temperature, speed, area & storage',
      path: '/categories/conversion',
      icon: ArrowRightLeft,
      color: 'from-purple-500/20 to-pink-500/20',
      badge: '7 Tools',
    },
    {
      title: 'Generators & Text',
      desc: 'Word counting, case converters, space sanitizers & cleaning',
      path: '/categories/text',
      icon: FileText,
      color: 'from-fuchsia-500/20 to-purple-500/20',
      badge: '5 Tools',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-purple-900/20 via-violet-900/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[300px] right-0 w-[500px] h-[400px] bg-indigo-900/15 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-0 w-[500px] h-[400px] bg-purple-900/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <SEOHead
          title="IndiaToolbox – Powerful Tools. Made Simple."
          description="Smart calculators and everyday tools designed to save you time and make difficult tasks simple."
          canonicalPath="/"
        />

        <TopAdSlot />

        {/* ==================================================
            HOMEPAGE HERO SECTION + FLOATING TOOL DASHBOARD
            ================================================== */}
        <section className="pt-6 pb-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Small badge above heading */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-[11px] font-semibold text-purple-300 font-mono tracking-wider shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>100% FREE • FAST • SIMPLE</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Powerful Tools.{' '}
                <span className="block mt-1 bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                  Made Simple.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Smart calculators and everyday tools designed to save you time and make difficult tasks simple.
              </p>

              {/* Two Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/tools')}
                  className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_-2px_rgba(168,85,247,0.85)] hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Explore All Tools</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#popular-tools"
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-neutral-200 bg-[#121422] hover:bg-[#1A1D30] hover:text-white border border-white/[0.12] hover:border-purple-500/40 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Popular Tools</span>
                </a>
              </div>

              {/* Global Search Bar */}
              <div className="pt-4 max-w-xl mx-auto lg:mx-0">
                <SearchBar onSelectTool={(slug) => onNavigate(`/tools/${slug}`)} />
              </div>
            </div>

            {/* Right Column: Floating Tool Dashboard Preview */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

              <div className="bg-[#0C0E18]/90 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] relative space-y-3">
                {/* Header of dashboard preview */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 font-medium ml-2">
                      IndiaToolbox Workspace
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded border border-purple-500/30">
                    LIVE PREVIEW
                  </span>
                </div>

                {/* Card 1: Salary Calculator Mini Preview */}
                <button
                  type="button"
                  onClick={() => onNavigate('/tools/salary-calculator')}
                  className="w-full p-3 bg-[#131524] hover:bg-[#1A1D33] rounded-xl border border-white/[0.08] hover:border-purple-500/40 transition-all text-left flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-purple-300">
                        Salary Calculator
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        CTC ₹8.4L → ₹70,000 / mo
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white font-mono tabular-nums block">
                      ₹70,000
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono">₹404/hr</span>
                  </div>
                </button>

                {/* Card 2: Loan EMI Calculator Mini Preview */}
                <button
                  type="button"
                  onClick={() => onNavigate('/tools/emi-calculator')}
                  className="w-full p-3 bg-[#131524] hover:bg-[#1A1D33] rounded-xl border border-white/[0.08] hover:border-purple-500/40 transition-all text-left flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                      <Coins className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-purple-300">
                        EMI Calculator
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        ₹15 Lakh @ 8.5% (15 yrs)
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white font-mono tabular-nums block">
                      ₹14,771
                    </span>
                    <span className="text-[9px] text-neutral-400 font-mono">/month</span>
                  </div>
                </button>

                {/* Card 3: GST Calculator Mini Preview */}
                <button
                  type="button"
                  onClick={() => onNavigate('/tools/gst-calculator')}
                  className="w-full p-3 bg-[#131524] hover:bg-[#1A1D33] rounded-xl border border-white/[0.08] hover:border-purple-500/40 transition-all text-left flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-purple-300">
                        GST Calculator
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        Base ₹10,000 + 18% GST
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white font-mono tabular-nums block">
                      ₹11,800
                    </span>
                    <span className="text-[9px] text-purple-300 font-mono">₹1,800 tax</span>
                  </div>
                </button>

                {/* Card 4: Percentage Calculator Mini Preview */}
                <button
                  type="button"
                  onClick={() => onNavigate('/tools/percentage-calculator')}
                  className="w-full p-3 bg-[#131524] hover:bg-[#1A1D33] rounded-xl border border-white/[0.08] hover:border-purple-500/40 transition-all text-left flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-purple-300">
                        Percentage Calculator
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        15% of ₹2,500
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white font-mono tabular-nums block">
                      375.00
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono">Instant</span>
                  </div>
                </button>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-neutral-400 font-mono">
                    32+ tools active · No login required
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Recently Used Tools (Shown if user has visited tools) */}
        {recentTools.length > 0 && (
          <section className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-purple-400" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Recently Used
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClearRecent}
                className="text-xs text-neutral-500 hover:text-rose-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear History</span>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {recentTools.map((item) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => onNavigate(`/tools/${item.slug}`)}
                  className="p-3 bg-[#0F111C]/90 hover:bg-[#171A2B] rounded-xl border border-white/[0.08] hover:border-purple-500/40 text-left transition-all cursor-pointer group"
                >
                  <div className="text-xs font-semibold text-white truncate group-hover:text-purple-300">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 capitalize mt-0.5">
                    {item.category}
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ==================================================
            FEATURE SECTION: WHY INDIATOOLBOX
            ================================================== */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-block mb-2 text-xs font-semibold font-mono tracking-wider text-purple-400 uppercase">
              Core Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Everything You Need.{' '}
              <span className="text-purple-400">In One Place.</span>
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Engineered with modern web standards for maximum speed, zero friction, and uncompromising privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: FAST */}
            <div className="p-6 bg-[#0E101A]/80 rounded-2xl border border-white/[0.08] hover:border-purple-500/30 transition-all shadow-sm hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/30 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">FAST</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Instant calculations with no unnecessary steps. All logic runs directly on your device with zero server latency.
              </p>
            </div>

            {/* Card 2: SIMPLE */}
            <div className="p-6 bg-[#0E101A]/80 rounded-2xl border border-white/[0.08] hover:border-purple-500/30 transition-all shadow-sm hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/30 group-hover:scale-105 transition-transform">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SIMPLE</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Clean interfaces anyone can understand. Straightforward inputs, live reactive results, and 1-click copy buttons.
              </p>
            </div>

            {/* Card 3: FREE */}
            <div className="p-6 bg-[#0E101A]/80 rounded-2xl border border-white/[0.08] hover:border-purple-500/30 transition-all shadow-sm hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] group">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-4 border border-violet-500/30 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">FREE</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Useful tools available without complicated sign-ups. No account requirements, subscriptions, or credit cards.
              </p>
            </div>
          </div>
        </section>

        {/* InContent Ad Slot Placeholder */}
        <InContentAdSlot />

        {/* ==================================================
            CATEGORY SECTION
            ================================================== */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
                Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Explore Categories
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/categories')}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
            >
              <span>All Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.title}
                  type="button"
                  onClick={() => onNavigate(cat.path)}
                  className="p-5 bg-[#0E101A]/90 hover:bg-[#141726] rounded-2xl border border-white/[0.08] hover:border-purple-500/30 transition-all text-left cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-[0_4px_25px_-5px_rgba(168,85,247,0.2)] hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="p-2.5 bg-[#171A2A] rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                        {cat.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-200">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
                    <span>Browse tools</span>
                    <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Explore &rarr;
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ==================================================
            POPULAR TOOLS SECTION
            ================================================== */}
        <section id="popular-tools" className="mb-20 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
                Top Utilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Popular Tools
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/tools')}
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 cursor-pointer"
            >
              <span>View All Tools ({TOOLS.length}) &rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {POPULAR_TOOLS.map((tool) => (
              <button
                key={tool.id}
                type="button"
                onClick={() => onNavigate(`/tools/${tool.slug}`)}
                className="p-4 sm:p-5 bg-[#0E101A]/90 hover:bg-[#141726] rounded-2xl border border-white/[0.08] hover:border-purple-500/35 transition-all text-left cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-[0_4px_25px_-5px_rgba(168,85,247,0.2)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="p-2.5 bg-[#171A2A] rounded-xl w-fit text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors mb-3">
                    <ToolIcon name={tool.iconName} className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-200">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 mt-1.5 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase">
                    {tool.category}
                  </span>
                  <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Open Tool &rarr;
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ==================================================
            FAQ SECTION
            ================================================== */}
        <section className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
              Need Help?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0E101A]/80 rounded-xl border border-white/[0.08] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-purple-300 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-purple-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-sm text-neutral-300 border-t border-white/[0.06] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <BottomAdSlot />
      </div>
    </div>
  );
};
