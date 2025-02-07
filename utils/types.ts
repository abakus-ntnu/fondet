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

export type ParagraphSection = SectionBase & {
  _type: 'paragraph-section';
  title: string;
  paragraphs: ParagraphBlock[];
};

export type Section = ParagraphSection;

export type Page = {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
  };
  sections: Section[];
};
