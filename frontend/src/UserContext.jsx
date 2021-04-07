import { createContext, useState, useCallback, useEffect } from "react";

import { USER_POST, CONSULTATIONS_GET, PATIENTS_GET, CONSULTATIONS_POST } from './services/api';

export const UserContext = createContext();

export function UserStorage({ children }) {
    const [data, setData] = useState(null);
    const [login, setLogin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [consultations, setConsultations] = useState([]);
    const [patients, setPatients] = useState([]);
    const [modal, setModal] = useState(false);

    function getUser(name, token) {
        setData({name, token});
        setLogin(true);
    };

    // Login the user
    async function userLogin(email, password) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = USER_POST({ email, password });
            const response = await fetch(url, options);

            if (!response.ok) throw new Error('E-mail ou senha inválidos.');
            const { name, token } = await response.json();
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('token', token);
            getUser(name, token);
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        };
    };

    // Schedule Appointment
    async function postConsultation(patient, dt, time) {
        const patientId = parseInt(patient);
        const date = dt + " " + time;
        try {
            setError(null);
            setLoading(true);
            const { url, options } = CONSULTATIONS_POST({ patientId, date });
            console.log(options);
            const response = await fetch(url, options);

            if (!response.ok) throw new Error('Formulário preenchido incorretamente!');
        } catch (err) {
            setError(err.message);
            setLogin(false);
        };
    };


    // Get data consultations
    async function getConsultations() {
        const token = window.localStorage.getItem('token');

        try {
            setError(null);
            const { url, options } = CONSULTATIONS_GET(token);
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();
            setConsultations(data);
        } catch (err) {
            setError(err.message);
        };
    };

    // Get data patients
    async function getPatients() {
        const token = window.localStorage.getItem('token');

        try {
            setError(null);
            const { url, options } = PATIENTS_GET(token);
            const response = await fetch(url, options);
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();
            setPatients(data);
        } catch (err) {
            setError(err.message);
        };
    };

    // Logs the user out of the account
    const userLogout = useCallback(async function () {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('name');
        window.localStorage.removeItem('token');
    }, []);

    useEffect(() => {
        function autoLogin() {
            const name = window.localStorage.getItem('name');
            const token = window.localStorage.getItem('token');

            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    getUser(name, token);
                } catch (err) {
                    userLogout();
                } finally {
                    setLoading(false);
                };
            } else {
                setLogin(false);
            };
        };        

        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ userLogin, userLogout, getConsultations, getPatients, postConsultation, consultations, patients, data, error, loading, login, modal, setModal }}>
            {children}
        </UserContext.Provider>
    );
};