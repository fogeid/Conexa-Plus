import styled from 'styled-components';

export const Header = styled.header`
    max-width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);

    @media (min-width: 1024px) and (max-width: 1440px) {
        justify-content: flex-start;
        justify-content: space-between;
        margin-left: 30px;
    }
`;

Header.Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
        width: 50px;
        padding: .2rem .3rem;
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        justify-content: space-between;
        width: 210px;
        margin-right: 30px;

        button {
            width: 80px;
            padding: .4rem .6rem;
        }
    }
`;

Header.P = styled.p`
    display: none;
    
    @media (min-width: 1024px) and (max-width: 1440px) {
        width: 130px;
        display: block;
        font-family: var(--font-primary);
        color: var(--color-dark);
    }
`;