import styled from 'styled-components';

export const LikesList = styled.ul`
  display: flex;
  border-radius: 0 0 0.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const ViewsList = styled.li`
  list-style: none;
  display: flex;
  text-align: center;
  border-left: 1px solid #d3d5e3;
  border-right: 1px solid #d3d5e3;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
  background-color: rgba(241, 241, 241, 0.833);
`;

export const Quantity = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  color: grey;
`;

export const Label = styled.span`
  padding-bottom: 0.5rem;
  color: #8a8b8e;
`;
