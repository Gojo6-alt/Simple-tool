export type ToolCategory =
  | 'calculators'
  | 'finance'
  | 'datetime'
  | 'education'
  | 'conversion'
  | 'text'
  | 'documents'
  | 'images';

export interface CategoryMeta {
  id: ToolCategory;
  name: string;
  slug: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ToolConfig {
  id: string;
  name: string;
  slug: string;
  category: ToolCategory;
  description: string;
  iconName: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  popularity: number; // 1 - 100
  isFeatured?: boolean;
  howItWorks: string;
  formula?: string;
  faq: FAQItem[];
  relatedSlugs: string[];
}

export interface RecentToolItem {
  slug: string;
  name: string;
  category: ToolCategory;
  timestamp: number;
}
