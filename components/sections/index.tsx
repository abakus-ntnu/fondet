import { Section } from '../../utils/types';
import ParagraphSection from './ParagraphSection';
import PieChartSection from './PieChartSection';

type Props = {
  sections: Section[];
};

const Sections = ({ sections }: Props) => {
  return sections.map((section) => {
    if (section._type === 'paragraph-section')
      return <ParagraphSection key={section._key} section={section} />;
    if (section._type === 'piechart-section')
      return <PieChartSection key={section._key} section={section} />;
    return null;
  });
};

export default Sections;
