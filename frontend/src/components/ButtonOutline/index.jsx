import { Button as BtnOutline } from './style';

function ButtonOutline({ children, ...props }) {
    return <BtnOutline {...props}>{children}</BtnOutline>;
};

export default ButtonOutline;