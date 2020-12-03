import React from 'react';
import { toast } from 'react-toastify';
import Toast from './Base';

const defaultConfig = {
  closeButton: false,
  hideProgressBar: true,
};

interface Base {
  title?: string;
  message?: string;
  config?: object;
}

export const toastDH = {
  success: ({ title, message, config }: Base) => {
    return toast(
      <Toast title={title || ''} message={message || ''} type="success"  />,
      config ? { ...defaultConfig, ...config } : defaultConfig
    );
  },

  warn: ({ title, message, config }: Base) => {
    return toast(
      <Toast title={title || ''} message={message ||''} type="warning" />,
      config ? { ...defaultConfig, ...config } : defaultConfig
    );
  },

  error: ({ title, message, config }: Base) => {
    return toast(
      <Toast title={title || ''} message={message ||''} type="error" />,
      config ? { ...defaultConfig, ...config } : defaultConfig
    );
  },

  info: ({ title, message, config }: Base) => {
    return toast(
      <Toast title={title || ''} message={message ||''} type="info" />,
      config ? { ...defaultConfig, ...config } : defaultConfig
    );
  },
};
