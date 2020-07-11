import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ icon: Icon, placeholder, ...rest }) => {
  return (
    <div className="container">
      <Icon size={20} color="#333" />
      <input placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
