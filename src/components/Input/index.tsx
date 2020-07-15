import React, {
  InputHTMLAttributes,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import Tooltip from '../Tooltip';

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
  const [isErrored, setIsErrored] = useState('');

  const handleInputFocus = useCallback(() => {
    setIsFocused('focused');
    setIsErrored('');
    setIsFilled('#333');
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused('');
    setIsErrored(error ? 'error' : '');
    setIsFilled(inputRef.current?.value ? '#333' : '#999');
  }, [error]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    setIsErrored(error ? 'error' : '');
  }, [error]);

  return (
    <div className={`container ${isFocused} ${isErrored}`}>
      <Icon size={20} color={isFilled} />
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      {error && <Tooltip alert={error} className={isErrored} />}
    </div>
  );
};

export default Input;
