import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 9px;
  padding: 25px;
  background: #ececec;
  box-shadow:
    0 -10px 15px rgba(255, 255, 255, 0.5),
    0 10px 15px rgba(70, 70, 70, 0.12);
  transition: box-shadow 1s;

  :hover {
    box-shadow:
    0 -10px 15px rgba(21,163,138, 0.12),
    0 10px 15px rgba(21,163,138, 0.12);
  }

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
  color: #7a7a7a;

  @media (max-width: 1200px) {
    width: 430px;
    padding: 0 30px 10px 30px;
  }
`;

export const Body = styled.div`
  width: 840px;
  justify-self: left;
  text-align: justify;
  font-size: 18px;
  color: #7a7a7a;

  @media (max-width: 1200px) {
    width: 430px;
  }
`;
