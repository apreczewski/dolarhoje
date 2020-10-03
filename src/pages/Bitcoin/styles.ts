import styled from 'styled-components';
import colors from '../../styles/colors';
// https://pigment.shapefactory.co/?a=252b4d&b=faca01

export const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 1200px) {
    min-width: 450px;
    max-width: 100%;
  }
`;

export const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background: ${colors.portGore};
  color: ${colors.sunglow};

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 30px 0 0 0;
`;

export const Info = styled.div`
  margin: 0 0 30px 0;
  padding: 9px;
  border-radius: 9px;
  background: ${colors.sunglow};
  border: 1px solid ${colors.cloudBurst};
`;

export const ValueDollar = styled.div`
  padding: 5px;
  font-size: 50px;
  font-weight: bold;
  color: ${colors.cloudBurst};
`;

export const Data = styled.div`
  padding: 0 0 15px 0;
  font-size: 12px;
  font-weight: bold;
  color: ${colors.cloudBurst};
`;

export const Body = styled.div`
  margin: 50px 0;
`;

export const Title = styled.div`
  /* margin: 10px 0 20px 0; */
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

export const Paragraph = styled.p`
  margin: 0 0 20px 0;
  width: 840px;
  justify-self: left;
  text-align: justify;
  font-size: 18px;

  @media (max-width: 1200px) {
    width: 430px;
    padding: 0 30px;
  }
`;

export const CopyBtn = styled.button`
  text-decoration: none;
  border: none;
`;
