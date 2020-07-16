import React from 'react';

import { FiXCircle, FiAlertCircle } from 'react-icons/fi';
import './styles.css';

import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <div className="toast-container">
      {messages.map(message => (
        <div key={message.id} className={`toast-content ${message.type}`}>
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            <span>{message.description}</span>
          </div>

          <button type="button" className="button-toast-container">
            <FiXCircle size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
