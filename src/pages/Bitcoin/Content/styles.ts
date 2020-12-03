import styled from 'styled-components';
// https://pigment.shapefactory.co/?a=252b4d&b=faca01

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 1200px) {
    min-width: 450px;
    max-width: 100%;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-indent: 50px;
  line-height: 30px;
`;

export const List = styled.ul`
  text-align: justify;
  text-justify: inter-word;

  > li {
    text-indent: 50px;
    line-height: 30px;
    list-style-type: circle;
    list-style-position: inside;
  }
`;

