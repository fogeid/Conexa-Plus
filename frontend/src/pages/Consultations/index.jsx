import Header from "../../components/Header";
import ConsultationsContent from "../../components/ConsultationsContent";
import Footer from "../../components/Footer";

import { Section } from './style';

function Consultations() {

    return (
        <>
            <Header />
            <Section>
                <Section.H1>Consultas</Section.H1>
                <ConsultationsContent />
            </Section>
            <Footer />
        </>
    );
};

export default Consultations;