import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import ButtonOutline from '../ButtonOutline';
import Logo from '../../assets/logo-conexa.png';

import { Header as HeaderContent } from './style';

function Header() {
    const { data, userLogout } = useContext(UserContext);
    let navigate = useHistory();

    function logout() {
        userLogout();
        navigate.push('/');
    };

    return (
        <HeaderContent>
            <img src={Logo} alt="Logo Conexa Plus" />
            { data ? 
            (<HeaderContent.Div>
                <HeaderContent.P>Olá, Dr. {data.name}</HeaderContent.P>
                <ButtonOutline onClick={logout}>Sair</ButtonOutline>
            </HeaderContent.Div>)
            :
            (null) }

        </HeaderContent>
    );
};

export default Header;