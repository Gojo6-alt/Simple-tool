import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CopyButton } from '../../common/CopyButton';

// ----------------------------------------------------
// 5. Discount Calculator
// ----------------------------------------------------
export const DiscountCalculator: React.FC = () => {
  const [originalPrice, setOriginalPrice] = useState('1200');
  const [discountPercent, setDiscountPercent] = useState('25');
  const [taxPercent, setTaxPercent] = useState('5');

  const price = parseFloat(originalPrice) || 0;
  const discount = parseFloat(discountPercent) || 0;
  const tax = parseFloat(taxPercent) || 0;

  const savings = (price * discount) / 100;
  const discountedPrice = Math.max(0, price - savings);
  const taxAmount = (discountedPrice * tax) / 100;
  const finalPrice = discountedPrice + taxAmount;

  const handleReset = () => {
    setOriginalPrice('');
    setDiscountPercent('');
    setTaxPercent('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Original Price (₹)
          </label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="e.g. 1200"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Discount (%)
          </label>
          <input
            type="number"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
            placeholder="e.g. 25"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Tax (%) (Optional)
          </label>
          <input
            type="number"
            value={taxPercent}
            onChange={(e) => setTaxPercent(e.target.value)}
            placeholder="e.g. 5"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 font-mono"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Final Payable Price
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{finalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-emerald-400 font-medium mt-1">
              You save ₹{savings.toLocaleString('en-IN', { maximumFractionDigits: 2 })} ({discount}% off)
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`₹${finalPrice.toFixed(2)}`} />
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
            <span className="text-neutral-400 block text-[10px] uppercase">Original</span>
            <span className="font-semibold text-white font-mono">₹{price.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Total Savings</span>
            <span className="font-semibold text-emerald-400 font-mono">-₹{savings.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Pre-Tax Cost</span>
            <span className="font-semibold text-white font-mono">₹{discountedPrice.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Tax Added</span>
            <span className="font-semibold text-purple-300 font-mono">+₹{taxAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 6. Profit & Loss Calculator
// ----------------------------------------------------
export const ProfitLossCalculator: React.FC = () => {
  const [costPrice, setCostPrice] = useState('500');
  const [sellingPrice, setSellingPrice] = useState('750');

  const cp = parseFloat(costPrice) || 0;
  const sp = parseFloat(sellingPrice) || 0;

  const diff = sp - cp;
  const isProfit = diff >= 0;
  const profitPercentage = cp > 0 ? (Math.abs(diff) / cp) * 100 : 0;
  const profitMargin = sp > 0 ? (diff / sp) * 100 : 0;

  const handleReset = () => {
    setCostPrice('');
    setSellingPrice('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Cost Price (CP) (₹)
          </label>
          <input
            type="number"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            placeholder="e.g. 500"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 font-mono"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Selling Price (SP) (₹)
          </label>
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            placeholder="e.g. 750"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 font-mono"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              {isProfit ? 'Net Profit' : 'Net Loss'}
            </span>
            <div
              className={`text-3xl sm:text-4xl font-bold font-mono tabular-nums ${
                isProfit ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {isProfit ? '+' : '-'}₹{Math.abs(diff).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-neutral-300 mt-1">
              {profitPercentage.toFixed(2)}% {isProfit ? 'profit on cost' : 'loss on cost'}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton
              textToCopy={`${isProfit ? 'Profit' : 'Loss'}: ₹${Math.abs(diff).toFixed(2)} (${profitPercentage.toFixed(2)}%)`}
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
            <span className="text-neutral-400 block text-[10px] uppercase">Markup on Cost</span>
            <span className="font-semibold text-white font-mono text-sm">
              {profitPercentage.toFixed(2)}%
            </span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Margin on Sale</span>
            <span className="font-semibold text-white font-mono text-sm">
              {profitMargin.toFixed(2)}%
            </span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">ROI</span>
            <span className="font-semibold text-white font-mono text-sm">
              {profitPercentage.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 7. Salary Calculator
// ----------------------------------------------------
export const SalaryCalculator: React.FC = () => {
  const [annualSalary, setAnnualSalary] = useState('600000');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [daysPerWeek, setDaysPerWeek] = useState('5');

  const annual = parseFloat(annualSalary) || 0;
  const hours = parseFloat(hoursPerWeek) || 40;
  const days = parseFloat(daysPerWeek) || 5;
  const weeks = 52;

  const monthly = annual / 12;
  const biWeekly = annual / 26;
  const weekly = annual / weeks;
  const daily = weekly / days;
  const hourly = weekly / hours;

  const handleReset = () => setAnnualSalary('');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Annual Gross CTC / Salary (₹)
          </label>
          <input
            type="number"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.value)}
            placeholder="e.g. 600000"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Working Hours / Week
          </label>
          <input
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Working Days / Week
          </label>
          <input
            type="number"
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Estimated Monthly Salary
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{monthly.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              Equivalent to ₹{hourly.toFixed(2)}/hour ({hours} hrs/week)
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`Monthly: ₹${monthly.toFixed(2)} | Hourly: ₹${hourly.toFixed(2)}`} />
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
            <span className="text-neutral-400 block text-[10px] uppercase">Bi-Weekly</span>
            <span className="font-semibold text-white font-mono text-sm">₹{biWeekly.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Weekly</span>
            <span className="font-semibold text-white font-mono text-sm">₹{weekly.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Daily</span>
            <span className="font-semibold text-white font-mono text-sm">₹{daily.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Hourly Rate</span>
            <span className="font-semibold text-white font-mono text-sm">₹{hourly.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 8. Daily & Hourly Salary Calculator
// ----------------------------------------------------
export const HourlySalaryCalculator: React.FC = () => {
  const [hourlyRate, setHourlyRate] = useState('250');
  const [hoursPerDay, setHoursPerDay] = useState('8');
  const [daysPerWeek, setDaysPerWeek] = useState('5');

  const rate = parseFloat(hourlyRate) || 0;
  const hDay = parseFloat(hoursPerDay) || 8;
  const dWeek = parseFloat(daysPerWeek) || 5;

  const daily = rate * hDay;
  const weekly = daily * dWeek;
  const annual = weekly * 52;
  const monthly = annual / 12;

  const handleReset = () => setHourlyRate('');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Hourly Wage (₹)
          </label>
          <input
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            placeholder="e.g. 250"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Hours per Day
          </label>
          <input
            type="number"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Days per Week
          </label>
          <input
            type="number"
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Projected Annual Income
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{annual.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              Working {hDay * dWeek} hours per week for 52 weeks
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`Annual: ₹${annual.toFixed(2)} | Monthly: ₹${monthly.toFixed(2)}`} />
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

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs">
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Daily</span>
            <span className="font-semibold text-white font-mono text-sm">₹{daily.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Weekly</span>
            <span className="font-semibold text-white font-mono text-sm">₹{weekly.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Monthly Average</span>
            <span className="font-semibold text-white font-mono text-sm">₹{monthly.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 9. Overtime Calculator
// ----------------------------------------------------
export const OvertimeCalculator: React.FC = () => {
  const [regularWage, setRegularWage] = useState('200');
  const [regularHours, setRegularHours] = useState('40');
  const [overtimeHours, setOvertimeHours] = useState('10');
  const [multiplier, setMultiplier] = useState('1.5');

  const wage = parseFloat(regularWage) || 0;
  const regH = parseFloat(regularHours) || 0;
  const otH = parseFloat(overtimeHours) || 0;
  const mult = parseFloat(multiplier) || 1.5;

  const regularPay = wage * regH;
  const otRate = wage * mult;
  const overtimePay = otRate * otH;
  const totalPay = regularPay + overtimePay;

  const handleReset = () => {
    setRegularWage('');
    setOvertimeHours('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Regular Hourly Rate (₹)
          </label>
          <input
            type="number"
            value={regularWage}
            onChange={(e) => setRegularWage(e.target.value)}
            placeholder="e.g. 200"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Regular Hours
          </label>
          <input
            type="number"
            value={regularHours}
            onChange={(e) => setRegularHours(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Overtime Hours
          </label>
          <input
            type="number"
            value={overtimeHours}
            onChange={(e) => setOvertimeHours(e.target.value)}
            placeholder="e.g. 10"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            OT Multiplier
          </label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500"
          >
            <option value="1.5">1.5x (Time & a half)</option>
            <option value="2.0">2.0x (Double time)</option>
            <option value="2.5">2.5x (Special rate)</option>
            <option value="1.25">1.25x</option>
          </select>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Total Gross Pay
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{totalPay.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              Includes {regH} regular hours + {otH} overtime hours
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`₹${totalPay.toFixed(2)}`} />
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

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs">
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Regular Pay</span>
            <span className="font-semibold text-white font-mono text-sm">₹{regularPay.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Overtime Rate</span>
            <span className="font-semibold text-white font-mono text-sm">₹{otRate.toFixed(2)}/hr</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Overtime Earnings</span>
            <span className="font-semibold text-emerald-400 font-mono text-sm">+₹{overtimePay.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 10. GST Calculator
// ----------------------------------------------------
export const GstCalculator: React.FC = () => {
  const [amount, setAmount] = useState('10000');
  const [rate, setRate] = useState('18');
  const [type, setType] = useState<'exclusive' | 'inclusive'>('exclusive');

  const amt = parseFloat(amount) || 0;
  const r = parseFloat(rate) || 0;

  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (type === 'exclusive') {
    baseAmount = amt;
    gstAmount = (amt * r) / 100;
    totalAmount = amt + gstAmount;
  } else {
    totalAmount = amt;
    baseAmount = amt / (1 + r / 100);
    gstAmount = totalAmount - baseAmount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;

  const handleReset = () => setAmount('');

  return (
    <div className="space-y-6">
      <div className="flex border-b border-white/[0.08] gap-2">
        <button
          type="button"
          onClick={() => setType('exclusive')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            type === 'exclusive'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Add GST (Exclusive)
        </button>
        <button
          type="button"
          onClick={() => setType('inclusive')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            type === 'inclusive'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Remove GST (Inclusive)
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            {type === 'exclusive' ? 'Net Base Amount (₹)' : 'Total Amount (With GST) (₹)'}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 10000"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            GST Slab Rate
          </label>
          <div className="flex gap-2">
            {[5, 12, 18, 28].map((slab) => (
              <button
                key={slab}
                type="button"
                onClick={() => setRate(slab.toString())}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  rate === slab.toString()
                    ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]'
                    : 'bg-[#11131E] text-neutral-300 border-white/[0.1] hover:border-purple-500/30'
                }`}
              >
                {slab}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              {type === 'exclusive' ? 'Total Payable (With GST)' : 'Base Price (Without GST)'}
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{(type === 'exclusive' ? totalAmount : baseAmount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              GST ({rate}%): ₹{gstAmount.toFixed(2)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton
              textToCopy={`Total: ₹${totalAmount.toFixed(2)} | GST: ₹${gstAmount.toFixed(2)}`}
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08] text-xs">
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Base Amount</span>
            <span className="font-semibold text-white font-mono text-sm">₹{baseAmount.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Total GST</span>
            <span className="font-semibold text-purple-300 font-mono text-sm">₹{gstAmount.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">CGST ({parseFloat(rate) / 2}%)</span>
            <span className="font-semibold text-white font-mono text-sm">₹{cgst.toFixed(2)}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">SGST ({parseFloat(rate) / 2}%)</span>
            <span className="font-semibold text-white font-mono text-sm">₹{sgst.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 11. EMI Calculator
// ----------------------------------------------------
export const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState('1500000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [loanTenureYears, setLoanTenureYears] = useState('15');

  const p = parseFloat(loanAmount) || 0;
  const annualR = parseFloat(interestRate) || 0;
  const years = parseFloat(loanTenureYears) || 0;

  const n = years * 12;
  const monthlyR = annualR / (12 * 100);

  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (p > 0 && annualR > 0 && n > 0) {
    const factor = Math.pow(1 + monthlyR, n);
    emi = (p * monthlyR * factor) / (factor - 1);
    totalPayment = emi * n;
    totalInterest = totalPayment - p;
  } else if (p > 0 && annualR === 0 && n > 0) {
    emi = p / n;
    totalPayment = p;
    totalInterest = 0;
  }

  const handleReset = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTenureYears('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="e.g. 1500000"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Annual Interest Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="e.g. 8.5"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Tenure (Years)
          </label>
          <input
            type="number"
            value={loanTenureYears}
            onChange={(e) => setLoanTenureYears(e.target.value)}
            placeholder="e.g. 15"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Monthly Loan EMI
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{emi.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-purple-300 mt-1">
              For {n} months at {annualR}% annual rate
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`Monthly EMI: ₹${emi.toFixed(2)}`} />
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

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs">
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Principal Amount</span>
            <span className="font-semibold text-white font-mono text-sm">₹{p.toLocaleString('en-IN')}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Total Interest</span>
            <span className="font-semibold text-rose-400 font-mono text-sm">
              +₹{totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Total Payable</span>
            <span className="font-semibold text-white font-mono text-sm">
              ₹{totalPayment.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 12. Simple Interest Calculator
// ----------------------------------------------------
export const SimpleInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('50000');
  const [rate, setRate] = useState('7');
  const [time, setTime] = useState('3');

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const t = parseFloat(time) || 0;

  const interest = (p * r * t) / 100;
  const maturity = p + interest;

  const handleReset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Principal (₹)
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="e.g. 50000"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Annual Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g. 7"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Time (Years)
          </label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g. 3"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Total Maturity Value
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{maturity.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-emerald-400 font-medium mt-1">
              Simple Interest Earned: +₹{interest.toFixed(2)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`Interest: ₹${interest.toFixed(2)} | Maturity: ₹${maturity.toFixed(2)}`} />
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

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08] text-xs">
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Principal</span>
            <span className="font-semibold text-white font-mono text-sm">₹{p.toLocaleString('en-IN')}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Interest</span>
            <span className="font-semibold text-emerald-400 font-mono text-sm">+₹{interest.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 13. Compound Interest Calculator
// ----------------------------------------------------
export const CompoundInterestCalculator: React.FC = () => {
  const [initialPrincipal, setInitialPrincipal] = useState('25000');
  const [monthlyContribution, setMonthlyContribution] = useState('2000');
  const [annualRate, setAnnualRate] = useState('12');
  const [years, setYears] = useState('10');
  const [frequency, setFrequency] = useState<'12' | '4' | '1'>('12');

  const p = parseFloat(initialPrincipal) || 0;
  const pmt = parseFloat(monthlyContribution) || 0;
  const r = (parseFloat(annualRate) || 0) / 100;
  const t = parseFloat(years) || 0;
  const n = parseInt(frequency);

  const fvPrincipal = p * Math.pow(1 + r / n, n * t);

  const rm = r / 12;
  const totalMonths = t * 12;
  let fvContributions = 0;
  if (pmt > 0 && rm > 0) {
    fvContributions = pmt * ((Math.pow(1 + rm, totalMonths) - 1) / rm);
  } else if (pmt > 0 && rm === 0) {
    fvContributions = pmt * totalMonths;
  }

  const totalFutureValue = fvPrincipal + fvContributions;
  const totalDeposits = p + pmt * totalMonths;
  const totalInterestEarned = Math.max(0, totalFutureValue - totalDeposits);

  const handleReset = () => {
    setInitialPrincipal('');
    setMonthlyContribution('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Initial Principal (₹)
          </label>
          <input
            type="number"
            value={initialPrincipal}
            onChange={(e) => setInitialPrincipal(e.target.value)}
            placeholder="e.g. 25000"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Monthly Contribution (₹)
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            placeholder="e.g. 2000"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Annual Return Rate (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            placeholder="e.g. 12"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Time (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="e.g. 10"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Compounding Frequency
          </label>
          <div className="flex gap-2">
            {[
              { label: 'Monthly', val: '12' },
              { label: 'Quarterly', val: '4' },
              { label: 'Annually', val: '1' },
            ].map((f) => (
              <button
                key={f.val}
                type="button"
                onClick={() => setFrequency(f.val as any)}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  frequency === f.val
                    ? 'bg-purple-600 text-white border-purple-500 shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]'
                    : 'bg-[#11131E] text-neutral-300 border-white/[0.1] hover:border-purple-500/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Projected Future Corpus
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              ₹{totalFutureValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-emerald-400 font-medium mt-1">
              Wealth Gain (Interest): +₹{totalInterestEarned.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`Corpus: ₹${totalFutureValue.toFixed(2)}`} />
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

        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs">
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Principal</span>
            <span className="font-semibold text-white font-mono text-sm">₹{p.toLocaleString('en-IN')}</span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Total Invested</span>
            <span className="font-semibold text-white font-mono text-sm">
              ₹{totalDeposits.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </span>
          </div>
          <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
            <span className="text-neutral-400 block text-[10px] uppercase">Compound Gain</span>
            <span className="font-semibold text-emerald-400 font-mono text-sm">
              +₹{totalInterestEarned.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
