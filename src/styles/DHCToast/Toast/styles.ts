import styled from 'styled-components';
import colors from '../../colors';
import { device } from '../../device';

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2px 8px;

  svg {
    color: ${colors.white};
    margin: 0 15px 0 6px;
  }

  & .toast-content {
    /* background-color: ${colors.monza}; */
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0 10px;

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;

      @media ${device.minMD} {
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
      }
    }

    button {
      text-decoration: none;
      border: none;
      background: transparent;
      font-size: 22px;
      padding: 5px;
      color: inherit;
      font-weight: bold;
    }

    & .title {
      font-weight: bold;
      text-align: center;
    }

    & .message {
      width: 100%;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      font-weight: 100;
      margin-right: 15px;
    }
  }

  &.success {
    background-color: ${colors.easternBlue};
    color: ${colors.white};
  }

  &.info {
    background-color: ${colors.easternBlue};
    color: ${colors.white};
  }

  &.warning {
    background-color: ${colors.tea};
    color: ${colors.white};
  }

  &.error {
    background-color: ${colors.monza};
    color: ${colors.white};
  }
`;
