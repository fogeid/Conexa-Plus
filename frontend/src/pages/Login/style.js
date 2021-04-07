import styled from 'styled-components';

export const Section = styled.section`
    padding-top: 50px;

    form {
        max-width: 80%;
        margin: 35px auto;

        button {
            margin-top: 30px;
        }
    }

    /* Desktop */
    @media (min-width: 1024px) and (max-width: 1440px) {
        padding-top: 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
`;

Section.Div1 = styled.div`
    display: none;

    /* Desktop */
    @media (min-width: 1024px) and (max-width: 1440px) {
        max-width: 700px;
        display: block;
    }
`;

Section.Div2 = styled.div`

    /* Desktop */
    @media (min-width: 1024px) and (max-width: 1440px) {
        form {
            max-width: 350px !important;
        }

        h1 {
            display: none;
        }
    }
`;