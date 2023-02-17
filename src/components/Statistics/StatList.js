export const StatList = ({ stats }) => {
  console.log(stats.label);
  return (
    <ul>
      {stats.map(stat => {
        return (
          <li className="item" key={stat.id}>
            <span className="label"> {stat.label}</span>
            <span className="percentage"> {stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};
