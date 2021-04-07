import { useContext, useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';

import Button from '../Button';
import Error from '../Helper/Error';
import { Modal as ModalContainer } from './style';

function Modal() {
    const [patient, setPatient] = useState(0);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [error, setError] = useState(null);
    const { patients, getPatients, setModal, postConsultation } = useContext(UserContext);

    useEffect(() => {
        getPatients();
    }, []);

    function closeModal(e) {
        if (e.target.id === "close") {
            setModal(false);
        };
    };

    function handleSchedule() {
        if (patient && date && time) {
            postConsultation(patient, date, time);
            setModal(false);
            alert('Consulta agendada com sucesso!');
            window.location.reload();
        } else {
            setError('Formulário preenchido incorretamente!');
        };     
    };

    return (
        <ModalContainer id="close" onClick={closeModal}>
            <ModalContainer.Form onSubmit={(e) => e.preventDefault()}>
                <ModalContainer.Form.Select
                    required
                    name="patients"
                    id="patients"
                    onChange={({ target }) => setPatient(target.value) }
                >
                    <option value="selected" disabled selected>
                        Selecione paciente
                    </option>
                    {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                            {patient.first_name} {patient.last_name}
                        </option>
                    ))}
                </ModalContainer.Form.Select>
                <ModalContainer.Form.Date>
                    <label htmlFor="date">Data:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        required
                        onChange={({ target }) => setDate(target.value)}
                    />
                </ModalContainer.Form.Date>
                <ModalContainer.Form.Time>
                    <label htmlFor="hour">Hora:</label>
                    <input
                        type="time"
                        id="hour"
                        value={time}
                        required
                        onChange={({ target }) => setTime(target.value)}
                    />
                </ModalContainer.Form.Time>
                <Button onClick={handleSchedule}>Agendar</Button>
                <button id="close" onClick={closeModal}>X</button>
                <Error error={error} />
            </ModalContainer.Form>
        </ModalContainer>
    );
};

export default Modal;