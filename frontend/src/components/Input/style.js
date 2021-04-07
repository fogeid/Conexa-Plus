import styled from 'styled-components';

export const Div = styled.div`
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    display: block;
    font-family: var(--font-primary);
    font-size: .90rem;
    padding: .5rem 0;
    color: var(--color-dark);
    background-color: var(--color-light);
    border: none;
    border-bottom: 2px solid var(--color-border);
    transition: all ease-in .3s;
    width: 100%;

    &:hover, &:focus {
        outline: none;
        border-bottom-color: var(--color-blue-dark);
    }

    &::placeholder {
        font-style: italic;
    }
`;

export const Label = styled.label`
    display: block;
    font-family: var(--font-primary);
    font-size: .90rem;
    line-height: 1;
    padding-bottom: .25rem;
`;

export const Error = styled.p`
    font-family: var(--font-primary);
    font-size: .75rem;
    margin-top: .25rem;
    color: var(--color-error);
`;