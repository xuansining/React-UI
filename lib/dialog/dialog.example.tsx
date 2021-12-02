import React, {useState} from "react";
import Dialog from "./dialog";


const DialogExample: React.FC = () => {
    const [visible,setVisible]=useState(false)
    return (
        <div>
            <button onClick={()=>setVisible(!visible)}>toggle</button>
            <Dialog visible={visible}>hi</Dialog>
        </div>)
}
export default DialogExample