import React from 'react';
import {
  PercentageCalculator,
  PercentageChangeCalculator,
  AverageCalculator,
  RatioCalculator,
} from './calculators/Calculators';
import {
  DiscountCalculator,
  ProfitLossCalculator,
  SalaryCalculator,
  HourlySalaryCalculator,
  OvertimeCalculator,
  GstCalculator,
  EmiCalculator,
  SimpleInterestCalculator,
  CompoundInterestCalculator,
} from './finance/FinanceTools';
import {
  AgeCalculator,
  DateDifferenceCalculator,
  TimeDurationCalculator,
} from './datetime/DateTimeTools';
import {
  LengthConverter,
  WeightConverter,
  TemperatureConverter,
  SpeedConverter,
  AreaConverter,
  DataStorageConverter,
  TimeConverter,
} from './converters/ConverterTools';
import {
  WordCounter,
  CharacterCounter,
  CaseConverter,
  RemoveExtraSpaces,
  TextCleaner,
} from './text/TextTools';
import {
  PercentageFromMarksCalculator,
  CgpaToPercentageCalculator,
  MarksRequiredCalculator,
  AttendanceCalculator,
} from './education/EducationTools';

const REGISTRY: Record<string, React.FC> = {
  // Calculators & Math
  'percentage-calculator': PercentageCalculator,
  'percentage-increase-decrease-calculator': PercentageChangeCalculator,
  'average-calculator': AverageCalculator,
  'ratio-calculator': RatioCalculator,

  // Finance
  'discount-calculator': DiscountCalculator,
  'profit-loss-calculator': ProfitLossCalculator,
  'salary-calculator': SalaryCalculator,
  'hourly-salary-calculator': HourlySalaryCalculator,
  'overtime-calculator': OvertimeCalculator,
  'gst-calculator': GstCalculator,
  'emi-calculator': EmiCalculator,
  'simple-interest-calculator': SimpleInterestCalculator,
  'compound-interest-calculator': CompoundInterestCalculator,

  // Date & Time
  'age-calculator': AgeCalculator,
  'date-difference-calculator': DateDifferenceCalculator,
  'time-duration-calculator': TimeDurationCalculator,

  // Converters
  'length-converter': LengthConverter,
  'weight-converter': WeightConverter,
  'temperature-converter': TemperatureConverter,
  'speed-converter': SpeedConverter,
  'area-converter': AreaConverter,
  'data-storage-converter': DataStorageConverter,
  'time-converter': TimeConverter,

  // Text Tools
  'word-counter': WordCounter,
  'character-counter': CharacterCounter,
  'case-converter': CaseConverter,
  'remove-extra-spaces': RemoveExtraSpaces,
  'text-cleaner': TextCleaner,

  // Education
  'percentage-from-marks': PercentageFromMarksCalculator,
  'cgpa-to-percentage': CgpaToPercentageCalculator,
  'marks-required': MarksRequiredCalculator,
  'attendance-calculator': AttendanceCalculator,
};

interface ToolRendererProps {
  slug: string;
}

export const ToolRenderer: React.FC<ToolRendererProps> = ({ slug }) => {
  const Component = REGISTRY[slug];

  if (!Component) {
    return (
      <div className="p-8 text-center text-sm text-neutral-500 bg-neutral-50 rounded-xl border border-neutral-200">
        Tool component for &ldquo;{slug}&rdquo; is currently being loaded or updated.
      </div>
    );
  }

  return <Component />;
};
