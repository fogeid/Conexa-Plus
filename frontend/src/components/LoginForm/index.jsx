import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';

import Input from '../Input';
import Button from '../Button';
import Error from '../Helper/Error';

import { Form } from './style';

function LoginForm() {
    const email = useForm('email');
    const password = useForm();

    const { userLogin, error, loading } = useContext(UserContext);
    
    async function handleSubmit(e) {
        e.preventDefault();

        if (email.validation() && password.validation()) {
            userLogin(email.value, password.value);
        };
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.H1>Faça Login</Form.H1>
            <Input
                type="email"
                id="email"
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                {...email}
            />
            <Input
                type="password"
                id="password"
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                {...password}
            />
            {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
            <Error error={error} />
        </Form>
    );
};

export default LoginForm;