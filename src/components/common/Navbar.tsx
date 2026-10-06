import React, { useState } from 'react';
import { Search, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'All Tools', path: '/tools' },
    { label: 'Categories', path: '/categories' },
    { label: 'About', path: '/about' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090A0F]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: IndiaToolbox Logo with modern icon */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-2.5 group cursor-pointer text-left select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-violet-500 p-[1px] shadow-[0_0_15px_-2px_rgba(168,85,247,0.5)] flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0B0C14] rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-neutral-100">
              IndiaToolbox
            </span>
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full hidden sm:inline-block">
              PRO
            </span>
          </div>
        </button>

        {/* Center: Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`transition-colors cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'hover:text-neutral-200'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Search + "Explore Tools" Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onOpenSearch) onOpenSearch();
              else handleLinkClick('/tools');
            }}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-400 bg-[#12141F] hover:bg-[#1A1C2C] border border-white/[0.08] hover:border-purple-500/40 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-xs"
            title="Search all tools (Press /)"
          >
            <Search className="w-3.5 h-3.5 text-neutral-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-[#1B1E2E] border border-white/[0.1] rounded text-neutral-400 font-mono">
              /
            </kbd>
          </button>

          <button
            onClick={() => handleLinkClick('/tools')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_-3px_rgba(168,85,247,0.7)] cursor-pointer whitespace-nowrap"
          >
            <span>Explore Tools</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-[#161826] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c0d15]/95 backdrop-blur-2xl px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleLinkClick(link.path)}
              className="w-full text-left px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-[#161828] hover:text-white rounded-lg transition-colors cursor-pointer block"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400 px-3">
            <span>100% Free · Client-side</span>
            <button
              onClick={() => handleLinkClick('/tools')}
              className="text-purple-400 font-semibold hover:underline flex items-center gap-1"
            >
              All Tools &rarr;
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
