import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 0;
  max-width: 62%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin: 0;
  padding: 2rem;
  color: grey;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid #d3d5e3;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
