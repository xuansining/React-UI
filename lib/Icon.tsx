import React from 'react';
import './icon.scss'
interface IconProp extends React.SVGAttributes<SVGElement>{
    name: string

}
const Icon:React.FC<IconProp> = (props) => {

    return (

            <svg className={'mina-icon'} {...props}>
                <use xlinkHref={`#${props.name}`}/>
            </svg>

    );
};

export default Icon;