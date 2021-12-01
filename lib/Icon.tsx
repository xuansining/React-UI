import React from 'react';
interface IconProp{
    name?: string
}
const Icon:React.FC<IconProp> = (props) => {
    const name=props.name;
    return (
        <span>
            <svg>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </span>
    );
};

export default Icon;