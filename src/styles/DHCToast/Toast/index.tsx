import React from 'react';
import PropTypes from 'prop-types';
import {
  faSmileWink,
  faInfoCircle,
  faExclamationCircle,
  faFrown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastWrapper } from './styles';

interface ToastData {
  type: string;
  title: string;
  message: string;
}

interface ObjectIcon {
  [key: string]: any;
}

export default function Toast({ type, title, message }: ToastData) {
  const icons: ObjectIcon = {
    success: faSmileWink,
    error: faFrown,
    info: faInfoCircle,
    warning: faExclamationCircle,
  };

  return (
    <ToastWrapper className={type}>
      <FontAwesomeIcon icon={icons[type]} size="2x" />
      <div className="toast-content">
        <div className="toast-content__inner">
          <span className="title">{title}</span>
          <span className="message">{message}</span>
        </div>
      </div>
    </ToastWrapper>
  );
}

export const toastTypes = PropTypes.oneOf([
  'success',
  'error',
  'info',
  'warning',
]);

Toast.propTypes = {
  type: toastTypes,
  title: PropTypes.string,
  message: PropTypes.string,
};

Toast.defaultProps = {
  type: 'success',
  message: '',
  title: '',
};
