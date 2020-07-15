import React, { useCallback, useRef, useContext } from 'react';

import './styles.css';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { AuthContext } from '../../context/AuthContext';

import getValidationsErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import signInBackgroundImg from '../../assets/sign-in-background.svg';

interface SignInData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: SignInData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { email, password } = data;

        signIn({ email, password });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );
  return (
    <div className="sign-container">
      <section className="sign-form">
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button type="submit">Acessar</Button>

          <a href="/forgot">Esqueci minha senha</a>
        </Form>

        <a href="/signup">
          <FiLogIn size={20} color="#E02041" />
          Crie sua Conta
        </a>
      </section>
      <img src={signInBackgroundImg} alt="SignIn Background" />
    </div>
  );
};

export default SignIn;
