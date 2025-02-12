import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { ChartValue, SectionPieChart } from '@/utils/types';

const renderLabel = (entry: ChartValue) => `${entry.label} – ${entry.value} % `;

const colorScale = [
  'rgb(72, 207, 212)',
  'rgb(33, 161, 166)',
  'rgb(13, 124, 128)',
  'rgb(202, 101, 165)',
  'rgb(217, 110, 110)',
  'rgb(200, 85, 85)',
  'rgb(204, 204, 0)',
  'rgb(168, 217, 110)',
  'rgb(200, 200, 200)',
];

type Props = {
  section: SectionPieChart;
};

const PieChartSection = ({ section }: Props) => {
  const parsedUpdatedAt = new Date(section.updatedAt ?? '');

  return (
    <div className="section">
      {section.title && <h2>{section.title}</h2>}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={1000} height={280}>
          <Pie
            data={section.values}
            nameKey={'label'}
            dataKey={'value'}
            innerRadius={30}
            outerRadius={100}
            label={renderLabel}
          >
            {section.values?.map((entry, i) => (
              <Cell
                key={entry.label}
                fill={colorScale[i % colorScale.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      {section.updatedAt && (
        <p>
          Tallene er sist oppdatert {parsedUpdatedAt.toLocaleString('no-NB')}
        </p>
      )}
    </div>
  );
};

export default PieChartSection;
