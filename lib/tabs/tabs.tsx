import React, {
    cloneElement, createRef,
    FC, forwardRef,
    LiHTMLAttributes,
    MouseEventHandler,
    ReactElement, Ref, useEffect,

    useState
} from 'react';
import {classes, classNameFactory} from '../helpers/classes'
import './tabs.scss'

interface TabsProps {
  value:number;
  onTabsChange:(event:React.MouseEvent,newValue:number)=>void
}

const cmTabs = classNameFactory('tabs')
const cmTab=classNameFactory('tab')
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
    const{onTabsChange,value}=props
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
        <div>
            <ul className={classes(cmTabs())} >
                {Tabs && Tabs.map((tab,index)=>{
                    const _Tab=tab;
                    const ele= cloneElement(_Tab,{
                        onTabChange: handleOnTabChange,
                        currentValue:value,
                        ref:arrRef[index]

                    })
                    return ele

                })}
                <span className={cmTabs('indicator')} style={{left: indicatorLeft,width:indicatorWidth}}></span>
            </ul>

        </div>
    );
}
interface TabProp extends LiHTMLAttributes<HTMLLIElement>{
    label:string;
    value:number;
    onTabChange?:(event:React.MouseEvent,newValue:number)=>void,
    currentValue?:number;
}

const Tab: FC<TabProp> =forwardRef((props,ref:Ref<HTMLLIElement>) => {
    const {onTabChange,currentValue,value}=props;
    const activeClass=value===currentValue ? 'active' : undefined
    const handleTabClick:MouseEventHandler=(e)=>{
        onTabChange && onTabChange(e,value);
    }
    const _Tab= <li className={classes(cmTab(),activeClass)} onClick={handleTabClick} ref={ref}>
        {props.label}
    </li>
    return _Tab
})
export {Tab}
export default Tabs