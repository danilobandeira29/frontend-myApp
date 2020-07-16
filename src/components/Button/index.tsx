import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest} className="bottom-component">
      {children}
    </button>
  );
};

export default Button;
