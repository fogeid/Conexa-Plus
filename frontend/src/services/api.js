export const API_URL = 'http://localhost:3333';

export function USER_POST(body) {
    return {
        url: API_URL + '/login',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    };
};

export function CONSULTATIONS_POST(body) {
    const token = window.localStorage.getItem('token');

    return {
        url: API_URL + '/consultations',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify(body)
        }
    };
};

export function CONSULTATIONS_GET(token) {
    return {
        url: API_URL + '/consultations?_expand=patient',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    };
};

export function PATIENTS_GET(token) {
    return {
        url: API_URL + '/patients',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    };
};
