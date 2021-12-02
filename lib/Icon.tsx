import React from 'react';
import './icon.scss'
import {classes} from "./helpers/classes";
interface IconProp extends React.SVGAttributes<SVGElement>{
    name: string

}
const Icon:React.FC<IconProp> = (props) => {
  const {className, ...otherProps} =props
    return (

            <svg className={classes('mina-icon',className)} {...otherProps}>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
    );
};

export default Icon;