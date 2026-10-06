import { CategoryMeta, ToolCategory } from '../types';

export const CATEGORIES: Record<ToolCategory, CategoryMeta> = {
  calculators: {
    id: 'calculators',
    name: 'Calculators',
    slug: 'calculators',
    description: 'Precision calculation utilities for percentages, averages, ratios, and mathematical operations.',
    iconName: 'Calculator',
  },
  finance: {
    id: 'finance',
    name: 'Finance',
    slug: 'finance',
    description: 'Practical money tools for salary breakdown, loan EMIs, interest, taxes, discounts, and profit margins.',
    iconName: 'DollarSign',
  },
  datetime: {
    id: 'datetime',
    name: 'Date & Time',
    slug: 'datetime',
    description: 'Accurate chronological tools to compute age, calendar differences, elapsed time, and duration.',
    iconName: 'Calendar',
  },
  conversion: {
    id: 'conversion',
    name: 'Conversion',
    slug: 'conversion',
    description: 'Instant unit conversion for length, weight, temperature, speed, area, storage, and time.',
    iconName: 'ArrowRightLeft',
  },
  text: {
    id: 'text',
    name: 'Text Tools',
    slug: 'text',
    description: 'Clean, format, count, and modify text content without uploading data anywhere.',
    iconName: 'FileText',
  },
  education: {
    id: 'education',
    name: 'Education',
    slug: 'education',
    description: 'Academic tools for calculating marks percentage, CGPA conversions, passing targets, and college attendance.',
    iconName: 'GraduationCap',
  },
  documents: {
    id: 'documents',
    name: 'Documents',
    slug: 'documents',
    description: 'Document and file helpers built for privacy and client-side processing.',
    iconName: 'FileCheck',
  },
  images: {
    id: 'images',
    name: 'Images',
    slug: 'images',
    description: 'Image formatting, aspect ratio, and resolution measurement tools.',
    iconName: 'Image',
  },
};

export const CATEGORY_LIST = Object.values(CATEGORIES);
