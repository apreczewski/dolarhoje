import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 1200px) {
    min-width: 450px;
    max-width: 100%;
  }
`;

export const Title = styled.div`
  margin: 0 0 10px 0;
  width: 840px;
  justify-self: left;
  text-align: justify;
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 1200px) {
    width: 430px;
    padding: 0 30px 10px 30px;
  }
`;

export const Body = styled.p`
  margin: 0 0 30px 0;
  width: 840px;
  justify-self: left;
  text-align: justify;
  font-size: 18px;

  @media (max-width: 1200px) {
    width: 430px;
    padding: 0 30px;
  }
`;
