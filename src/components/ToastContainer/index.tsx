import React from 'react';

import { FiXCircle, FiAlertCircle } from 'react-icons/fi';
import './styles.css';

interface ToastProps {
  className?: string;
}

const Toast: React.FC<ToastProps> = ({ className }) => {
  return (
    <div className={`toast-container ${className}`}>
      <div className="toast-content">
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um Erro</strong>
          <span>Não foi possível fazer login na aplicação.</span>
        </div>

        <button type="button" className="button-toast-container">
          <FiXCircle size={18} />
        </button>
      </div>

      <div className="toast-content sucess">
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um Erro</strong>
          <span>Não foi possível fazer login na aplicação.</span>
        </div>

        <button type="button" className="button-toast-container">
          <FiXCircle size={18} />
        </button>
      </div>
      <div className="toast-content error">
        <FiAlertCircle size={20} />
        <div>
          <strong>Aconteceu um Erro</strong>
          <span>Não foi possível fazer login na aplicação.</span>
        </div>

        <button type="button" className="button-toast-container">
          <FiXCircle size={18} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
