import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 72px;
    border-top: 2px solid var(--color-dark);
    background-color: var(--color-light);

    button {
        width: 80px;
        height: 40px;
        font-size: .75rem;
        font-weight: 600;
        padding: .4rem .2rem;
    }

    button + button {
        width: 120px;
        height: 40px;
        font-weight: 600;
        font-size: .75rem;
        padding: .4rem .2rem;
    }

    /* Desktop */
    @media (min-width: 1024px) and (max-width: 1440px) {
        border-top: none;
        justify-content: space-between;
        padding: 0px 30px;
        box-sizing: border-box;
    }
`;
