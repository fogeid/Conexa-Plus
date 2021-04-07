import { useContext } from 'react';
import { UserContext } from '../../UserContext';

import Button from '../Button';
import ButtonOutline from '../ButtonOutline';
import Modal from '../Modal';

import { Footer as FooterContent } from './style';

function Footer() {
    const { modal, setModal, login } = useContext(UserContext);

    function openModal() {
        setModal(true);
    };

    return (
        <>
            <FooterContent>
                <ButtonOutline>Ajuda</ButtonOutline>
                {login ?
                    <Button onClick={openModal}>Agendar consulta</Button>
                    :
                    <Button disabled>Agendar consulta</Button>
                }

            </FooterContent>
            {modal && <Modal />}            
        </>
    );
};

export default Footer;