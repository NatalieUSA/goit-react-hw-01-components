import styled from 'styled-components';

export const List = styled.ul`
  // //   display: grid;
  // grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  list-style: none;
`;

export const ListItem = styled.li`
  // display: flex;
  // flex-direction: column;
  // text-align: center;
  // //   text-shadow: 0 0 3px #000;
  //border: 2px solid grey;
  // border-radius: 0 0 0 0.5rem;

  // width: 50%;
  // //   width: 80px;

  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;

  color: #ffffff;
  text-shadow: 3px 3px 6px #000000;
`;

export const Label = styled.span`
  padding-top: 1.3rem;
  font-size: 1rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-right: 0;
    padding-left: 0;
  } ;
`;

export const Percentage = styled.span`
  padding: 1.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding-right: 0;
    padding-left: 0;
  } ;
`;
