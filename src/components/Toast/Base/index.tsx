import React, {SyntheticEvent} from 'react';
import {
  faSmileWink,
  faInfoCircle,
  faExclamationCircle,
  faFrown,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastWrapper } from './styles';

interface Base {
  type: string;
  title: string;
  message: string;

}


interface Option {
  [key: string]: IconDefinition
}

const icons: Option = {
  success: faSmileWink,
  error: faFrown,
  info: faInfoCircle,
  warning: faExclamationCircle,
};

export default function Toast({ type, title, message }: Base) {


  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <ToastWrapper className={type}>
      <FontAwesomeIcon icon={icons[type]} size="2x" />
      <div className="toast-content">
        <div className="toast-content__inner">
          <span className="title">{title}</span>
          <span className="message">&nbsp;{message}</span>
        </div>
        <button type="button" onClick={handleClick}>
          &times;
        </button>
      </div>
    </ToastWrapper>
  );
}
