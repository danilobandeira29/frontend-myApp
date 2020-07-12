import React from 'react';

import './styles.css';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <div className="sign-container">
      <section className="sign-form">
        <form>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} placeholder="E-mail" />
          <Input type="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Acessar</Button>

          <a href="/forgot">Esqueci minha senha</a>
        </form>

        <a href="/signup">
          <FiLogIn size={20} color="#E02041" />
          Crie sua Conta
        </a>
      </section>
      <div className="background-img" />
    </div>
  );
};

export default SignIn;
