import React, { useState } from 'react';
import { ChevronRight, ChevronDown, BookOpen, HelpCircle, ArrowRight, Share2, Check } from 'lucide-react';
import { ToolConfig } from '../../types';
import { CATEGORIES } from '../../data/categories';
import { getToolBySlug } from '../../data/tools';
import { ToolIcon } from './ToolIcon';
import { TopAdSlot, InContentAdSlot, BottomAdSlot } from '../ads';
import { SEOHead } from './SEOHead';

interface ToolLayoutProps {
  tool: ToolConfig;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

export const ToolLayout: React.FC<ToolLayoutProps> = ({ tool, onNavigate, children }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [shareCopied, setShareCopied] = useState(false);
  const categoryMeta = CATEGORIES[tool.category];

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: tool.seoTitle,
          text: tool.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      }
    } catch {
      // ignore
    }
  };

  const relatedTools = (tool.relatedSlugs || [])
    .map((slug) => getToolBySlug(slug))
    .filter((t): t is ToolConfig => Boolean(t));

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* SEO & JSON-LD */}
      <SEOHead
        title={`${tool.name} – Free Online Calculator | IndiaToolbox`}
        description={tool.seoDescription}
        canonicalPath={`/tools/${tool.slug}`}
        type="WebApplication"
        faq={tool.faq}
        toolName={tool.name}
        category={categoryMeta?.name || 'Utilities'}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-6 flex-wrap">
        <button
          onClick={() => onNavigate('/')}
          className="hover:text-purple-300 transition-colors cursor-pointer"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <button
          onClick={() => onNavigate(`/categories/${tool.category}`)}
          className="hover:text-purple-300 transition-colors cursor-pointer"
        >
          {categoryMeta?.name || 'Tools'}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
          {tool.name}
        </span>
      </nav>

      {/* Top Banner Ad Slot Placeholder */}
      <TopAdSlot />

      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="p-3 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white rounded-xl shadow-[0_0_20px_-3px_rgba(168,85,247,0.4)] shrink-0">
              <ToolIcon name={tool.iconName} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 font-mono">
                  {categoryMeta?.name || 'Utility'}
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-[11px] text-neutral-400 font-mono">Instant Tool</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                {tool.name}
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleShare}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-300 bg-[#12141F] hover:bg-[#1A1C2C] hover:text-white border border-white/[0.1] rounded-lg transition-all cursor-pointer shrink-0"
            title="Share this tool"
          >
            {shareCopied ? <Check className="w-3.5 h-3.5 text-purple-400" /> : <Share2 className="w-3.5 h-3.5 text-neutral-400" />}
            <span>{shareCopied ? 'Link Copied' : 'Share'}</span>
          </button>
        </div>
      </header>

      {/* Main Interactive Tool Container */}
      <main className="bg-[#0E101A]/90 backdrop-blur-xl rounded-2xl border border-white/[0.1] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6)] p-5 sm:p-7 mb-8 relative">
        <div className="absolute top-0 right-1/4 w-64 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* In-Content Ad Slot Placeholder */}
      <InContentAdSlot />

      {/* How it Works & Formula Section */}
      <section className="bg-[#0B0C14]/80 backdrop-blur-md rounded-2xl border border-white/[0.08] p-5 sm:p-6 mb-8">
        <div className="flex items-center gap-2 text-white font-semibold text-base mb-3">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <h2>How It Works & Calculation Guide</h2>
        </div>
        <p className="text-sm text-neutral-300 leading-relaxed mb-4">
          {tool.howItWorks}
        </p>
        {tool.formula && (
          <div className="p-4 bg-[#11131E] rounded-xl border border-white/[0.08] text-xs font-mono text-purple-300 overflow-x-auto shadow-inner">
            <span className="text-neutral-500 select-none mr-2 font-sans font-medium uppercase text-[10px] tracking-wider">Formula:</span>
            <span>{tool.formula}</span>
          </div>
        )}
      </section>

      {/* Tool FAQ Section */}
      {tool.faq && tool.faq.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {tool.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0E101A]/80 rounded-xl border border-white/[0.08] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-medium text-sm text-white hover:text-purple-300 cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-purple-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-sm text-neutral-300 border-t border-white/[0.06] leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom Ad Slot Placeholder */}
      <BottomAdSlot />

      {/* Related Tools */}
      {relatedTools.length > 0 && (
        <section className="mt-8 pt-8 border-t border-white/[0.08]">
          <h2 className="text-base font-semibold text-white mb-4">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {relatedTools.map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => onNavigate(`/tools/${rel.slug}`)}
                className="text-left p-4 bg-[#0E101A]/80 hover:bg-[#141724] rounded-xl border border-white/[0.08] hover:border-purple-500/30 transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-[0_4px_20px_-3px_rgba(168,85,247,0.15)]"
              >
                <div>
                  <div className="p-2 bg-[#181B2B] rounded-lg w-fit text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors mb-2.5">
                    <ToolIcon name={rel.iconName} className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-purple-200">
                    {rel.name}
                  </div>
                  <div className="text-xs text-neutral-400 line-clamp-2 mt-1">
                    {rel.description}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
