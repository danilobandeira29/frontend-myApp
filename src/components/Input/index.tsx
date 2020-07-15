import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { useField } from '@unform/core';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { registerField, fieldName, error, defaultValue } = useField(name);
  const [isFocused, setIsFocused] = useState('');
  const [isFilled, setIsFilled] = useState('#999');

  const handleInputFocus = useCallback(() => {
    setIsFocused('focused');
    setIsFilled('#333');
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused('');

    setIsFilled(inputRef.current?.value ? '#333' : '#999');
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className={`container ${isFocused}`}>
      <Icon size={20} color={isFilled} />
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default Input;
