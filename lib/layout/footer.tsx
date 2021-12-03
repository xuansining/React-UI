import {classes, classNameFactory} from "../helpers/classes";
import React, {FC} from "react";
import './layout.scss'
interface HeaderProps extends React.HTMLAttributes<HTMLElement>{
}
const cm=classNameFactory('layout')

const Footer:FC<HeaderProps> = (props) => {
    const {className,...rest}=props
    return (
        <div className={classes(cm('footer'),className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Footer;