import React from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import './styles.css';

interface ErrorProps {
  alert: string;
  className?: string;
}

const Tooltip: React.FC<ErrorProps> = ({ alert, className }) => {
  return (
    <div className="tooltip-container">
      <FiAlertCircle size={20} color="#c53030" className="icon-alert" />
      <span className={`span-alert ${className}`}>{alert}</span>
    </div>
  );
};

export default Tooltip;
