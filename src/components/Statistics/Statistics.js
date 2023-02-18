import { StatList } from './StatList';

import { Container, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <StatList stats={stats} />
    </Container>
  );
};
