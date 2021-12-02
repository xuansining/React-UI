import React from 'react';
interface DialogProps{
    visible:boolean;
}
const Dialog:React.FC<DialogProps> = ({visible}) => {
   return visible? <div>Dialog</div> :null;
};

export default Dialog;