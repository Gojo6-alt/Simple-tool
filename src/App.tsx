/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { AllToolsPage } from './pages/AllToolsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ToolPage } from './pages/ToolPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { SearchBar } from './components/common/SearchBar';
import { X } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Synchronize with browser history (popstate for back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: string) => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname !== path) {
        window.history.pushState(null, '', path);
      }
    }
    setCurrentPath(path);
    setIsSearchModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Keyboard shortcut '/' to trigger quick search from anywhere
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA'].includes((document.activeElement?.tagName || ''))
      ) {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Router resolution
  const renderRoute = () => {
    const path = currentPath.replace(/\/+$/, '') || '/';

    if (path === '/') {
      return <HomePage onNavigate={navigate} />;
    }

    if (path === '/tools') {
      return <AllToolsPage onNavigate={navigate} />;
    }

    if (path.startsWith('/tools/')) {
      const slug = path.replace('/tools/', '');
      return <ToolPage slug={slug} onNavigate={navigate} />;
    }

    if (path === '/categories') {
      return <CategoriesPage onNavigate={navigate} />;
    }

    if (path.startsWith('/categories/')) {
      const categorySlug = path.replace('/categories/', '');
      return <CategoriesPage categorySlug={categorySlug} onNavigate={navigate} />;
    }

    if (path === '/about') {
      return <AboutPage />;
    }

    if (path === '/contact') {
      return <ContactPage />;
    }

    if (path === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }

    if (path === '/terms') {
      return <TermsPage />;
    }

    if (path === '/disclaimer') {
      return <DisclaimerPage />;
    }

    // Default Fallback
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090A0F] text-neutral-100 selection:bg-purple-600 selection:text-white bg-grid-pattern">
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {renderRoute()}
      </div>

      {/* Search Modal Dialog */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md">
          <div className="w-full max-w-xl bg-[#0F111D]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/[0.12] p-4 sm:p-6 relative">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
                Quick Search Tools
              </span>
              <button
                type="button"
                onClick={() => setIsSearchModalOpen(false)}
                className="p-1 text-neutral-400 hover:text-white cursor-pointer rounded transition-colors"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <SearchBar
              onSelectTool={(slug) => navigate(`/tools/${slug}`)}
              autoFocus={true}
              placeholder="Search 15+ free tools..."
            />
          </div>
        </div>
      )}

      {/* Professional Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
