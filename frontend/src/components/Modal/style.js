import styled from 'styled-components';

export const Modal = styled.div`
    width: 100vw;
    height: 87vh;
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .5);
    z-index: 1000;

    
`;

Modal.Form = styled.form`
    width: 80%;
    min-width: 250px;
    padding: 20px;
    box-sizing: border-box;
    background-color: var(--color-light);
    position: relative;
    z-index: 10000;

    button {
        width: 100px;
        margin: 0 auto;
    }
    
    button + button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: var(--color-blue);
        color: var(--color-light);
        border: 2px solid var(--color-blue);
        outline: none;
        font-weight: bold;
        transition: all ease-in .3s;
        cursor: pointer;

        &:hover {
            background-color: var(--color-light);
            color: var(--color-blue);
        }
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }
`;

Modal.Form.Select = styled.select`
    padding: 10px;
    outline: none;

    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 80%;
        padding: 10px 0;
    }
`;

Modal.Form.Date = styled.div`
    margin: 15px 0;

    label {
        display: block;
        margin-bottom: 5px;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        input {
            width: 80%;
            padding: 10px 0;
        }
    }
`;

Modal.Form.Time = styled.div`
    margin: 15px 0;

    label {
        display: block;
        margin-bottom: 5px;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        input {
            width: 80%;
            padding: 10px 0;
        }
    }
`;
