import Bg from '../../assets/bg-login.png';

import { Section } from './style';

function LoginBg() {
    return (
        <Section>
            <Section.H1>Faça Login</Section.H1>
            <img src={Bg} alt="Faça Login"/>
        </Section>
    );
};

export default LoginBg;