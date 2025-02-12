import { PortableText } from 'next-sanity';
import { SectionParagraph } from '@/utils/types';

type Props = {
  section: SectionParagraph;
};

const ParagraphSection = ({ section }: Props) => {
  return (
    <div className="section">
      {section.title && <h2>{section.title}</h2>}
      {section.paragraphs && <PortableText value={section.paragraphs} />}
    </div>
  );
};

export default ParagraphSection;
