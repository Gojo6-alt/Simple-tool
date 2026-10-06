import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { CopyButton } from '../../common/CopyButton';

// ----------------------------------------------------
// 17. Length Converter
// ----------------------------------------------------
export const LengthConverter: React.FC = () => {
  const [val, setVal] = useState('10');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');

  const toMeters: Record<string, number> = {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
    ft: 0.3048,
    in: 0.0254,
    yd: 0.9144,
    mi: 1609.344,
    nmi: 1852,
  };

  const unitNames: Record<string, string> = {
    m: 'Meters (m)',
    km: 'Kilometers (km)',
    cm: 'Centimeters (cm)',
    mm: 'Millimeters (mm)',
    ft: 'Feet (ft)',
    in: 'Inches (in)',
    yd: 'Yards (yd)',
    mi: 'Miles (mi)',
    nmi: 'Nautical Miles (nmi)',
  };

  const num = parseFloat(val) || 0;
  const meters = num * (toMeters[fromUnit] || 1);
  const result = meters / (toMeters[toUnit] || 1);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 items-end">
        <div className="sm:col-span-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Value to Convert
          </label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>

        <div className="sm:col-span-1 flex justify-center pb-2">
          <button
            type="button"
            onClick={handleSwap}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
            title="Swap units"
          >
            <ArrowLeftRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        <div className="sm:col-span-3 grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
            >
              {Object.entries(unitNames).map(([key, name]) => (
                <option key={key} value={key} className="bg-[#11131E] text-white">{name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
            >
              {Object.entries(unitNames).map(([key, name]) => (
                <option key={key} value={key} className="bg-[#11131E] text-white">{name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Converted Output
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              {val} {fromUnit} = {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
            </div>
          </div>
          <CopyButton textToCopy={`${result} ${toUnit}`} />
        </div>

        <div className="pt-4 border-t border-white/[0.08]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2 font-mono">
            Equivalent Standards
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {['m', 'cm', 'in', 'ft', 'yd', 'km', 'mi'].map((u) => {
              const eq = meters / toMeters[u];
              return (
                <div key={u} className="p-2 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                  <span className="text-neutral-400 uppercase text-[10px] block font-mono">{u}</span>
                  <span className="font-semibold text-white font-mono truncate block text-sm">
                    {eq.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 18. Weight Converter
// ----------------------------------------------------
export const WeightConverter: React.FC = () => {
  const [val, setVal] = useState('70');
  const [fromUnit, setFromUnit] = useState('kg');
  const [toUnit, setToUnit] = useState('lb');

  const toKg: Record<string, number> = {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    lb: 0.45359237,
    oz: 0.028349523125,
    t: 1000,
    st: 6.35029318,
  };

  const unitNames: Record<string, string> = {
    kg: 'Kilograms (kg)',
    g: 'Grams (g)',
    mg: 'Milligrams (mg)',
    lb: 'Pounds (lbs)',
    oz: 'Ounces (oz)',
    t: 'Metric Tons (t)',
    st: 'Stones (st)',
  };

  const num = parseFloat(val) || 0;
  const kg = num * (toKg[fromUnit] || 1);
  const result = kg / (toKg[toUnit] || 1);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 items-end">
        <div className="sm:col-span-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Value to Convert
          </label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>

        <div className="sm:col-span-1 flex justify-center pb-2">
          <button
            type="button"
            onClick={handleSwap}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
            title="Swap units"
          >
            <ArrowLeftRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        <div className="sm:col-span-3 grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
            >
              {Object.entries(unitNames).map(([key, name]) => (
                <option key={key} value={key} className="bg-[#11131E] text-white">{name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
            >
              {Object.entries(unitNames).map(([key, name]) => (
                <option key={key} value={key} className="bg-[#11131E] text-white">{name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Converted Mass
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              {val} {fromUnit} = {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
            </div>
          </div>
          <CopyButton textToCopy={`${result} ${toUnit}`} />
        </div>

        <div className="pt-4 border-t border-white/[0.08]">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 block mb-2 font-mono">
            Equivalent Weights
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {['kg', 'g', 'lb', 'oz', 'st'].map((u) => {
              const eq = kg / toKg[u];
              return (
                <div key={u} className="p-2 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                  <span className="text-neutral-400 uppercase text-[10px] block font-mono">{u}</span>
                  <span className="font-semibold text-white font-mono truncate block text-sm">
                    {eq.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 19. Temperature Converter
// ----------------------------------------------------
export const TemperatureConverter: React.FC = () => {
  const [val, setVal] = useState('25');
  const [fromUnit, setFromUnit] = useState<'C' | 'F' | 'K'>('C');
  const [toUnit, setToUnit] = useState<'C' | 'F' | 'K'>('F');

  const num = parseFloat(val) || 0;

  let celsius = 0;
  if (fromUnit === 'C') celsius = num;
  else if (fromUnit === 'F') celsius = ((num - 32) * 5) / 9;
  else if (fromUnit === 'K') celsius = num - 273.15;

  let result = 0;
  if (toUnit === 'C') result = celsius;
  else if (toUnit === 'F') result = (celsius * 9) / 5 + 32;
  else if (toUnit === 'K') result = celsius + 273.15;

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 items-end">
        <div className="sm:col-span-3">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Temperature Value
          </label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>

        <div className="sm:col-span-1 flex justify-center pb-2">
          <button
            type="button"
            onClick={handleSwap}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
            title="Swap units"
          >
            <ArrowLeftRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        <div className="sm:col-span-3 grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              From
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value as any)}
              className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
            >
              <option value="C" className="bg-[#11131E] text-white">Celsius (°C)</option>
              <option value="F" className="bg-[#11131E] text-white">Fahrenheit (°F)</option>
              <option value="K" className="bg-[#11131E] text-white">Kelvin (K)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
              To
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value as any)}
              className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
            >
              <option value="C" className="bg-[#11131E] text-white">Celsius (°C)</option>
              <option value="F" className="bg-[#11131E] text-white">Fahrenheit (°F)</option>
              <option value="K" className="bg-[#11131E] text-white">Kelvin (K)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Converted Temperature
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {result.toFixed(2)} °{toUnit}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              {celsius.toFixed(2)} °C = {((celsius * 9) / 5 + 32).toFixed(2)} °F = {(celsius + 273.15).toFixed(2)} K
            </div>
          </div>
          <CopyButton textToCopy={`${result.toFixed(2)} °${toUnit}`} />
        </div>

        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/[0.08] text-xs">
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase font-mono">Freezing Point</span>
            <span className="font-semibold text-white font-mono text-xs">0 °C · 32 °F</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase font-mono">Body Temperature</span>
            <span className="font-semibold text-white font-mono text-xs">37 °C · 98.6 °F</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase font-mono">Boiling Point</span>
            <span className="font-semibold text-purple-300 font-mono text-xs">100 °C · 212 °F</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 20. Speed Converter
// ----------------------------------------------------
export const SpeedConverter: React.FC = () => {
  const [val, setVal] = useState('60');
  const [fromUnit, setFromUnit] = useState('mph');
  const [toUnit, setToUnit] = useState('kmh');

  const toMs: Record<string, number> = {
    ms: 1,
    kmh: 1 / 3.6,
    mph: 0.44704,
    knots: 0.514444,
    fts: 0.3048,
  };

  const names: Record<string, string> = {
    kmh: 'Kilometers per hour (km/h)',
    mph: 'Miles per hour (mph)',
    ms: 'Meters per second (m/s)',
    knots: 'Knots (kn)',
    fts: 'Feet per second (ft/s)',
  };

  const num = parseFloat(val) || 0;
  const ms = num * (toMs[fromUnit] || 1);
  const result = ms / (toMs[toUnit] || 1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Speed Value
          </label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            From
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.entries(names).map(([k, v]) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            To
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.entries(names).map(([k, v]) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Converted Speed
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {result.toFixed(2)} {toUnit}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              {val} {fromUnit} = {result.toFixed(2)} {toUnit}
            </div>
          </div>
          <CopyButton textToCopy={`${result.toFixed(2)} ${toUnit}`} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/[0.08] text-xs">
          {['kmh', 'mph', 'ms', 'knots'].map((u) => {
            const eq = ms / toMs[u];
            return (
              <div key={u} className="p-2 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                <span className="text-neutral-400 uppercase text-[10px] block font-mono">{u}</span>
                <span className="font-semibold text-white font-mono text-sm">{eq.toFixed(2)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 21. Area Converter
// ----------------------------------------------------
export const AreaConverter: React.FC = () => {
  const [val, setVal] = useState('1000');
  const [fromUnit, setFromUnit] = useState('sqft');
  const [toUnit, setToUnit] = useState('sqm');

  const toSqm: Record<string, number> = {
    sqm: 1,
    sqkm: 1000000,
    sqft: 0.09290304,
    sqyd: 0.83612736,
    acre: 4046.8564224,
    hectare: 10000,
    sqmi: 2589988.11,
  };

  const names: Record<string, string> = {
    sqm: 'Square Meters (m²)',
    sqkm: 'Square Kilometers (km²)',
    sqft: 'Square Feet (sq ft)',
    sqyd: 'Square Yards (sq yd)',
    acre: 'Acres',
    hectare: 'Hectares (ha)',
    sqmi: 'Square Miles (sq mi)',
  };

  const num = parseFloat(val) || 0;
  const sqm = num * (toSqm[fromUnit] || 1);
  const result = sqm / (toSqm[toUnit] || 1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Area Value
          </label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            From
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.entries(names).map(([k, v]) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            To
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.entries(names).map(([k, v]) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Converted Area
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              {val} {fromUnit} = {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
            </div>
          </div>
          <CopyButton textToCopy={`${result} ${toUnit}`} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/[0.08] text-xs">
          {['sqm', 'sqft', 'acre', 'hectare'].map((u) => {
            const eq = sqm / toSqm[u];
            return (
              <div key={u} className="p-2 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                <span className="text-neutral-400 uppercase text-[10px] block font-mono">{u}</span>
                <span className="font-semibold text-white font-mono text-sm">
                  {eq.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 22. Data Storage Converter
// ----------------------------------------------------
export const DataStorageConverter: React.FC = () => {
  const [val, setVal] = useState('256');
  const [base, setBase] = useState<'1024' | '1000'>('1024');
  const [fromUnit, setFromUnit] = useState('GB');
  const [toUnit, setToUnit] = useState('MB');

  const factor = base === '1024' ? 1024 : 1000;

  const powerMap: Record<string, number> = {
    b: -1,
    B: 0,
    KB: 1,
    MB: 2,
    GB: 3,
    TB: 4,
    PB: 5,
  };

  const num = parseFloat(val) || 0;

  let bytes = 0;
  if (fromUnit === 'b') {
    bytes = num / 8;
  } else {
    bytes = num * Math.pow(factor, powerMap[fromUnit]);
  }

  let result = 0;
  if (toUnit === 'b') {
    result = bytes * 8;
  } else {
    result = bytes / Math.pow(factor, powerMap[toUnit]);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-mono">
          Standard Architecture
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setBase('1024')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              base === '1024'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]'
                : 'bg-[#11131E] text-neutral-400 hover:text-white'
            }`}
          >
            Binary (1024)
          </button>
          <button
            type="button"
            onClick={() => setBase('1000')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              base === '1000'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]'
                : 'bg-[#11131E] text-neutral-400 hover:text-white'
            }`}
          >
            Decimal (1000)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Value
          </label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            From
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.keys(powerMap).map((k) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{k}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            To
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.keys(powerMap).map((k) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{k}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Converted Storage
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {result.toLocaleString(undefined, { maximumFractionDigits: 4 })} {toUnit}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              Exact Bytes: {bytes.toLocaleString()} B
            </div>
          </div>
          <CopyButton textToCopy={`${result} ${toUnit}`} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/[0.08] text-xs">
          {['B', 'KB', 'MB', 'GB', 'TB'].map((u) => {
            const eq = bytes / Math.pow(factor, powerMap[u]);
            return (
              <div key={u} className="p-2 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                <span className="text-neutral-400 uppercase text-[10px] block font-mono">{u}</span>
                <span className="font-semibold text-white font-mono truncate block text-sm">
                  {eq.toLocaleString(undefined, { maximumFractionDigits: 3 })}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 23. Time Converter
// ----------------------------------------------------
export const TimeConverter: React.FC = () => {
  const [val, setVal] = useState('72');
  const [fromUnit, setFromUnit] = useState('hours');
  const [toUnit, setToUnit] = useState('days');

  const toSec: Record<string, number> = {
    seconds: 1,
    minutes: 60,
    hours: 3600,
    days: 86400,
    weeks: 604800,
    months: 2629800,
    years: 31557600,
  };

  const names: Record<string, string> = {
    seconds: 'Seconds (s)',
    minutes: 'Minutes (min)',
    hours: 'Hours (hr)',
    days: 'Days (d)',
    weeks: 'Weeks (wk)',
    months: 'Months (mo)',
    years: 'Years (yr)',
  };

  const num = parseFloat(val) || 0;
  const sec = num * (toSec[fromUnit] || 1);
  const result = sec / (toSec[toUnit] || 1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Duration Value
          </label>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            From
          </label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.entries(names).map(([k, v]) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            To
          </label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full px-2.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-xs text-white focus:border-purple-500"
          >
            {Object.entries(names).map(([k, v]) => (
              <option key={k} value={k} className="bg-[#11131E] text-white">{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Converted Time
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {result.toLocaleString(undefined, { maximumFractionDigits: 4 })} {toUnit}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              {val} {fromUnit} = {result.toLocaleString(undefined, { maximumFractionDigits: 4 })} {toUnit}
            </div>
          </div>
          <CopyButton textToCopy={`${result} ${toUnit}`} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/[0.08] text-xs">
          {['seconds', 'minutes', 'hours', 'days', 'weeks'].map((u) => {
            const eq = sec / toSec[u];
            return (
              <div key={u} className="p-2 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                <span className="text-neutral-400 uppercase text-[10px] block font-mono">{u}</span>
                <span className="font-semibold text-white font-mono text-sm">
                  {eq.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
