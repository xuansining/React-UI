import React, {Fragment} from 'react';
import './dialog.scss'
import {Icon} from "../index";
import {classNameFactory} from "../helpers/classes";

interface DialogProps{
    visible:boolean;
}

const classMaker=classNameFactory('dialog')
const cm=classMaker;
console.log(cm('mask'))
const Dialog:React.FC<DialogProps> = ({visible,children}) => {
   return visible? <Fragment>
       <div className={cm('mask')}/>
       <div className={cm()}>
           <div className={cm('close')}>
               <Icon name={'close'}/>
           </div>
           <div className={cm('header')}>
               title
           </div>
           <div className={cm('main')}>
               {children && children}
           </div>
           <div className={cm('footer')}>
               footer
           </div>
       </div>
   </Fragment> :null;
};

export default Dialog;