import { Page } from './types.sanity';

// Helpers
type ExtractElement<T> = T extends (infer U)[] ? U : never;

// Page sections
type Sections = {
  [K in ExtractElement<Page['sections']> as K['_type']]: K;
};

export type Section = SectionParagraph | SectionPieChart;

export type SectionParagraph = Sections['paragraph-section'];
export type SectionPieChart = Sections['piechart-section'];

export type ChartValue = ExtractElement<SectionPieChart['values']>;
