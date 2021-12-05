import React, {FC, forwardRef, LiHTMLAttributes, MouseEventHandler, Ref} from "react";
import './tabs.scss'
import {classes, classNameFactory} from "../helpers/classes";
interface TabProp extends LiHTMLAttributes<HTMLLIElement>{
    label:string;
    value:number;
    onTabChange?:(event:React.MouseEvent,newValue:number)=>void,
    currentValue?:number;
}
const cmTab=classNameFactory('tab')
const Tab: FC<TabProp> =forwardRef((props,ref:Ref<HTMLLIElement>) => {
    const {onTabChange,currentValue,value}=props;
    const activeClass=value===currentValue ? 'active' : undefined
    const handleTabClick:MouseEventHandler=(e)=>{
        onTabChange && onTabChange(e,value);
    }
    const _Tab= <li className={classes(cmTab(),activeClass)} onClick={handleTabClick} ref={ref}>
        {props.label}
    </li>
    return _Tab
})
export default Tab