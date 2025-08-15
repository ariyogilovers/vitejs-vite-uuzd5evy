import type { ReactNode } from "react";

interface PropTypes {

    children : ReactNode;

}

const Button = (props:PropTypes) =>{

   const {children} = props; 

    return <button>{children}</button>
}

export default Button;