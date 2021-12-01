import React from 'react';
interface IconProp{
    name?: string
}
const Icon:React.FC<IconProp> = () => {
    return (
        <span>
            Icon
        </span>
    );
};

export default Icon;