import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CopyButton } from '../../common/CopyButton';

// ----------------------------------------------------
// 1. Percentage Calculator
// ----------------------------------------------------
export const PercentageCalculator: React.FC = () => {
  const [tab, setTab] = useState<'whatIs' | 'isWhat'>('whatIs');

  // Tab 1: What is X% of Y?
  const [p1, setP1] = useState('15');
  const [y1, setY1] = useState('250');

  // Tab 2: X is what % of Y?
  const [x2, setX2] = useState('45');
  const [y2, setY2] = useState('180');

  // Calculations
  const res1 = (() => {
    const p = parseFloat(p1);
    const y = parseFloat(y1);
    if (isNaN(p) || isNaN(y)) return null;
    return (p / 100) * y;
  })();

  const res2 = (() => {
    const x = parseFloat(x2);
    const y = parseFloat(y2);
    if (isNaN(x) || isNaN(y) || y === 0) return null;
    return (x / y) * 100;
  })();

  const handleReset = () => {
    if (tab === 'whatIs') {
      setP1('');
      setY1('');
    } else {
      setX2('');
      setY2('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-modes tabs */}
      <div className="flex border-b border-white/[0.08] gap-2">
        <button
          type="button"
          onClick={() => setTab('whatIs')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            tab === 'whatIs'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          What is X% of Y?
        </button>
        <button
          type="button"
          onClick={() => setTab('isWhat')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            tab === 'isWhat'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          X is what % of Y?
        </button>
      </div>

      {tab === 'whatIs' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Percentage (%)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={p1}
                  onChange={(e) => setP1(e.target.value)}
                  placeholder="e.g. 15"
                  className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
                />
                <span className="absolute right-3.5 top-2.5 text-xs text-neutral-400 select-none">%</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Of Number
              </label>
              <input
                type="number"
                value={y1}
                onChange={(e) => setY1(e.target.value)}
                placeholder="e.g. 250"
                className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
              />
            </div>
          </div>

          {res1 !== null ? (
            <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                  Calculated Result
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                  {res1.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                </div>
                <div className="text-xs text-purple-300 mt-1">
                  {p1}% of {y1} is equal to {res1.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CopyButton textToCopy={res1.toString()} />
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 text-xs text-neutral-400 bg-[#10121E] rounded-xl border border-white/[0.08]">
              Enter both values above to see the calculation result.
            </div>
          )}
        </div>
      )}

      {tab === 'isWhat' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Number (X)
              </label>
              <input
                type="number"
                value={x2}
                onChange={(e) => setX2(e.target.value)}
                placeholder="e.g. 45"
                className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Out of Total (Y)
              </label>
              <input
                type="number"
                value={y2}
                onChange={(e) => setY2(e.target.value)}
                placeholder="e.g. 180"
                className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
              />
            </div>
          </div>

          {res2 !== null ? (
            <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                  Percentage Share
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                  {res2.toLocaleString(undefined, { maximumFractionDigits: 4 })}%
                </div>
                <div className="text-xs text-purple-300 mt-1">
                  {x2} is {res2.toLocaleString(undefined, { maximumFractionDigits: 2 })}% of {y2}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CopyButton textToCopy={`${res2.toFixed(2)}%`} />
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
                  title="Reset"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 text-xs text-neutral-400 bg-[#10121E] rounded-xl border border-white/[0.08]">
              Enter valid numbers to calculate percentage share (total cannot be 0).
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// 2. Percentage Increase / Decrease Calculator
// ----------------------------------------------------
export const PercentageChangeCalculator: React.FC = () => {
  const [initialVal, setInitialVal] = useState('80');
  const [finalVal, setFinalVal] = useState('100');

  const v1 = parseFloat(initialVal);
  const v2 = parseFloat(finalVal);

  const isCalculationValid = !isNaN(v1) && !isNaN(v2) && v1 !== 0;

  const difference = isCalculationValid ? v2 - v1 : 0;
  const percentageChange = isCalculationValid ? (difference / Math.abs(v1)) * 100 : 0;
  const isIncrease = difference >= 0;
  const multiplier = isCalculationValid ? v2 / v1 : 1;

  const handleReset = () => {
    setInitialVal('');
    setFinalVal('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Initial Value (Original)
          </label>
          <input
            type="number"
            value={initialVal}
            onChange={(e) => setInitialVal(e.target.value)}
            placeholder="e.g. 80"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Final Value (New)
          </label>
          <input
            type="number"
            value={finalVal}
            onChange={(e) => setFinalVal(e.target.value)}
            placeholder="e.g. 100"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
          />
        </div>
      </div>

      {isCalculationValid ? (
        <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                {isIncrease ? 'Percentage Increase' : 'Percentage Decrease'}
              </span>
              <div
                className={`text-3xl sm:text-4xl font-bold font-mono tabular-nums ${
                  isIncrease ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {isIncrease ? '+' : ''}
                {percentageChange.toLocaleString(undefined, { maximumFractionDigits: 2 })}%
              </div>
              <div className="text-xs text-neutral-300 mt-1">
                From {initialVal} to {finalVal} is a {Math.abs(percentageChange).toFixed(2)}%{' '}
                {isIncrease ? 'increase' : 'decrease'}.
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton
                textToCopy={`${isIncrease ? '+' : ''}${percentageChange.toFixed(2)}%`}
              />
              <button
                type="button"
                onClick={handleReset}
                className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs">
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Absolute Difference</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {difference > 0 ? `+${difference}` : difference}
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Ratio Multiplier</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {multiplier.toFixed(4)}x
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Change Trend</span>
              <span className={`font-semibold text-sm ${isIncrease ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isIncrease ? 'Growth (Up)' : 'Drop (Down)'}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 text-xs text-neutral-400 bg-[#10121E] rounded-xl border border-white/[0.08]">
          Enter initial and new values to calculate percentage change. Initial value cannot be zero.
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// 3. Average Calculator
// ----------------------------------------------------
export const AverageCalculator: React.FC = () => {
  const [inputStr, setInputStr] = useState('14, 28, 35, 42, 50, 68');

  const numbers = inputStr
    .split(/[\s,;\n]+/)
    .map((s) => parseFloat(s.trim()))
    .filter((n) => !isNaN(n));

  const count = numbers.length;
  const sum = numbers.reduce((a, b) => a + b, 0);
  const mean = count > 0 ? sum / count : 0;

  // Median
  const sorted = [...numbers].sort((a, b) => a - b);
  let median = 0;
  if (count > 0) {
    const mid = Math.floor(count / 2);
    median = count % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  // Mode
  const modeMap: Record<number, number> = {};
  numbers.forEach((n) => {
    modeMap[n] = (modeMap[n] || 0) + 1;
  });
  let maxFreq = 0;
  let modes: number[] = [];
  Object.entries(modeMap).forEach(([val, freq]) => {
    if (freq > maxFreq) {
      maxFreq = freq;
      modes = [parseFloat(val)];
    } else if (freq === maxFreq && freq > 1) {
      modes.push(parseFloat(val));
    }
  });
  const modeDisplay = maxFreq > 1 ? modes.join(', ') : 'No unique mode';

  const min = count > 0 ? Math.min(...numbers) : 0;
  const max = count > 0 ? Math.max(...numbers) : 0;
  const range = max - min;

  const handleReset = () => setInputStr('');
  const handleLoadSample = () => setInputStr('12, 18, 25, 30, 42, 50, 64, 75');

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Enter Numbers (separated by commas, spaces, or lines)
          </label>
          <button
            type="button"
            onClick={handleLoadSample}
            className="text-xs text-purple-400 hover:text-purple-300 underline cursor-pointer"
          >
            Load Sample
          </button>
        </div>
        <textarea
          rows={3}
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          placeholder="e.g. 15, 24, 38, 42, 55"
          className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
        />
      </div>

      {count > 0 ? (
        <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                Mean (Average)
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                {mean.toLocaleString(undefined, { maximumFractionDigits: 4 })}
              </div>
              <div className="text-xs text-neutral-300 mt-1">
                Sum: {sum.toLocaleString()} across {count} items
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton textToCopy={mean.toString()} label="Copy Mean" />
              <button
                type="button"
                onClick={handleReset}
                className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08] text-xs">
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Median</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {median.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Mode</span>
              <span className="font-semibold text-white font-mono text-sm">{modeDisplay}</span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Min / Max</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {min} / {max}
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Range</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {range}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 text-xs text-neutral-400 bg-[#10121E] rounded-xl border border-white/[0.08]">
          Enter numbers above to view statistical calculations.
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// 4. Ratio Calculator
// ----------------------------------------------------
export const RatioCalculator: React.FC = () => {
  const [tab, setTab] = useState<'solve' | 'simplify'>('solve');

  // Proportion solver: A : B = C : D
  const [a, setA] = useState('4');
  const [b, setB] = useState('10');
  const [c, setC] = useState('12');
  const [d, setD] = useState('');

  // Ratio simplification
  const [simpA, setSimpA] = useState('18');
  const [simpB, setSimpB] = useState('24');

  const gcd = (x: number, y: number): number => {
    let nx = Math.abs(Math.round(x));
    let ny = Math.abs(Math.round(y));
    while (ny) {
      const t = ny;
      ny = nx % ny;
      nx = t;
    }
    return nx;
  };

  const solvedResult = (() => {
    const na = parseFloat(a);
    const nb = parseFloat(b);
    const nc = parseFloat(c);
    const nd = parseFloat(d);

    const emptyCount = [a, b, c, d].filter((v) => v.trim() === '').length;
    if (emptyCount !== 1) return null;

    if (a.trim() === '' && !isNaN(nb) && !isNaN(nc) && !isNaN(nd) && nd !== 0) {
      return { unknown: 'A', value: (nb * nc) / nd };
    }
    if (b.trim() === '' && !isNaN(na) && !isNaN(nc) && !isNaN(nd) && nc !== 0) {
      return { unknown: 'B', value: (na * nd) / nc };
    }
    if (c.trim() === '' && !isNaN(na) && !isNaN(nb) && !isNaN(nd) && nb !== 0) {
      return { unknown: 'C', value: (na * nd) / nb };
    }
    if (d.trim() === '' && !isNaN(na) && !isNaN(nb) && !isNaN(nc) && na !== 0) {
      return { unknown: 'D', value: (nb * nc) / na };
    }
    return null;
  })();

  const simplifiedResult = (() => {
    const sa = parseFloat(simpA);
    const sb = parseFloat(simpB);
    if (isNaN(sa) || isNaN(sb) || sa === 0 || sb === 0) return null;
    const g = gcd(sa, sb);
    const lowA = sa / g;
    const lowB = sb / g;
    return {
      ratio: `${lowA} : ${lowB}`,
      decimal: (sa / sb).toFixed(4),
      factor: g,
    };
  })();

  return (
    <div className="space-y-6">
      <div className="flex border-b border-white/[0.08] gap-2">
        <button
          type="button"
          onClick={() => setTab('solve')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            tab === 'solve'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Solve Proportion (A : B = C : D)
        </button>
        <button
          type="button"
          onClick={() => setTab('simplify')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            tab === 'simplify'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Simplify Ratio (A : B)
        </button>
      </div>

      {tab === 'solve' && (
        <div className="space-y-4">
          <p className="text-xs text-neutral-400">
            Leave exactly one box empty to find its value using cross-multiplication.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-4 bg-[#11131E] rounded-xl border border-white/[0.1]">
            <div className="w-20 sm:w-24">
              <label className="block text-[10px] uppercase font-bold text-neutral-400 mb-1">A</label>
              <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                placeholder="A"
                className="w-full text-center px-2 py-2 bg-[#0C0E17] border border-white/[0.12] rounded-lg text-sm text-white font-mono focus:border-purple-500"
              />
            </div>
            <span className="font-bold text-purple-400">:</span>
            <div className="w-20 sm:w-24">
              <label className="block text-[10px] uppercase font-bold text-neutral-400 mb-1">B</label>
              <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                placeholder="B"
                className="w-full text-center px-2 py-2 bg-[#0C0E17] border border-white/[0.12] rounded-lg text-sm text-white font-mono focus:border-purple-500"
              />
            </div>
            <span className="font-bold text-white px-1">=</span>
            <div className="w-20 sm:w-24">
              <label className="block text-[10px] uppercase font-bold text-neutral-400 mb-1">C</label>
              <input
                type="number"
                value={c}
                onChange={(e) => setC(e.target.value)}
                placeholder="C"
                className="w-full text-center px-2 py-2 bg-[#0C0E17] border border-white/[0.12] rounded-lg text-sm text-white font-mono focus:border-purple-500"
              />
            </div>
            <span className="font-bold text-purple-400">:</span>
            <div className="w-20 sm:w-24">
              <label className="block text-[10px] uppercase font-bold text-neutral-400 mb-1">D</label>
              <input
                type="number"
                value={d}
                onChange={(e) => setD(e.target.value)}
                placeholder="D"
                className="w-full text-center px-2 py-2 bg-[#0C0E17] border border-white/[0.12] rounded-lg text-sm text-white font-mono focus:border-purple-500"
              />
            </div>
          </div>

          {solvedResult ? (
            <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                  Solved Value for {solvedResult.unknown}
                </span>
                <div className="text-3xl font-bold text-white font-mono tabular-nums">
                  {solvedResult.unknown} ={' '}
                  {solvedResult.value.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                </div>
              </div>
              <CopyButton textToCopy={solvedResult.value.toString()} />
            </div>
          ) : (
            <div className="p-3 text-xs text-neutral-400 bg-[#10121E] rounded-xl border border-white/[0.08] text-center">
              Please leave exactly one value blank to calculate.
            </div>
          )}
        </div>
      )}

      {tab === 'simplify' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                First Term (A)
              </label>
              <input
                type="number"
                value={simpA}
                onChange={(e) => setSimpA(e.target.value)}
                placeholder="e.g. 18"
                className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Second Term (B)
              </label>
              <input
                type="number"
                value={simpB}
                onChange={(e) => setSimpB(e.target.value)}
                placeholder="e.g. 24"
                className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500 font-mono"
              />
            </div>
          </div>

          {simplifiedResult && (
            <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                  Simplified Form
                </span>
                <div className="text-3xl font-bold text-white font-mono tabular-nums">
                  {simplifiedResult.ratio}
                </div>
                <div className="text-xs text-purple-300 mt-1">
                  Decimal: {simplifiedResult.decimal} · Divided by GCD ({simplifiedResult.factor})
                </div>
              </div>
              <CopyButton textToCopy={simplifiedResult.ratio} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
