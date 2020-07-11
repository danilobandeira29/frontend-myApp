import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ icon: Icon, placeholder, type }) => {
  return (
    <div className="container">
      <Icon size={20} color="#333" />
      <input placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
