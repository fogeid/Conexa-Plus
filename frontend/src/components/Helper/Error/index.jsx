import { Err } from './style';

function Error({ error }) {
    if (!error) return null;
    return (
        <Err>{error}</Err>
    );
};

export default Error;