import PropTypes from 'prop-types';

import { List, Label, Percentage, ListItem } from './StatList.styled';

export const StatList = ({ stats }) => {
  // console.log(stats.label);
  return (
    <List>
      {stats.map(stat => {
        return (
          <ListItem key={stat.id}>
            <Label> {stat.label}</Label>
            <Percentage> {stat.percentage}%</Percentage>
          </ListItem>
        );
      })}
    </List>
  );
};

StatList.protoType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
