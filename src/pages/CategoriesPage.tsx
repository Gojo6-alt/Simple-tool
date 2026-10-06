import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CATEGORIES, CATEGORY_LIST } from '../data/categories';
import { TOOLS } from '../data/tools';
import { ToolCategory } from '../types';
import { ToolIcon } from '../components/common/ToolIcon';
import { TopAdSlot, BottomAdSlot } from '../components/ads';
import { SEOHead } from '../components/common/SEOHead';

interface CategoriesPageProps {
  categorySlug?: string;
  onNavigate: (path: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({ categorySlug, onNavigate }) => {
  const selectedCategory = categorySlug ? CATEGORIES[categorySlug as ToolCategory] : null;

  if (selectedCategory) {
    const toolsInCategory = TOOLS.filter((t) => t.category === selectedCategory.id);

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <SEOHead
          title={`${selectedCategory.name} Online Tools – IndiaToolbox`}
          description={selectedCategory.description}
          canonicalPath={`/categories/${selectedCategory.slug}`}
        />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-purple-300 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <button
            onClick={() => onNavigate('/categories')}
            className="hover:text-purple-300 cursor-pointer"
          >
            Categories
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-white font-medium">{selectedCategory.name}</span>
        </nav>

        <TopAdSlot />

        <div className="mb-8">
          <div className="flex items-center gap-3.5 mb-2">
            <div className="p-3 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white rounded-xl shadow-[0_0_20px_-3px_rgba(168,85,247,0.4)]">
              <ToolIcon name={selectedCategory.iconName} className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {selectedCategory.name}
              </h1>
              <p className="text-sm text-neutral-300 mt-1">
                {selectedCategory.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {toolsInCategory.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => onNavigate(`/tools/${tool.slug}`)}
              className="p-5 bg-[#0E101A]/90 hover:bg-[#141726] rounded-2xl border border-white/[0.08] hover:border-purple-500/35 transition-all text-left cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-[0_4px_25px_-5px_rgba(168,85,247,0.2)] hover:-translate-y-0.5"
            >
              <div>
                <div className="p-2.5 bg-[#171A2A] rounded-xl w-fit text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors mb-3">
                  <ToolIcon name={tool.iconName} className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-white group-hover:text-purple-200">
                  {tool.name}
                </h2>
                <p className="text-xs text-neutral-400 line-clamp-2 mt-1.5 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500">
                <span>Free tool</span>
                <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Open Tool <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <BottomAdSlot />
      </div>
    );
  }

  // All categories overview
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <SEOHead
        title="Tool Categories – IndiaToolbox"
        description="Browse calculators, converters, financial utilities, and text tools organized by category."
        canonicalPath="/categories"
      />

      <TopAdSlot />

      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
          Taxonomy
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Tool Categories
        </h1>
        <p className="text-sm text-neutral-300 mt-1">
          Explore utilities organized by functional purpose and domain.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {CATEGORY_LIST.map((cat) => {
          const tools = TOOLS.filter((t) => t.category === cat.id);
          return (
            <div
              key={cat.id}
              className="p-6 bg-[#0E101A]/90 rounded-2xl border border-white/[0.08] hover:border-purple-500/30 transition-all flex flex-col justify-between shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#171A2A] text-purple-400 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <ToolIcon name={cat.iconName} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 rounded-full">
                    {tools.length} tools
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white mb-1.5">{cat.name}</h2>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {cat.description}
                </p>

                {tools.length > 0 && (
                  <ul className="mt-4 space-y-2 text-xs border-t border-white/[0.06] pt-3">
                    {tools.slice(0, 4).map((tool) => (
                      <li key={tool.id}>
                        <button
                          type="button"
                          onClick={() => onNavigate(`/tools/${tool.slug}`)}
                          className="text-neutral-400 hover:text-purple-300 transition-colors cursor-pointer block truncate text-left w-full"
                        >
                          &bull; {tool.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => onNavigate(`/categories/${cat.slug}`)}
                  className="w-full text-center py-2.5 text-xs font-bold text-white bg-[#141726] hover:bg-purple-600 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-white/[0.08] hover:border-purple-500"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <BottomAdSlot />
    </div>
  );
};
