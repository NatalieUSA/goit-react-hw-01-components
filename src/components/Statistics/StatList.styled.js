import styled from 'styled-components';

export const List = styled.ul`
  width: 50%;
  //   display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  //   flex-direction: column;
  text-align: center;
  //   text-shadow: 0 0 3px #000;
  bacground-color: lightgrey;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  //   text-shadow: 0 0 3px #000;
  border: 2px solid grey;
  border-radius: 0 0 0 0.5rem;
  bacground-color: lightgrey;
  width: 50%;
  //   width: 80px;
`;

export const Label = styled.span`
  padding-top: 1.3rem;
  font-size: 1rem;
  //   color: #fff;
  color: grey;
`;

export const Percentage = styled.span`
  padding: 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  //   color: #fff;
  color: grey;
`;
