import styled from 'styled-components';

export const Image = styled.img`
  margin: 10px 25px;
  width: 20%;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 25px;
    width: 25px;
    margin-left: 15px;
  }
`;

export const Name = styled.p`
  padding: 0;
  text-align: left;
  font-size: 2rem;
  color: grey;
`;
