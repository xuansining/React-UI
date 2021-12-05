import React, {BaseHTMLAttributes, FC, MouseEventHandler, ReactNode, useState} from 'react';
import {classes, classNameFactory} from '../helpers/classes'

const cmSwitch = classNameFactory('switch')
import './switch.scss'

interface SwitchProps extends BaseHTMLAttributes<HTMLDivElement> {
    onSwitchChange?: (checked: boolean) => void;
    isChecked?: boolean;
    checkedChildren?: ReactNode;
    unCheckedChildren?:ReactNode;
}

const Switch: FC<SwitchProps> = (props) => {
    const {isChecked = false, onSwitchChange,checkedChildren,unCheckedChildren} = props
    const [checked, setChecked] = useState(isChecked)
    // const {onSwitchChange}=props
    const checkedClass = checked && 'checked' || undefined
    const handleSwitchClick: MouseEventHandler = () => {
        setChecked(!checked)
        onSwitchChange && onSwitchChange(checked)
    }

    return (
        <div className={classes(cmSwitch(), checkedClass)} onClick={handleSwitchClick}>
            <span className={classes(cmSwitch('tip'))}>
                {checked? checkedChildren:unCheckedChildren}
            </span>

            <span className={classes(cmSwitch('toggle'))}/>
        </div>
    );
};
export default Switch;