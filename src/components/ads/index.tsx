import React from 'react';

interface AdSlotProps {
  className?: string;
  slotId?: string;
}

export const TopAdSlot: React.FC<AdSlotProps> = ({ className = '', slotId = 'top-ad-slot' }) => {
  return (
    <div
      id={slotId}
      aria-label="Advertisement Container"
      className={`w-full my-4 flex items-center justify-center p-3 rounded-xl border border-dashed border-white/[0.08] bg-[#0E101A]/50 text-neutral-500 text-xs font-mono select-none ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
        <span>Ad Placement · Top Banner (Responsive 728×90)</span>
      </div>
    </div>
  );
};

export const InContentAdSlot: React.FC<AdSlotProps> = ({ className = '', slotId = 'in-content-ad-slot' }) => {
  return (
    <div
      id={slotId}
      aria-label="In-content Advertisement Container"
      className={`w-full my-6 flex items-center justify-center p-4 rounded-xl border border-dashed border-white/[0.08] bg-[#0E101A]/50 text-neutral-500 text-xs font-mono select-none ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
        <span>Ad Placement · In-Content Display</span>
      </div>
    </div>
  );
};

export const BottomAdSlot: React.FC<AdSlotProps> = ({ className = '', slotId = 'bottom-ad-slot' }) => {
  return (
    <div
      id={slotId}
      aria-label="Bottom Advertisement Container"
      className={`w-full mt-8 mb-4 flex items-center justify-center p-3 rounded-xl border border-dashed border-white/[0.08] bg-[#0E101A]/50 text-neutral-500 text-xs font-mono select-none ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
        <span>Ad Placement · Bottom Anchor</span>
      </div>
    </div>
  );
};

export const SponsoredSlot: React.FC<{ title?: string; description?: string; linkUrl?: string }> = ({
  title,
  description,
  linkUrl,
}) => {
  if (!title) return null;
  return (
    <div className="p-3.5 rounded-xl border border-white/[0.08] bg-[#10121F] text-xs text-neutral-300 flex items-center justify-between">
      <div>
        <span className="text-[10px] uppercase font-semibold text-purple-400 tracking-wider">Partner Resource</span>
        <div className="font-semibold text-white mt-0.5">{title}</div>
        {description && <div className="text-neutral-400 mt-0.5">{description}</div>}
      </div>
      {linkUrl && (
        <a
          href={linkUrl}
          rel="nofollow noopener noreferrer"
          target="_blank"
          className="text-purple-400 font-semibold hover:underline ml-4 shrink-0"
        >
          Learn more &rarr;
        </a>
      )}
    </div>
  );
};
