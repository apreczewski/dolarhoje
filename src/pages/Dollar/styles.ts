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

export const Quotation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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

export const FieldValue = styled.div`
  height: 80px;
  width: 400px;
  border: none;
  background: ${colors.portGore};
  border-radius: 9px;
  padding: 15px 10px 15px 10px;
  margin: 0 30px 0 0;
  border: 1px solid ${colors.portGore};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:hover {
    box-shadow: 0px 0.5px 10px ${colors.electricViolet};
  }

  > span {
    align-self: flex-end;
    font-size: 1.5em;
    color: ${colors.supernova};
    margin-right: 25px;
  }

  > input {
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    text-decoration: none;
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    font-size: 3.5em;
    color: ${colors.supernova};
  }

  > svg {
    font-size: 25px;
    color: ${colors.supernova};
    margin-left: 10px;

    &:hover {
      cursor: pointer;
      color: ${colors.white};
    }
  }

  @media (max-width: 1200px) {
    margin: 0 0 15px 0;
  }
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
