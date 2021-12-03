import React, {FC} from 'react';
import {classes, classNameFactory} from "../helpers/classes";
interface HeaderProps extends React.HTMLAttributes<HTMLElement>{
}
import './layout.scss'
const cm=classNameFactory('layout')

const Header:FC<HeaderProps> = (props) => {
    const {className,...rest}=props
    return (
        <div className={classes(cm('header'),className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Header;