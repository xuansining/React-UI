import React, {Fragment, useState} from "react";
import Dialog,{alert,confirm,modal} from "./dialog";


const DialogExample: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const openModel=()=>{
        const close=modal(<h1>你好
            <button onClick={() => close()}>close</button>
        </h1>)

    }
    return (
        <Fragment>

            <div>
                <h1>实例1</h1>
                <button onClick={() => setVisible(!visible)}>toggle</button>
                <Dialog visible={visible} button={[
                    <button onClick={() => {
                        setVisible(false)
                    }}>取消</button>,
                    <button onClick={() => {
                        setVisible(false)
                    }}>关闭</button>
                ]} onClose={() => {
                            setVisible(false)
                        }}>hi</Dialog>
            </div>
            <div>
                <h1>实例2</h1>
                <button onClick={() => setVisible2(!visible2)}>toggle</button>
                <Dialog visible={visible2} button={[
                    <button onClick={() => {
                        setVisible2(false)
                    }}>取消</button>,
                    <button onClick={() => {
                        setVisible2(false)
                    }}>关闭</button>
                ]} onClose={() => {
                    setVisible2(false)
                }} isCloseModelClose={true}>hi</Dialog>
            </div>
            <div>
                <h1>实例3</h1>
                <button onClick={() => alert('hello')}>alert</button>
                <button onClick={()=>confirm('你确定要删除吗？',()=>{
                    console.log('确认')},()=>{
                    console.log('no')})}>confirm</button>
            </div>
            <div>
                <h1>实例4</h1>
                <button onClick={openModel}>use_modal</button>

            </div>
        </Fragment>
    )
}
export default DialogExample