import {classes, classNameFactory} from "../helpers/classes";
import React, {FC} from "react";
interface HeaderProps extends React.HTMLAttributes<HTMLElement>{
}
const cm=classNameFactory('layout')

const Aside:FC<HeaderProps> = (props) => {
    const {className,...rest}=props
    return (
        <div className={classes(cm('aside'),className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Aside;