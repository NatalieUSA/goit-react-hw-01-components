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
