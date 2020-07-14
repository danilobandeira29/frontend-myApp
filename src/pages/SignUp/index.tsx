import React, { useCallback } from 'react';

import './styles.css';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import signUpBackgroundImg from '../../assets/sign-up-background.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback((data: object): void => {
    console.log(data);
  }, []);

  return (
    <div className="sign-container">
      <section className="sign-form">
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft size={20} color="#E02041" />
          Voltar para Página Inicial
        </a>
      </section>
      <img src={signUpBackgroundImg} alt="SignIn Background" />
    </div>
  );
};

export default SignUp;
