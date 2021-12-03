import React, {FC, ReactElement, ReactNode} from 'react';
import {classes, classNameFactory} from "../helpers/classes";

import './layout.scss'
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode | Array<ReactElement>
}

const cm = classNameFactory('layout')

const Layout: FC<LayoutProps> = (props) => {

    const {className, ...rest} = props;
    const children = props.children;
    const eArr = (children as Array<ReactElement>)
    //判断Layout children第一个元素是不是aside,只要有一个是就返回true
    const hashAside = eArr.length && eArr.reduce((result, node) => node.type === Aside || result, false) ||undefined;
    return (
        <div className={classes(cm(), className, hashAside && cm('hashAside'))} {...rest}>
            {props.children}
        </div>
    );
};
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Aside from './aside'
export {Header,Main,Footer,Aside}
export default Layout;