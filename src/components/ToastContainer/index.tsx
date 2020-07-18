import React from 'react';

import Toast from './Toast';

import './styles.css';

import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <div className="toast-container">
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ToastContainer;
