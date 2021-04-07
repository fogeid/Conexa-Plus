import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    width: 100%;
    font-family: var(--font-primary);
    font-size: 1rem;
    border: 2px solid var(--color-blue);
    border-radius: .4rem;
    background-color: var(--color-light);
    color: var(--color-blue);
    padding: .8rem 1.2rem;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    transition: all ease-in .3s;

    &:hover, &:focus {
        background-color: var(--color-blue);
        color: var(--color-light);
        border: 2px solid var(--color-blue);
    }

    &:disabled {
        opacity: .5;
        cursor: wait;
    }

    a {
        text-decoration: none;
        color: var(--color-blue);

        &:hover, &:focus {
            color: var(--color-light);
        }
    }
`;