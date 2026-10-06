import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { ToolConfig } from '../../types';
import { searchTools } from '../../data/tools';
import { ToolIcon } from './ToolIcon';

interface SearchBarProps {
  onSelectTool: (slug: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSelectTool,
  placeholder = 'Search 15+ free tools...',
  autoFocus = false,
  className = '',
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchTools(query).slice(0, 8);
  }, [query]);

  const quickSearches = [
    { label: 'Salary', q: 'salary' },
    { label: 'EMI Loan', q: 'emi' },
    { label: 'GST Tax', q: 'gst' },
    { label: 'Percentage', q: 'percentage' },
    { label: 'Age', q: 'age' },
    { label: 'Word Counter', q: 'word' },
    { label: 'Length', q: 'length' },
    { label: 'Attendance', q: 'attendance' },
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Shortcut key '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = (tool: ToolConfig) => {
    setQuery('');
    setIsOpen(false);
    onSelectTool(tool.slug);
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-purple-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-11 py-3.5 sm:py-4 bg-[#11131E]/90 border border-white/[0.12] hover:border-purple-500/40 rounded-xl text-white placeholder:text-neutral-400 text-sm sm:text-base backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-3.5 p-1 text-neutral-400 hover:text-white cursor-pointer rounded-md transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggested Quick Searches */}
      {!query && (
        <div className="mt-3 flex items-center gap-1.5 flex-wrap text-xs text-neutral-400">
          <span className="font-medium text-neutral-400 mr-1 text-[11px] uppercase tracking-wider">
            Popular:
          </span>
          {quickSearches.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setQuery(item.q);
                setIsOpen(true);
                inputRef.current?.focus();
              }}
              className="px-2.5 py-1 bg-[#131522] hover:bg-[#1D2033] hover:text-purple-300 border border-white/[0.08] hover:border-purple-500/30 text-neutral-300 rounded-lg transition-colors cursor-pointer text-xs"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Instant Dropdown Results */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-[#10121D]/98 backdrop-blur-2xl rounded-xl border border-white/[0.12] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.8)] z-50 overflow-hidden divide-y divide-white/[0.06]">
          {results.length > 0 ? (
            <div>
              <div className="px-4 py-2 bg-[#0C0E17] text-[11px] font-semibold uppercase tracking-wider text-purple-400 flex justify-between">
                <span>Matching Tools ({results.length})</span>
                <span className="font-normal text-neutral-400 lowercase">Esc to close</span>
              </div>
              <ul className="max-h-80 overflow-y-auto">
                {results.map((tool) => (
                  <li key={tool.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(tool)}
                      className="w-full text-left px-4 py-3 hover:bg-purple-950/20 flex items-center justify-between gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-lg bg-[#181B2B] text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                          <ToolIcon name={tool.iconName} className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white group-hover:text-purple-200 truncate">
                            {tool.name}
                          </div>
                          <div className="text-xs text-neutral-400 truncate">
                            {tool.description}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] text-neutral-400 capitalize hidden sm:inline">
                          {tool.category}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-neutral-400">
              No tools matching &ldquo;<span className="font-semibold text-white">{query}</span>&rdquo;.
              <div className="mt-2 text-xs text-neutral-400">
                Try searching &ldquo;salary&rdquo;, &ldquo;emi&rdquo;, &ldquo;gst&rdquo;, or &ldquo;percent&rdquo;.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
