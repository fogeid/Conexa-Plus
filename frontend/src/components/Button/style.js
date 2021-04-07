import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    width: 100%;
    font-family: var(--font-primary);
    font-size: 1rem;
    border: 2px solid var(--color-blue);
    border-radius: .4rem;
    background-color: var(--color-blue);
    color: var(--color-light);
    padding: .8rem 1.2rem;
    cursor: pointer;
    outline: none;
    box-sizing: border-box;
    transition: all ease-in .3s;

    &:hover, &:focus {
        background-color: var(--color-light);
        color: var(--color-blue);
        border: 2px solid var(--color-blue);
    }

    &:disabled {
        opacity: .5;
        cursor: wait;
    }

    &:disabled {
        opacity: .5;
        cursor: wait;
    }

    a {
        text-decoration: none;
        color: var(--color-light);

        &:hover, &:focus {
            color: var(--color-blue);
        }
    }
`;