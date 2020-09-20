import styled from 'styled-components';
import colors from '../../../styles/colors';
import { device } from '../../../styles/device';

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
    background-color: ${colors.white};
    opacity: 0.8;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0 10px;

    &__inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;

      @media ${device.maxMD} {
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
      }
    }

    button {
      background: transparent;
      font-size: 22px;
      padding: 5px;
      color: inherit;
      font-weight: bold;
    }

    & .title {
      font-weight: bold;
    }

    & .message {
      font-weight: 100;
      margin-right: 15px;
    }
  }

  &.success {
    background-color: ${colors.shamrock};
    color: ${colors.white};
  }

  &.info {
    background-color: ${colors.tea};
    color: ${colors.white};
  }

  &.warning {
    background-color: ${colors.supernova};
    color: ${colors.white};
  }

  &.error {
    background-color: ${colors.monza};
    color: ${colors.white};
  }
`;
