import styled from 'styled-components';

export const Table = styled.table`
  // margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;

  margin: 30px auto;
  width: 60%;
  text-align: center;
  border-collapse: collapse;
`;

export const Header = styled.thead`
  font-size: 1.5rem;
  //   text-align: center;
  // height: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background-color: #00bcd4;
  color: white;
  border-radius: 2rem;
`;

export const Title = styled.tr`
  width: 20%;
  color: grey;
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;

  border-radius: 2rem;

  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TitleItem = styled.th`
  width: 200px;
  padding: 0.5rem 2rem;
  color: white;
  font-size: 1.2rem;
  text-transform: uppercase;

  :not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;
