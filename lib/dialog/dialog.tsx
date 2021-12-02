import React, {cloneElement, Fragment} from 'react';
import './dialog.scss'
import {Icon} from "../index";
import {classNameFactory} from "../helpers/classes";
import ReactDOM from "react-dom";

interface DialogProps {
    visible: boolean;
    button: React.ReactElement[],
    onClose: React.MouseEventHandler,
    isCloseModelClose?: boolean
}

const classMaker = classNameFactory('dialog')
const cm = classMaker;
console.log(cm('mask'))
const Dialog: React.FC<DialogProps> = (props) => {
    const {visible, children, button, onClose, isCloseModelClose} = props
    const onClickClose: React.MouseEventHandler = (e) => {
        onClose(e)
    }
    const onClickModelClose: React.MouseEventHandler = (e) => {
        if (isCloseModelClose) {
            onClickClose(e)
        }
    }
    const result= visible ? <Fragment>
        <div className={cm('mask')} onClick={onClickModelClose}/>
        <div className={cm()}>
            <div className={cm('close')} onClick={onClickClose}>
                <Icon name={'close'}/>
            </div>
            <div className={cm('header')}>
                title
            </div>
            <div className={cm('main')}>
                {children && children}
            </div>
            <div className={cm('footer')}>
                {button.map((child, index) => {
                    return cloneElement(child,{key: `${index}-dialog-footer`})
                })}
            </div>
        </div>
    </Fragment> : null;

    return ReactDOM.createPortal(result,document.body)
};
Dialog.defaultProps = {
    isCloseModelClose: false
}
export default Dialog;