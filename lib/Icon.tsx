import React from 'react';
import './icon.scss'
interface IconProp{
    name?: string
}
const Icon:React.FC<IconProp> = (props) => {
    const name=props.name;
    return (

            <svg className={'mina-icon'}>
                <use xlinkHref={`#${name}`}/>
            </svg>

    );
};

export default Icon;