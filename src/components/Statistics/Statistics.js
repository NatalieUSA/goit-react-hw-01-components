import { StatList } from './StatList';

export const Statistics = ({ title, stats }) => {
  console.log(stats);
  return (
    <section>
      <h2>{title}</h2>

      <StatList stats={stats} />
    </section>
  );
};
