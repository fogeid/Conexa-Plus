import styled from 'styled-components';
import bgConsultaMobile from '../../assets/bg-consulta-mobile.png';

export const Section = styled.section`
`;

Section.Div1 = styled.div`
    background: url(${bgConsultaMobile}) no-repeat center center;
    height: 221px;
    padding-top: 100px;
`;

Section.Div2 = styled.div`
    max-width: 80%;
    margin: 0 auto;
    padding-top: 30px;

    @media (min-width: 1024px) and (max-width: 1440px) {
        max-width: 500px;
        margin: 0 auto;
    }
`;

Section.Div2.H2 = styled.h2`
    font-family: var(--font-primary);
    font-weight: bold;
    color: var(--color-dark);
    margin-bottom: 20px;
`;

Section.Div2.Div = styled.div`
`;

Section.Div2.Div.PatientContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font-primary);
    color: var(--color-dark);
    margin-bottom: 20px;

    button {
        width: 90px;
        padding: .4rem .2rem;
    }
`;

Section.Div2.Div.PatientContent.Div = styled.div`
`;

Section.Div2.Div.PatientContent.H3 = styled.h3`
    margin-bottom: 5px;
`;

Section.Div2.Div.PatientContent.H4 = styled.h4`
    font-size: .75rem;
`;
