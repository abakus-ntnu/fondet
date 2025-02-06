import { PortableText } from 'next-sanity';
import { Section } from '../../utils/types';

type Props = {
  section: Section;
};

const ParagraphSection = ({ section }: Props) => {
  return (
    <div className="section">
      <h2>{section.title}</h2>
      <PortableText value={section.paragraphs} />
    </div>
  );
};

export default ParagraphSection;
