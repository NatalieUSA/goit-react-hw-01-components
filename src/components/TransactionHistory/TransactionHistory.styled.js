import styled from 'styled-components';

export const Table = styled.table`
  margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const Header = styled.thead`
  //   font-size: 1.5rem;
  //   text-align: center;
`;

export const Title = styled.tr`
  width: 20%;
  color: #8a8b8e;
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;

//   :nth-child(even) {
//     background-color: #f2f2f2;
  }
`;

export const TitleItem = styled.th`
  width: 20%;
  padding: 0.5rem 2rem;
  background-color: grey;
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
`;
