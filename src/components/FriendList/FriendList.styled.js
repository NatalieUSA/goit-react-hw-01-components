import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  padding: 150px 0;
  list-style: none;

  max-width: 50%;
  margin-top: 5vh;
  flex-direction: column;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const Item = styled.li`
  width: 100%;
  //   display: grid;
  //   grid-template-columns: 1fr 2fr 3fr;
  margin-top: 3vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;
