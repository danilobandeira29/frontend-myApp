import React, { useEffect } from 'react';

import {
  FiXCircle,
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/toast';

import './styles.css';

interface MessageProps {
  message: ToastMessage;
}

const toastType = {
  info: <FiInfo size={24} />,
  sucess: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};

const Toast: React.FC<MessageProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => removeToast(message.id), 3000);

    return () => clearTimeout(timer);
  }, [message.id, removeToast]);

  return (
    <div className={`toast-content ${message.type}`}>
      {toastType[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        <span>{message.description}</span>
      </div>

      <button
        type="button"
        className="button-toast-container"
        onClick={() => removeToast(message.id)}
      >
        <FiXCircle size={18} />
      </button>
    </div>
  );
};

export default Toast;
