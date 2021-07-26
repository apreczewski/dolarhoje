import React from 'react';
import { FaSmileWink, FaInfoCircle, FaExclamationCircle, FaFrown } from 'react-icons/fa'

import { Wrapper, Content } from './styles';

interface IToast {
  type: string;
  title: string;
  message: string;
}

interface IIcon {
  [key: string]: any;
}

export const Toast = ({ type = 'success', title, message }: IToast) => {
  const icons: IIcon = {
    success: <FaSmileWink size={20} />,
    error: <FaFrown size={20} />,
    info: <FaInfoCircle size={20} />,
    warning: <FaExclamationCircle size={20} />,
  };

  return (
    <Wrapper className={type}>
      {icons[type]}
      <Content>
        <div>
          <span className="title">{title}</span>
          <span className="message">{message}</span>
        </div>
      </Content>
    </Wrapper>
  );
}
