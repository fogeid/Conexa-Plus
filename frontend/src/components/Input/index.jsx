import { Input as Ipt, Label, Error, Div } from './style';

function Input({ label, type, name, value, placeholder, error, onChange, onBlur }) {
    return (
        <Div>
            <Label htmlFor={name}>{label}</Label>
            <Ipt
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
            {error && <Error>{error}</Error>}
        </Div>
    );
};

export default Input;