import React, {FC, InputHTMLAttributes, ReactElement, ReactNode, useState} from 'react';
import {classes, classNameFactory} from '../helpers/classes'
import './input.scss'
import {Button, Icon} from "../index";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputPrefix?: ReactElement,
    inputSuffix?: ReactNode,
    bordered?:boolean,
}

const cm = classNameFactory('input')
const cm2 = classNameFactory('search')
const Input: FC<InputProps> = (props) => {
    const [focued, setFocued] = useState(false)
    const {className, inputPrefix,inputSuffix,bordered=true, ...rest} = props
    const prefix = inputPrefix && 'prefix' || undefined
    const focudeClass = focued && 'focued' || undefined
    const suffix=inputSuffix && 'suffix' || undefined
    const borderedClass=!bordered && 'bordered' || undefined;
    return (
        <div className={classes(prefix, focudeClass, cm('wrapper'),suffix)}>
            {inputPrefix}
            <input type='text' onFocus={() => {
                setFocued(true)
            }} onBlur={() => {
                setFocued(false)
            }} className={classes(className, cm(),borderedClass)} {...rest}/>
            {inputSuffix}
        </div>
    );
};
const Search = () => {
    return (<div className={classes(cm2())}>
        <Input/>
        <span>
            <Button style={{margin: 0, height: '40px'}} icon={<Icon name={'search'}/>}/>
        </span>

    </div>)
}
export {Search}
export default Input;