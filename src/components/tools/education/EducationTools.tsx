import React, { useState } from 'react';
import { RotateCcw, Plus, Trash2 } from 'lucide-react';
import { CopyButton } from '../../common/CopyButton';

// ----------------------------------------------------
// 29. Percentage from Marks Calculator
// ----------------------------------------------------
export const PercentageFromMarksCalculator: React.FC = () => {
  const [mode, setMode] = useState<'single' | 'multi'>('single');

  const [obtained, setObtained] = useState('425');
  const [total, setTotal] = useState('500');

  const [subjects, setSubjects] = useState([
    { name: 'Mathematics', obtained: 88, total: 100 },
    { name: 'Science', obtained: 92, total: 100 },
    { name: 'English', obtained: 85, total: 100 },
    { name: 'Social Studies', obtained: 78, total: 100 },
    { name: 'Second Language', obtained: 82, total: 100 },
  ]);

  const getGrade = (pct: number) => {
    if (pct >= 90) return { letter: 'A+', text: 'Outstanding' };
    if (pct >= 80) return { letter: 'A', text: 'Excellent' };
    if (pct >= 70) return { letter: 'B', text: 'Very Good' };
    if (pct >= 60) return { letter: 'C', text: 'Good' };
    if (pct >= 50) return { letter: 'D', text: 'Pass' };
    return { letter: 'F', text: 'Needs Improvement' };
  };

  const singleObt = parseFloat(obtained) || 0;
  const singleTot = parseFloat(total) || 0;
  const singlePct = singleTot > 0 ? (singleObt / singleTot) * 100 : 0;
  const singleGrade = getGrade(singlePct);

  const multiObt = subjects.reduce((sum, s) => sum + (Number(s.obtained) || 0), 0);
  const multiTot = subjects.reduce((sum, s) => sum + (Number(s.total) || 0), 0);
  const multiPct = multiTot > 0 ? (multiObt / multiTot) * 100 : 0;
  const multiGrade = getGrade(multiPct);

  const addSubject = () => {
    setSubjects([...subjects, { name: `Subject ${subjects.length + 1}`, obtained: 80, total: 100 }]);
  };

  const removeSubject = (index: number) => {
    if (subjects.length <= 1) return;
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex border-b border-white/[0.08] gap-2">
        <button
          type="button"
          onClick={() => setMode('single')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            mode === 'single'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Quick Total Marks
        </button>
        <button
          type="button"
          onClick={() => setMode('multi')}
          className={`pb-3 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer border-b-2 ${
            mode === 'multi'
              ? 'border-purple-500 text-white'
              : 'border-transparent text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Subject-Wise Marks
        </button>
      </div>

      {mode === 'single' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Marks Obtained
              </label>
              <input
                type="number"
                value={obtained}
                onChange={(e) => setObtained(e.target.value)}
                placeholder="e.g. 425"
                className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                Total / Maximum Marks
              </label>
              <input
                type="number"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="e.g. 500"
                className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
              />
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                  Calculated Percentage
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                  {singlePct.toFixed(2)}%
                </div>
                <div className="text-xs text-purple-300 mt-1">
                  Grade: <strong className="text-white">{singleGrade.letter}</strong> ({singleGrade.text})
                </div>
              </div>
              <CopyButton textToCopy={`${singlePct.toFixed(2)}% (Grade ${singleGrade.letter})`} />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.08] text-xs">
              <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Score Ratio</span>
                <span className="font-semibold text-white font-mono text-sm">
                  {singleObt} / {singleTot}
                </span>
              </div>
              <div className="p-2.5 bg-[#0F111C] rounded-lg border border-white/[0.06]">
                <span className="text-neutral-400 block text-[10px] uppercase font-mono">Standing</span>
                <span className={`font-semibold font-mono text-sm ${singlePct >= 40 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {singlePct >= 40 ? 'Passed' : 'Failed'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'multi' && (
        <div className="space-y-4">
          <div className="space-y-2">
            {subjects.map((sub, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  type="text"
                  value={sub.name}
                  onChange={(e) => {
                    const next = [...subjects];
                    next[idx].name = e.target.value;
                    setSubjects(next);
                  }}
                  className="flex-1 px-3 py-2 bg-[#11131E] border border-white/[0.12] rounded-lg text-xs text-white focus:border-purple-500"
                  placeholder="Subject"
                />
                <input
                  type="number"
                  value={sub.obtained}
                  onChange={(e) => {
                    const next = [...subjects];
                    next[idx].obtained = parseFloat(e.target.value) || 0;
                    setSubjects(next);
                  }}
                  className="w-24 px-3 py-2 bg-[#11131E] border border-white/[0.12] rounded-lg text-xs text-white font-mono focus:border-purple-500"
                  placeholder="Obtained"
                />
                <span className="text-neutral-500 text-xs">/</span>
                <input
                  type="number"
                  value={sub.total}
                  onChange={(e) => {
                    const next = [...subjects];
                    next[idx].total = parseFloat(e.target.value) || 0;
                    setSubjects(next);
                  }}
                  className="w-24 px-3 py-2 bg-[#11131E] border border-white/[0.12] rounded-lg text-xs text-white font-mono focus:border-purple-500"
                  placeholder="Total"
                />
                <button
                  type="button"
                  onClick={() => removeSubject(idx)}
                  disabled={subjects.length <= 1}
                  className="p-2 text-neutral-500 hover:text-rose-400 disabled:opacity-30 cursor-pointer"
                  title="Remove subject"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addSubject}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-purple-300 bg-purple-950/40 hover:bg-purple-950/70 border border-purple-500/30 rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Subject</span>
          </button>

          <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
                  Cumulative Percentage
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
                  {multiPct.toFixed(2)}%
                </div>
                <div className="text-xs text-purple-300 mt-1">
                  Marks: {multiObt} / {multiTot} across {subjects.length} subjects
                </div>
              </div>
              <CopyButton textToCopy={`${multiPct.toFixed(2)}% (Grade ${multiGrade.letter})`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// 30. CGPA to Percentage Calculator
// ----------------------------------------------------
export const CgpaToPercentageCalculator: React.FC = () => {
  const [cgpa, setCgpa] = useState('8.4');
  const [formula, setFormula] = useState<'cbse' | 'linear10' | 'scale4'>('cbse');

  const val = parseFloat(cgpa) || 0;

  let percentage = 0;
  if (formula === 'cbse') {
    percentage = val * 9.5;
  } else if (formula === 'linear10') {
    percentage = (val / 10) * 100;
  } else if (formula === 'scale4') {
    percentage = (val / 4) * 100;
  }

  percentage = Math.min(100, Math.max(0, percentage));

  let division = 'First Class';
  if (percentage >= 75) division = 'First Class with Distinction';
  else if (percentage >= 60) division = 'First Class';
  else if (percentage >= 50) division = 'Second Class';
  else if (percentage >= 40) division = 'Pass Division';
  else division = 'Failed';

  const handleReset = () => setCgpa('');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Your CGPA / GPA
          </label>
          <input
            type="number"
            step="0.01"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            placeholder="e.g. 8.4"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Conversion System
          </label>
          <select
            value={formula}
            onChange={(e) => setFormula(e.target.value as any)}
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white focus:border-purple-500"
          >
            <option value="cbse" className="bg-[#11131E] text-white">CBSE / Indian University Standard (CGPA × 9.5)</option>
            <option value="linear10" className="bg-[#11131E] text-white">10-Point Scale Linear ((CGPA / 10) × 100)</option>
            <option value="scale4" className="bg-[#11131E] text-white">US 4.0 GPA Scale ((GPA / 4) × 100)</option>
          </select>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Equivalent Percentage
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white font-mono tabular-nums">
              {percentage.toFixed(2)}%
            </div>
            <div className="text-xs text-purple-300 mt-1">
              Academic division: <strong className="text-white">{division}</strong>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`${percentage.toFixed(2)}% (${division})`} />
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

        <div className="pt-3 border-t border-white/[0.08] text-xs text-neutral-400">
          Applied Formula:{' '}
          <span className="font-mono text-purple-300">
            {formula === 'cbse'
              ? `${cgpa} × 9.5 = ${percentage.toFixed(2)}%`
              : formula === 'linear10'
              ? `(${cgpa} / 10) × 100 = ${percentage.toFixed(2)}%`
              : `(${cgpa} / 4) × 100 = ${percentage.toFixed(2)}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 31. Marks Required Calculator
// ----------------------------------------------------
export const MarksRequiredCalculator: React.FC = () => {
  const [currentScore, setCurrentScore] = useState('78');
  const [currentWeight, setCurrentWeight] = useState('60');
  const [targetGrade, setTargetGrade] = useState('85');

  const cur = parseFloat(currentScore) || 0;
  const curW = parseFloat(currentWeight) || 0;
  const target = parseFloat(targetGrade) || 0;

  const finalWeight = 100 - curW;

  let requiredScore = 0;
  if (finalWeight > 0) {
    requiredScore = (target - (cur * curW) / 100) / (finalWeight / 100);
  }

  const handleReset = () => {
    setCurrentScore('');
    setCurrentWeight('');
    setTargetGrade('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Current Course Score (%)
          </label>
          <input
            type="number"
            value={currentScore}
            onChange={(e) => setCurrentScore(e.target.value)}
            placeholder="e.g. 78"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Current Weight (%)
          </label>
          <input
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            placeholder="e.g. 60"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
          <span className="text-[10px] text-neutral-400 mt-1 block font-mono">
            Final Exam Weight: {Math.max(0, finalWeight)}%
          </span>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Target Desired Grade (%)
          </label>
          <input
            type="number"
            value={targetGrade}
            onChange={(e) => setTargetGrade(e.target.value)}
            placeholder="e.g. 85"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Score Needed on Final Exam ({finalWeight}% weight)
            </span>
            <div
              className={`text-3xl sm:text-4xl font-bold font-mono tabular-nums ${
                requiredScore > 100
                  ? 'text-rose-400'
                  : requiredScore <= 0
                  ? 'text-emerald-400'
                  : 'text-white'
              }`}
            >
              {requiredScore <= 0 ? '0% (Already Met!)' : `${requiredScore.toFixed(2)}%`}
            </div>
            <div className="text-xs text-neutral-300 mt-1">
              {requiredScore > 100
                ? 'Mathematically unattainable with the remaining exam weight.'
                : requiredScore <= 0
                ? 'You already secured your target grade.'
                : `Score at least ${requiredScore.toFixed(2)}% on final exam to reach ${target}%.`}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton textToCopy={`${requiredScore.toFixed(2)}% needed on final`} />
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
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 32. Attendance Calculator
// ----------------------------------------------------
export const AttendanceCalculator: React.FC = () => {
  const [attended, setAttended] = useState('38');
  const [total, setTotal] = useState('52');
  const [target, setTarget] = useState('75');

  const att = parseFloat(attended) || 0;
  const tot = parseFloat(total) || 0;
  const tgt = parseFloat(target) || 75;

  const currentPct = tot > 0 ? (att / tot) * 100 : 0;
  const targetRatio = tgt / 100;

  let classesNeeded = 0;
  let canSkip = 0;

  if (targetRatio > 0 && targetRatio < 1 && tot > 0) {
    if (currentPct < tgt) {
      const numerator = targetRatio * tot - att;
      const denominator = 1 - targetRatio;
      classesNeeded = Math.max(0, Math.ceil(numerator / denominator));
    } else {
      const allowed = Math.floor((att - targetRatio * tot) / targetRatio);
      canSkip = Math.max(0, allowed);
    }
  }

  const handleReset = () => {
    setAttended('');
    setTotal('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Classes Attended
          </label>
          <input
            type="number"
            value={attended}
            onChange={(e) => setAttended(e.target.value)}
            placeholder="e.g. 38"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Total Classes Held
          </label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="e.g. 52"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
            Target Attendance (%)
          </label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="e.g. 75"
            className="w-full px-3.5 py-2.5 bg-[#11131E] border border-white/[0.12] rounded-xl text-sm text-white font-mono focus:border-purple-500"
          />
        </div>
      </div>

      <div className="p-5 bg-gradient-to-br from-[#181628] to-[#10121F] border border-purple-500/30 rounded-xl shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400 block mb-0.5 uppercase tracking-wider font-mono">
              Current Attendance
            </span>
            <div
              className={`text-3xl sm:text-4xl font-bold font-mono tabular-nums ${
                currentPct >= tgt ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {currentPct.toFixed(2)}%
            </div>
            <div className="text-xs text-neutral-300 mt-1">
              Required benchmark: {tgt}% ({currentPct >= tgt ? 'Eligible' : 'Attendance Shortage'})
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton
              textToCopy={`Current: ${currentPct.toFixed(2)}% | ${
                currentPct < tgt
                  ? `Need ${classesNeeded} consecutive classes`
                  : `Can safely skip ${canSkip} classes`
              }`}
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

        <div className="pt-4 border-t border-white/[0.08]">
          {currentPct < tgt ? (
            <div className="p-3.5 bg-rose-950/30 border border-rose-500/30 rounded-xl text-xs text-rose-300">
              <strong>Shortage Warning:</strong> You must attend the next{' '}
              <span className="font-bold font-mono text-sm text-white">{classesNeeded}</span> consecutive classes
              without missing any to reach {tgt}%.
            </div>
          ) : (
            <div className="p-3.5 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
              <strong>Safe Zone:</strong> You can safely skip{' '}
              <span className="font-bold font-mono text-sm text-white">{canSkip}</span> upcoming classes while remaining
              at or above {tgt}% attendance.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
