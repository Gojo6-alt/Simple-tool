import React, { useEffect } from 'react';
import { getToolBySlug } from '../data/tools';
import { ToolLayout } from '../components/common/ToolLayout';
import { ToolRenderer } from '../components/tools/ToolRegistry';
import { recordToolVisit } from '../utils/recentTools';
import { ArrowLeft, Search } from 'lucide-react';

interface ToolPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ToolPage: React.FC<ToolPageProps> = ({ slug, onNavigate }) => {
  const tool = getToolBySlug(slug);

  useEffect(() => {
    if (tool) {
      recordToolVisit(tool.slug, tool.name, tool.category);
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-purple-400 flex items-center justify-center mx-auto mb-4">
          <Search className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Tool Not Found</h1>
        <p className="text-sm text-neutral-400 mb-8">
          The tool you are searching for does not exist or may have been relocated.
        </p>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="px-5 py-2.5 text-xs font-semibold text-neutral-200 bg-[#121422] hover:bg-[#1A1D30] hover:text-white border border-white/[0.1] rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go to Home</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/tools')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-[0_0_20px_-3px_rgba(168,85,247,0.5)]"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Browse All Tools</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <ToolLayout tool={tool} onNavigate={onNavigate}>
      <ToolRenderer slug={tool.slug} />
    </ToolLayout>
  );
};
