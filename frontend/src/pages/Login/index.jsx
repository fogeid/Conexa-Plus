import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";

import Header from "../../components/Header";
import LoginBg from "../../components/LoginBg";
import LoginForm from "../../components/LoginForm";

import { Section } from './style';

function Login() {
    const { login } = useContext(UserContext);
    let navigate = useHistory();

    if (login === true) navigate.push('/consultas');
    return (
        <>
            <Header />
            <Section>
                <Section.Div1>
                    <LoginBg className="login__bg" />
                </Section.Div1>
                <Section.Div2>
                    <LoginForm />
                </Section.Div2>
            </Section>
        </>
    );
};

export default Login;