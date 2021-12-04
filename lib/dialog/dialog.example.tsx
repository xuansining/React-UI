import React, {Fragment, useState} from "react";
import Dialog,{alert,confirm,modal} from "./dialog";
import Button from "../Button/button";



const DialogExample: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const openModel=()=>{
        const close=modal(<h1>你好
            <Button onClick={() => close()}>close</Button>
        </h1>)

    }
    return (
        <Fragment>

            <div>
                <h1>实例1</h1>
                <Button buttonType="primary" onClick={() => setVisible(!visible)}>toggle</Button>
                <Dialog visible={visible} button={[
                    <Button onClick={() => {
                        setVisible(false)
                    }}>取消</Button>,
                    <Button onClick={() => {
                        setVisible(false)
                    }}>关闭</Button>
                ]} onClose={() => {
                            setVisible(false)
                        }}>hi</Dialog>
            </div>
            <div>
                <h1>实例2</h1>
                <Button buttonType={'primary'} onClick={() => setVisible2(!visible2)}>toggle</Button>
                <Dialog visible={visible2} button={[
                    <Button onClick={() => {
                        setVisible2(false)
                    }}>取消</Button>,
                    <Button onClick={() => {
                        setVisible2(false)
                    }}>关闭</Button>
                ]} onClose={() => {
                    setVisible2(false)
                }} isCloseModelClose={true}>hi</Dialog>
            </div>
            <div>
                <h1>实例3</h1>
                <Button onClick={() => alert('hello')}>alert</Button>
                <Button onClick={()=>confirm('你确定要删除吗？',()=>{
                    console.log('确认')},()=>{
                    console.log('no')})}>confirm</Button>
            </div>
            <div>
                <h1>实例4</h1>
                <Button onClick={openModel}>use_modal</Button>

            </div>
        </Fragment>
    )
}
export default DialogExample