import PropTypes from 'prop-types';

import { List, Label, Percentage, ListItem } from './StatList.styled';

export const StatList = ({ stats }) => {
  // console.log(stats.label);
  return (
    <List>
      {stats.map(stat => {
        return (
          <ListItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label> {stat.label}</Label>
            <Percentage> {stat.percentage}%</Percentage>
          </ListItem>
        );
      })}
    </List>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

StatList.protoType = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
