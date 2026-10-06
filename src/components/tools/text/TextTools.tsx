import React, { useState } from 'react';
import { CopyButton } from '../../common/CopyButton';

// ----------------------------------------------------
// 24. Word Counter
// ----------------------------------------------------
export const WordCounter: React.FC = () => {
  const [text, setText] = useState(
    'IndiaToolbox makes everyday calculations and text operations effortless. It is fast, clean, and runs directly in your browser without saving any personal information.'
  );

  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const charsWithSpaces = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length : 0;
  const paragraphs = trimmed ? text.split(/\n+/).filter((p) => p.trim().length > 0).length : 0;

  const readingTimeMinutes = (words / 200).toFixed(1);
  const speakingTimeMinutes = (words / 130).toFixed(1);

  const handleClear = () => setText('');
  const handleLoadSample = () =>
    setText(
      'The quick brown fox jumps over the lazy dog. Online utilities should be fast, private, and easy to use on mobile devices.'
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
          Type or Paste Text Below
        </label>
        <div className="flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={handleLoadSample}
            className="text-purple-400 hover:text-purple-300 underline cursor-pointer"
          >
            Sample Text
          </button>
          <span className="text-neutral-600">·</span>
          <button
            type="button"
            onClick={handleClear}
            className="text-neutral-400 hover:text-neutral-200 underline cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your content here..."
        className="w-full p-4 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white leading-relaxed focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">Words</span>
          <span className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
            {words.toLocaleString()}
          </span>
        </div>
        <div className="p-4 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">Characters</span>
          <span className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
            {charsWithSpaces.toLocaleString()}
          </span>
        </div>
        <div className="p-4 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">No Spaces</span>
          <span className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
            {charsNoSpaces.toLocaleString()}
          </span>
        </div>
        <div className="p-4 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">Sentences</span>
          <span className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
            {sentences.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#0F111C] rounded-xl border border-white/[0.08] text-xs">
        <div>
          <span className="text-neutral-400 block text-[10px] uppercase font-mono">Paragraphs</span>
          <span className="font-semibold text-white font-mono text-sm">{paragraphs}</span>
        </div>
        <div>
          <span className="text-neutral-400 block text-[10px] uppercase font-mono">Reading Time</span>
          <span className="font-semibold text-purple-300 font-mono text-sm">
            ~{readingTimeMinutes} min (200 wpm)
          </span>
        </div>
        <div>
          <span className="text-neutral-400 block text-[10px] uppercase font-mono">Speaking Time</span>
          <span className="font-semibold text-indigo-300 font-mono text-sm">
            ~{speakingTimeMinutes} min (130 wpm)
          </span>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 25. Character Counter
// ----------------------------------------------------
export const CharacterCounter: React.FC = () => {
  const [text, setText] = useState('Write concise, readable copy for maximum impact and conversions.');

  const total = text.length;
  const noSpaces = text.replace(/\s/g, '').length;
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const digits = (text.match(/[0-9]/g) || []).length;
  const spaces = (text.match(/\s/g) || []).length;
  const symbols = total - (letters + digits + spaces);

  const twitterLimit = 280;
  const smsLimit = 160;
  const metaDescLimit = 160;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
          Character Counter & Limit Tracker
        </label>
        <button
          type="button"
          onClick={() => setText('')}
          className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
        >
          Clear
        </button>
      </div>

      <textarea
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here to track character metrics..."
        className="w-full p-4 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white leading-relaxed focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">Total Chars</span>
          <span className="text-2xl font-bold text-white font-mono tabular-nums">{total}</span>
        </div>
        <div className="p-3.5 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">No Spaces</span>
          <span className="text-2xl font-bold text-white font-mono tabular-nums">{noSpaces}</span>
        </div>
        <div className="p-3.5 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">Letters</span>
          <span className="text-2xl font-bold text-white font-mono tabular-nums">{letters}</span>
        </div>
        <div className="p-3.5 bg-[#0F111C] rounded-xl border border-white/[0.08]">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase block font-mono">Digits</span>
          <span className="text-2xl font-bold text-white font-mono tabular-nums">{digits}</span>
        </div>
      </div>

      <div className="p-4 bg-[#0F111C] border border-white/[0.08] rounded-xl space-y-3.5 text-xs">
        <div>
          <div className="flex justify-between mb-1.5">
            <span className="text-neutral-300 font-medium">X / Twitter Limit (280)</span>
            <span className={`font-mono text-xs ${total > twitterLimit ? 'text-rose-400 font-bold' : 'text-neutral-400'}`}>
              {total} / {twitterLimit} ({twitterLimit - total} left)
            </span>
          </div>
          <div className="w-full bg-[#181B2B] h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${total > twitterLimit ? 'bg-rose-500' : 'bg-gradient-to-r from-purple-500 to-indigo-500'}`}
              style={{ width: `${Math.min(100, (total / twitterLimit) * 100)}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1.5">
            <span className="text-neutral-300 font-medium">SEO Meta Description Limit (160)</span>
            <span className={`font-mono text-xs ${total > metaDescLimit ? 'text-rose-400 font-bold' : 'text-neutral-400'}`}>
              {total} / {metaDescLimit} ({metaDescLimit - total} left)
            </span>
          </div>
          <div className="w-full bg-[#181B2B] h-2 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all ${total > metaDescLimit ? 'bg-rose-500' : 'bg-gradient-to-r from-purple-500 to-indigo-500'}`}
              style={{ width: `${Math.min(100, (total / metaDescLimit) * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 26. Case Converter
// ----------------------------------------------------
export const CaseConverter: React.FC = () => {
  const [text, setText] = useState('Convert any headline or variable into the right case format.');

  const toUpper = text.toUpperCase();
  const toLower = text.toLowerCase();

  const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };

  const toSentenceCase = (str: string) => {
    return str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
  };

  const toCamelCase = (str: string) => {
    return str
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .split(' ')
      .filter(Boolean)
      .map((word, index) =>
        index === 0
          ? word.toLowerCase()
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  };

  const toSnakeCase = (str: string) => {
    return str
      .trim()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .split(/\s+/)
      .filter(Boolean)
      .join('_')
      .toLowerCase();
  };

  const toKebabCase = (str: string) => {
    return str
      .trim()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .split(/\s+/)
      .filter(Boolean)
      .join('-')
      .toLowerCase();
  };

  const toPascalCase = (str: string) => {
    return str
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .split(' ')
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  };

  const cases = [
    { label: 'UPPERCASE', result: toUpper },
    { label: 'lowercase', result: toLower },
    { label: 'Title Case', result: toTitleCase(text) },
    { label: 'Sentence case', result: toSentenceCase(text) },
    { label: 'camelCase', result: toCamelCase(text) },
    { label: 'snake_case', result: toSnakeCase(text) },
    { label: 'kebab-case', result: toKebabCase(text) },
    { label: 'PascalCase', result: toPascalCase(text) },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
          Input Text
        </label>
        <textarea
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to convert case..."
          className="w-full p-3.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 font-mono"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {cases.map((c) => (
          <div
            key={c.label}
            className="p-3.5 bg-[#0F111C] rounded-xl border border-white/[0.08] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 font-mono">
                {c.label}
              </span>
              <CopyButton textToCopy={c.result} label="Copy" />
            </div>
            <div className="text-xs text-white font-mono bg-[#161828] p-2.5 rounded-lg border border-white/[0.06] break-all select-all">
              {c.result || <span className="text-neutral-500 italic">empty</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 27. Remove Extra Spaces
// ----------------------------------------------------
export const RemoveExtraSpaces: React.FC = () => {
  const [text, setText] = useState(
    'This   sentence     has    too   many   spaces.\n\n\nAnd   unnecessary    blank   lines.'
  );

  const cleanText = text
    .split('\n')
    .map((line) => line.replace(/[ \t]+/g, ' ').trim())
    .filter((line) => line.length > 0)
    .join('\n');

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
          Original Text
        </label>
        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste text with excessive spaces..."
          className="w-full p-3.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
        />
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
            Cleaned Result
          </span>
          <CopyButton textToCopy={cleanText} />
        </div>
        <div className="p-3.5 bg-[#0C0E17] rounded-xl border border-white/[0.08] text-sm text-white whitespace-pre-wrap font-mono min-h-[80px]">
          {cleanText || <span className="text-neutral-500 italic">No text provided.</span>}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 28. Text Cleaner
// ----------------------------------------------------
export const TextCleaner: React.FC = () => {
  const [text, setText] = useState(
    '<p>Here is <b>formatted text</b> with “smart quotes”, redundant    spaces, and an emoji 😊!</p>'
  );
  const [stripHtml, setStripHtml] = useState(true);
  const [stripEmojis, setStripEmojis] = useState(true);
  const [fixQuotes, setFixQuotes] = useState(true);
  const [normalizeWhitespace, setNormalizeWhitespace] = useState(true);

  let cleaned = text;

  if (stripHtml) {
    cleaned = cleaned.replace(/<[^>]*>/g, '');
  }

  if (fixQuotes) {
    cleaned = cleaned
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/[\u2013\u2014]/g, '-');
  }

  if (stripEmojis) {
    cleaned = cleaned.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ''
    );
  }

  if (normalizeWhitespace) {
    cleaned = cleaned
      .split('\n')
      .map((l) => l.replace(/[ \t]+/g, ' ').trim())
      .filter(Boolean)
      .join('\n');
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
          Messy / Raw Text
        </label>
        <textarea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste dirty text to clean..."
          className="w-full p-3.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <label className="flex items-center gap-2 p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.08] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={stripHtml}
            onChange={(e) => setStripHtml(e.target.checked)}
            className="rounded border-white/[0.2] bg-[#11131E] text-purple-600 focus:ring-purple-500 cursor-pointer"
          />
          <span className="text-neutral-200">Strip HTML</span>
        </label>
        <label className="flex items-center gap-2 p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.08] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={fixQuotes}
            onChange={(e) => setFixQuotes(e.target.checked)}
            className="rounded border-white/[0.2] bg-[#11131E] text-purple-600 focus:ring-purple-500 cursor-pointer"
          />
          <span className="text-neutral-200">Fix Quotes</span>
        </label>
        <label className="flex items-center gap-2 p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.08] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={stripEmojis}
            onChange={(e) => setStripEmojis(e.target.checked)}
            className="rounded border-white/[0.2] bg-[#11131E] text-purple-600 focus:ring-purple-500 cursor-pointer"
          />
          <span className="text-neutral-200">Strip Emojis</span>
        </label>
        <label className="flex items-center gap-2 p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.08] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={normalizeWhitespace}
            onChange={(e) => setNormalizeWhitespace(e.target.checked)}
            className="rounded border-white/[0.2] bg-[#11131E] text-purple-600 focus:ring-purple-500 cursor-pointer"
          />
          <span className="text-neutral-200">Whitespace</span>
        </label>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
            Cleaned Output
          </span>
          <CopyButton textToCopy={cleaned} />
        </div>
        <div className="p-3.5 bg-[#0C0E17] rounded-xl border border-white/[0.08] text-sm text-white whitespace-pre-wrap font-mono min-h-[80px]">
          {cleaned || <span className="text-neutral-500 italic">No output text.</span>}
        </div>
      </div>
    </div>
  );
};
