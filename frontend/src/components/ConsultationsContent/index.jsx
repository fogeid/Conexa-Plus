import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

import Button from '../Button';

import { Section } from './style';

function ConsultationsContent() {
    const { login, getConsultations, consultations } = useContext(UserContext);    

    useEffect(() => {
        getConsultations();
    }, []);

    function formatDate(item) {
        let date = new Date(item);
        let dateTemplate = date.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute:'2-digit',
        }).replace(' ', ' às ');

        return dateTemplate;
    };

    function handleClick() {
        alert(`Vamos atender!`);
    };

    return (
        <Section>
            {!login ? (
                <Section.Div1 />                    
            ) : (
                <Section.Div2>
                    <Section.Div2.H2>{consultations.length} consultas agendadas</Section.Div2.H2>
                    <Section.Div2.Div>
                        {consultations.map(patient => (
                            <Section.Div2.Div.PatientContent key={patient.id}>
                                <Section.Div2.Div.PatientContent.Div>
                                    <Section.Div2.Div.PatientContent.H3>
                                        {patient.patient.first_name} {patient.patient.last_name}
                                    </Section.Div2.Div.PatientContent.H3>
                                    <Section.Div2.Div.PatientContent.H4>
                                        {`${formatDate(patient.date)}`}
                                    </Section.Div2.Div.PatientContent.H4>
                                </Section.Div2.Div.PatientContent.Div> 

                                <Button onClick={handleClick}>Atender</Button>
                            </Section.Div2.Div.PatientContent>
                        ))}
                    </Section.Div2.Div>
                </Section.Div2>
            )}
        </Section>
    );
};

export default ConsultationsContent;