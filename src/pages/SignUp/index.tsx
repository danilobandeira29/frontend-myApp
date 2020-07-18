import React, { useCallback, useRef } from 'react';

import './styles.css';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import signUpBackgroundImg from '../../assets/sign-up-background.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        history.push('/');
        return addToast({
          type: 'sucess',
          title: 'Cadastro realizado!',
          description: 'Você já pode realizar logon na aplicação',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          return formRef.current?.setErrors(errors);
        }

        return addToast({
          type: 'error',
          title: 'Erro ao cadastrar',
          description: 'Ocorreu um erro ao cadastrar, tente novamente',
        });
      }
    },
    [history, addToast],
  );

  return (
    <div className="signup-container">
      <section className="sign-form">
        <Form ref={formRef} onSubmit={handleSubmit}>
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

        <Link to="/">
          <FiArrowLeft size={20} color="#E02041" />
          Voltar para Página Inicial
        </Link>
      </section>
      <img src={signUpBackgroundImg} alt="SignIn Background" />
    </div>
  );
};

export default SignUp;
