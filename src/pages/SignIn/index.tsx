import React from 'react';

import './styles.css';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

const SignIn: React.FC = () => {
  return (
    <div className="sign-container">
      <section className="sign-form">
        <form>
          <h1>Faça seu logon</h1>
          <div className="form-input">
            <FiMail size={20} color="#333" />
            <input placeholder="Email" />
          </div>
          <div className="form-input">
            <FiLock size={20} color="#333" />
            <input type="password" placeholder="Senha" />
          </div>
          <button type="submit">Acessar</button>

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
