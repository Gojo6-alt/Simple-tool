import React, { useState, useMemo } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { TOOLS } from '../data/tools';
import { CATEGORY_LIST } from '../data/categories';
import { ToolIcon } from '../components/common/ToolIcon';
import { TopAdSlot, BottomAdSlot } from '../components/ads';
import { SEOHead } from '../components/common/SEOHead';

interface AllToolsPageProps {
  onNavigate: (path: string) => void;
  initialCategory?: string;
}

export const AllToolsPage: React.FC<AllToolsPageProps> = ({ onNavigate, initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popularity' | 'name'>('popularity');

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      const matchCat = activeCategory === 'all' || tool.category === activeCategory;
      const cleanQ = searchQuery.toLowerCase().trim();
      const matchSearch =
        !cleanQ ||
        tool.name.toLowerCase().includes(cleanQ) ||
        tool.description.toLowerCase().includes(cleanQ) ||
        tool.keywords.some((k) => k.toLowerCase().includes(cleanQ));
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return b.popularity - a.popularity;
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <SEOHead
        title="All Tools & Calculators – IndiaToolbox"
        description="Browse all 32 free online calculators, unit converters, and text utilities on IndiaToolbox."
        canonicalPath="/tools"
      />

      <TopAdSlot />

      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono block mb-1">
          Catalog
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          All Online Tools
        </h1>
        <p className="text-sm text-neutral-300 mt-1">
          Explore all {TOOLS.length} free calculators, unit converters, and text utilities.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-[#0E101A]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/[0.1] mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full pl-10 pr-3.5 py-2 bg-[#121422] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {/* Sort selection */}
          <div className="flex items-center gap-2 text-xs w-full sm:w-auto justify-end">
            <span className="text-neutral-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-[#121422] border border-white/[0.1] rounded-lg text-xs font-semibold text-white focus:border-purple-500"
            >
              <option value="popularity">Most Popular</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Categories segmented buttons */}
        <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]'
                : 'bg-[#121422] text-neutral-400 hover:text-white hover:bg-[#1A1D30]'
            }`}
          >
            All Tools ({TOOLS.length})
          </button>
          {CATEGORY_LIST.slice(0, 6).map((cat) => {
            const count = TOOLS.filter((t) => t.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]'
                    : 'bg-[#121422] text-neutral-400 hover:text-white hover:bg-[#1A1D30]'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Tools */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => onNavigate(`/tools/${tool.slug}`)}
              className="p-5 bg-[#0E101A]/90 hover:bg-[#141726] rounded-2xl border border-white/[0.08] hover:border-purple-500/35 transition-all text-left cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-[0_4px_25px_-5px_rgba(168,85,247,0.2)] hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="p-2.5 bg-[#171A2A] rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <ToolIcon name={tool.iconName} className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    {tool.category}
                  </span>
                </div>
                <h2 className="text-base font-bold text-white group-hover:text-purple-200">
                  {tool.name}
                </h2>
                <p className="text-xs text-neutral-400 line-clamp-2 mt-1.5 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500">
                <span>Free · Instant</span>
                <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Open Tool <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-[#0E101A] rounded-2xl border border-white/[0.08] text-sm text-neutral-400">
          No tools match your query &ldquo;{searchQuery}&rdquo;.
        </div>
      )}

      <BottomAdSlot />
    </div>
  );
};
