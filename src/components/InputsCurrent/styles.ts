import styled from 'styled-components';
import colors from '../../styles/colors';



export const Wrapper = styled.div`
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

export const FieldValue = styled.div`

  --focus-color: #7a7a7a;

  height: 80px;
  width: 400px;
  border: none;
  background: #ececec;

  border: 8px solid #ececec;
  border-radius: 9px;
  box-sizing: border-box;

  padding: 15px 10px 15px 10px;
  margin: 0 30px 0 0;
  /* border: 1px solid ${colors.portGore}; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  -webkit-appearance: none;
  box-shadow:
    -10px -10px 15px rgba(70, 70, 70, 0.12),
    10px 10px 15px rgba(255, 255, 255, 0.5);
  transition: box-shadow 1s;
  outline: none;



  &:focus {
    box-shadow: 0px 0.5px 10px var(--focus-color);
  }

  &:hover {
    --focus-color: #15a38a;

    box-shadow:
    -10px -10px 15px rgba(70, 70, 70, 0.12),
    10px 10px 15px rgba(21,163,138, 0.12);
  }

  > span {
    align-self: flex-end;
    font-size: 1.5em;
    color: var(--focus-color);
    margin-right: 25px;
    transition: color 0.5s;
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
    /* color: ${colors.supernova}; */
    color: var(--focus-color);
    transition: color 0.5s;

    :focus {
      color: var(--focus-color);
    }
  }

  > svg {
    font-size: 25px;
    color: #7a7a7a;
    margin-left: 10px;
    transition: color 0.5s;

    &:hover {
      cursor: pointer;
      color: #15a38a;
    }
  }

  @media (max-width: 1200px) {
    margin: 0 0 15px 0;
  }
`;
