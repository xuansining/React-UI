import React, {Fragment} from 'react';
import Switch from "./switch";
import {Icon} from "../index";

const SwitchExample = () => {
    return (
        <Fragment>
        <div>
            <h1>示例一</h1>
            <Switch isChecked={false} onSwitchChange={(checked)=>{
                console.log(checked)}}/>
        </div>

    <div>
        <h1>示例二 带有文字</h1>
        <Switch isChecked={false} checkedChildren={'开'} unCheckedChildren={'关'}/>

        <Switch isChecked={false} checkedChildren={<Icon name={'checked'}/>} unCheckedChildren={<Icon name={'close'}/>}/>
    </div>
        </Fragment>
    );

};
export default SwitchExample;