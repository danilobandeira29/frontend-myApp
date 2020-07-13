import React from 'react';

import './styles.css';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import signUpBackgroundImg from '../../assets/sign-up-background.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <div className="sign-container">
      <section className="sign-form">
        <form>
          <h1>Faça seu Cadastro</h1>

          <Input icon={FiUser} placeholder="Nome" />
          <Input icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </form>

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
