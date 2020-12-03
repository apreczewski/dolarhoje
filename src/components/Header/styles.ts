import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  > a {
    text-decoration: none;
    padding: 5px 10px;
    width: 100px;
    height: 40px;
    background: ${colors.easternBlue};
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 10px;
    border: 1px solid ${colors.tea};
    border-radius: 50px;
    color: ${colors.white};

  }
`;
