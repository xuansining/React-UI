import React, {
    cloneElement, createRef,
    FC,
    ReactElement, Ref, useEffect,

    useState
} from 'react';
import {classes, classNameFactory} from '../helpers/classes'
import './tabs.scss'

interface TabsProps {
  value:number;
  onTabsChange:(event:React.MouseEvent,newValue:number)=>void;
  center?:boolean
}

const cmTabs = classNameFactory('tabs')

const Tabs: FC<TabsProps> = (props) => {

    const arrRef:Ref<HTMLLIElement>[] =[]
    const widArr:number[]=[]
    const [indicatorWidth,setIndicatorWidth]=useState(0)
    const [indicatorLeft,setIndicatorLeft]=useState(0)
    const Tabs =props.children as Array<ReactElement> || undefined;
    for(let i=0;i<Tabs.length;i++){
        const _ref=createRef<HTMLLIElement>()
        arrRef.push(_ref)
    }

    const{onTabsChange,value,center=false}=props
    const centerClass= center && 'center' ||undefined
    useEffect(()=>{
        arrRef.map(ref=>{

            // @ts-ignore
            widArr.push(ref.current.getBoundingClientRect().width)
            return ref
        })
      const _ref=  arrRef[value]
        // @ts-ignore
        const width= _ref&& _ref.current.getBoundingClientRect().width;
        setIndicatorWidth(width)
    })

   const handleOnTabChange=(event:React.MouseEvent,newValue:number)=>{
       console.log(newValue)
       onTabsChange(event,newValue);
       const width=widArr.filter((v,i)=>i<newValue).reduce((result,cur)=>{
           return result+cur
       },0)
       setIndicatorLeft(newValue*8+width)

   }

    return (
        <div className={centerClass}>
            <ul className={classes(cmTabs())} >
                {Tabs && Tabs.map((tab,index)=>{
                    const mTab=tab;
                    const ele= cloneElement(mTab,{
                        onTabChange: handleOnTabChange,
                        currentValue:value,
                        ref:arrRef[index]

                    })
                    return ele

                })}
                <span className={cmTabs('indicator')} style={{left: indicatorLeft,width:indicatorWidth}}/>
            </ul>

        </div>
    );
}



export default Tabs