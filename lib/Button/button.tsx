import React, {FC, ReactElement} from 'react';
import {classNameFactory,classes} from '../helpers/classes'
import './button.scss'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  buttonType?: string,
    size?:string,
    shape?:string,
    icon?: ReactElement,
    loading?:boolean,
    disabled?:boolean,
    danger?:boolean
}
const cm=classNameFactory('button')

const Button:FC<ButtonProps> = (props) => {
    const {className,buttonType,size,shape,icon,loading=false,disabled=false,danger=false,...rest}=props
    const hasIcon=icon && 'hasIcon' || undefined
    const _btnType=buttonType ||'default'
    const isLoading=(loading && 'loading') ||undefined
    const isDisabled=(disabled && 'disabled') ||undefined
    const isDanger=(danger && 'danger') || undefined;
    return (
        <button className={classes(cm(),className,cm(_btnType),size,shape,hasIcon,isLoading,isDisabled,isDanger)} {...rest}>
            {icon}
            {props.children}
        </button>
    );
};

export default Button;