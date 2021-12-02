import React, {Fragment, useState} from "react";
import Dialog from "./dialog";


const DialogExample: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
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
                ]} onClose={(e) => {
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
                ]} onClose={(e) => {
                    setVisible2(false)
                }} isCloseModelClose={true}>hi</Dialog>
            </div>
        </Fragment>
    )
}
export default DialogExample