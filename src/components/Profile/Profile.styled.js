import styled from 'styled-components';

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 25%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  margin: 150px auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const Image = styled.img`
  display: flex;
  max-width: 50%;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 2rem;
  color: grey;
`;

export const Tag = styled.p`
  margin: 0.5rem;
  font-size: 1.2rem;
  color: grey;
`;
export const Location = styled.p`
  margin: 0.5rem;
  font-size: 1rem;
  color: grey;
`;
