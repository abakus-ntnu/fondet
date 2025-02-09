type ParagraphBlock = {
  _type: 'block';
  _key: string;
  children: {
    _key: string;
    text: string;
  }[];
};

type SectionBase = {
  _key: string;
};

export type SectionParagraph = SectionBase & {
  _type: 'paragraph-section';
  title: string;
  paragraphs: ParagraphBlock[];
};

export type ChartValue = {
  label: string;
  value: number;
};

export type SectionPieChart = SectionBase & {
  _type: 'piechart-section';
  title: string;
  updatedAt: string;
  values: ChartValue[];
};

export type Section = SectionParagraph | SectionPieChart;

export type Page = {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
  };
  sections: Section[];
};
