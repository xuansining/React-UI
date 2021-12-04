import React, {FC} from "react";
interface TabPanelProps{
    index:number,
    value:number
}
const TabPanel:FC<TabPanelProps> =(props)=>{

    const {index,value}=props

    return (
       value===index ? <div>{props.children}</div> :null
    )


};
export default TabPanel
