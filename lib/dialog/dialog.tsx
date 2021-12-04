import React, {cloneElement, Fragment, ReactElement, ReactNode} from 'react';
import './dialog.scss'
import {Button, Icon} from "../index";
import {classNameFactory} from "../helpers/classes";
import ReactDOM from "react-dom";


interface DialogProps {
    visible: boolean;
    button?: React.ReactElement[],
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
                {button &&button.map((child, index) => {
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


const modal=(content:ReactNode,buttons?: Array<ReactElement>,afterClose?:()=>void)=>{
    const close=()=>{
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }
    const component =
        <Dialog
            visible={true}
            button={buttons}
            onClose={() => {
                close();
                afterClose && afterClose();
            }}>
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.append(div);
    ReactDOM.render(component, div);
    return close;

}
const alert = (content: string) => {
    const button = <Button onClick={() => close()}>OK</Button>;
    const close = modal(content, [button]);
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [
        <Button onClick={onYes}>yes</Button>,
        <Button onClick={onNo}>no</Button>
    ];
    const close = modal(content, buttons, no);
};

export {alert,confirm,modal}
export default Dialog;