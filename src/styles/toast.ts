import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import colors from './colors';
import { device } from './device';

export const Toast = styled(ToastContainer)`
  .Toastify__toast {
    @media ${device.minXS} {
      border-radius: 6px;
    }
  }

  &.Toastify__toast-container {
    @media ${device.minXS} {
      min-width: 320px;
      width: unset;
    }
  }

  .Toastify__toast-body {
    margin: 0;
    display: flex;
    align-items: center;
  }

  .Toastify__toast--default {
    padding: 0;
  }

  .Toastify__toast--info {
    background: ${colors.blueDianne};
  }

  .Toastify__toast--success {
    background: ${colors.blueDianne};
  }

  .Toastify__toast--warning {
    background: ${colors.blueDianne};
  }

  .Toastify__toast--error {
    background: ${colors.blueDianne};
  }
`;
