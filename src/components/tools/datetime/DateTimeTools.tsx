import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { CopyButton } from '../../common/CopyButton';

// ----------------------------------------------------
// 3. Age Calculator
// ----------------------------------------------------
export const AgeCalculator: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];
  const [birthDate, setBirthDate] = useState('2000-01-15');
  const [asOfDate, setAsOfDate] = useState(todayStr);

  const calculateAge = () => {
    if (!birthDate || !asOfDate) return null;
    const b = new Date(birthDate + 'T00:00:00');
    const target = new Date(asOfDate + 'T00:00:00');

    if (isNaN(b.getTime()) || isNaN(target.getTime()) || b > target) {
      return null;
    }

    let years = target.getFullYear() - b.getFullYear();
    let months = target.getMonth() - b.getMonth();
    let days = target.getDate() - b.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const diffMs = target.getTime() - b.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;

    const currentYear = target.getFullYear();
    let nextBday = new Date(currentYear, b.getMonth(), b.getDate());
    if (nextBday < target) {
      nextBday = new Date(currentYear + 1, b.getMonth(), b.getDate());
    }
    const daysToNextBday = Math.ceil((nextBday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24));
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const nextBdayDayName = dayNames[nextBday.getDay()];

    return {
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalHours,
      daysToNextBday,
      nextBdayDayName,
    };
  };

  const ageData = calculateAge();

  const handleReset = () => {
    setBirthDate('');
    setAsOfDate(todayStr);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Date of Birth
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500 font-mono [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Calculate Age On
          </label>
          <input
            type="date"
            value={asOfDate}
            onChange={(e) => setAsOfDate(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500 font-mono [color-scheme:dark]"
          />
        </div>
      </div>

      {ageData ? (
        <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                Exact Age
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                {ageData.years} Years, {ageData.months} Months, {ageData.days} Days
              </div>
              <div className="text-xs text-purple-300 mt-1">
                Next birthday in {ageData.daysToNextBday} days ({ageData.nextBdayDayName})
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton
                textToCopy={`${ageData.years} years, ${ageData.months} months, ${ageData.days} days`}
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
              <span className="text-neutral-400 block text-[10px] uppercase">Total Days</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {ageData.totalDays.toLocaleString()} d
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Total Weeks</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {ageData.totalWeeks.toLocaleString()} w
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Total Hours</span>
              <span className="font-semibold text-white font-mono tabular-nums text-sm">
                {ageData.totalHours.toLocaleString()} h
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Next Birthday</span>
              <span className="font-semibold text-purple-300 font-mono tabular-nums text-sm">
                {ageData.daysToNextBday} d left
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 text-xs text-neutral-400 bg-[#10121E] rounded-xl border border-white/[0.08]">
          Please select a valid date of birth earlier than the target date.
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// 4. Date Difference Calculator
// ----------------------------------------------------
export const DateDifferenceCalculator: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState(todayStr);
  const [includeEndDay, setIncludeEndDay] = useState(false);

  const calculateDiff = () => {
    if (!startDate || !endDate) return null;
    let d1 = new Date(startDate + 'T00:00:00');
    let d2 = new Date(endDate + 'T00:00:00');

    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return null;

    let isNegative = false;
    if (d1 > d2) {
      isNegative = true;
      const tmp = d1;
      d1 = d2;
      d2 = tmp;
    }

    let totalDays = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    if (includeEndDay) {
      totalDays += 1;
    }

    let weekdays = 0;
    let weekends = 0;
    const cur = new Date(d1.getTime());
    const limitDays = includeEndDay ? totalDays : totalDays;

    for (let i = 0; i < limitDays; i++) {
      const day = cur.getDay();
      if (day === 0 || day === 6) {
        weekends++;
      } else {
        weekdays++;
      }
      cur.setDate(cur.getDate() + 1);
    }

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();
    if (includeEndDay) days += 1;

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return {
      isNegative,
      totalDays,
      weeks: Math.floor(totalDays / 7),
      remainderDays: totalDays % 7,
      weekdays,
      weekends,
      years,
      months,
      days,
    };
  };

  const diffData = calculateDiff();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500 font-mono [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            End Date
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500 font-mono [color-scheme:dark]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="includeEndDay"
          checked={includeEndDay}
          onChange={(e) => setIncludeEndDay(e.target.checked)}
          className="rounded border-white/[0.2] bg-[#11131E] text-purple-600 focus:ring-purple-500 cursor-pointer"
        />
        <label htmlFor="includeEndDay" className="text-xs text-neutral-300 cursor-pointer select-none">
          Include end day in total count (+1 day)
        </label>
      </div>

      {diffData && (
        <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                Total Difference
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                {diffData.totalDays.toLocaleString()} Days
              </div>
              <div className="text-xs text-purple-300 mt-1">
                {diffData.years > 0 ? `${diffData.years} yrs, ` : ''}
                {diffData.months} months, {diffData.days} days
              </div>
            </div>
            <CopyButton textToCopy={`${diffData.totalDays} days`} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.08] text-xs">
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Weeks & Days</span>
              <span className="font-semibold text-white font-mono text-sm">
                {diffData.weeks}w {diffData.remainderDays}d
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Weekdays (M-F)</span>
              <span className="font-semibold text-white font-mono text-sm">
                {diffData.weekdays} weekdays
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Weekends (Sa-Su)</span>
              <span className="font-semibold text-white font-mono text-sm">
                {diffData.weekends} weekends
              </span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Total Hours</span>
              <span className="font-semibold text-purple-300 font-mono text-sm">
                {(diffData.totalDays * 24).toLocaleString()} hrs
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// 16. Time Duration Calculator
// ----------------------------------------------------
export const TimeDurationCalculator: React.FC = () => {
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:30');

  const calculateDuration = () => {
    if (!startTime || !endTime) return null;
    const [h1, m1] = startTime.split(':').map((v) => parseInt(v));
    const [h2, m2] = endTime.split(':').map((v) => parseInt(v));

    if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) return null;

    let startTotal = h1 * 60 + m1;
    let endTotal = h2 * 60 + m2;

    if (endTotal < startTotal) {
      endTotal += 24 * 60;
    }

    const diffMinutes = endTotal - startTotal;
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    const decimalHours = diffMinutes / 60;
    const totalSeconds = diffMinutes * 60;

    return {
      hours,
      minutes,
      decimalHours,
      totalMinutes: diffMinutes,
      totalSeconds,
    };
  };

  const dur = calculateDuration();

  const handleReset = () => {
    setStartTime('09:00');
    setEndTime('17:00');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Start Time
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500 [color-scheme:dark]"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            End Time
          </label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500 [color-scheme:dark]"
          />
        </div>
      </div>

      {dur && (
        <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                Duration
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                {dur.hours} hrs {dur.minutes} mins
              </div>
              <div className="text-xs text-purple-300 mt-1">
                Timesheet decimal: {dur.decimalHours.toFixed(2)} hours
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton textToCopy={`${dur.hours} hrs ${dur.minutes} mins (${dur.decimalHours.toFixed(2)} hrs)`} />
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
              <span className="text-neutral-400 block text-[10px] uppercase">Decimal Hours</span>
              <span className="font-semibold text-white font-mono text-sm">{dur.decimalHours.toFixed(2)} hrs</span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Total Minutes</span>
              <span className="font-semibold text-white font-mono text-sm">{dur.totalMinutes} min</span>
            </div>
            <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
              <span className="text-neutral-400 block text-[10px] uppercase">Total Seconds</span>
              <span className="font-semibold text-purple-300 font-mono text-sm">{dur.totalSeconds} sec</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
