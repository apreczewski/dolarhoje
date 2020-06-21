import React from 'react';
import { toast } from 'react-toastify';
import Toast from './Toast';

interface Message {
  title: string;
  message: string;
}

const defaultConfig = {
  closeButton: false,
  hideProgressBar: true,
};

export const dhcToast = {
  success: ({ title, message }: Message) => {
    toast(
      <Toast title={title} message={message} type="success" />,
      defaultConfig,
    );
  },

  warn: ({ title, message }: Message) => {
    toast(<Toast title={title} message={message} type="warning" />);
  },

  error: ({ title, message }: Message) => {
    toast(<Toast title={title} message={message} type="error" />);
  },

  info: ({ title, message }: Message) => {
    toast(<Toast title={title} message={message} type="info" />);
  },
};
