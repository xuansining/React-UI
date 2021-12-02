import React from 'react';
import './icon.scss'
import {classes} from "./helpers/classes";
interface IconProp extends React.SVGAttributes<SVGElement>{
    name: string

}
const Icon:React.FC<IconProp> = ( {className,name, ...otherProps}) => {

    return (
            <svg className={classes('mina-icon',className)} {...otherProps}>
                <use xlinkHref={`#${name}`}/>
            </svg>
    );
};

export default Icon;