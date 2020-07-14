import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null);
  const { registerField, fieldName, error, defaultValue } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className="container">
      <Icon size={20} color="#333" />
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </div>
  );
};

export default Input;