import React, {Fragment} from 'react';
import Input, {Search} from "./input";
import Icon from "../icon/icon";

const InputExample = () => {
    return (
        <Fragment>
            <div>
                <h2>基础输入框</h2>
                <Input/>
            </div>
            <div>
                <h2>实例二</h2>
                <Input inputPrefix={<Icon name={'user'}/>} placeholder={'请输入用户名'}/>
            </div>
            <div>
                <h2>实例三</h2>
                <Search/>
            </div>
            <div>
                <h2>实例四</h2>
                <Input inputPrefix={<Icon name={'rmb'}/>} placeholder={'请输入金额'} inputSuffix={'RMB'}/>
            </div>
            <div>
                <h2>五</h2>
                <Input placeholder={'bordered'} bordered={false}/>
            </div>
        </Fragment>
    );
};

export default InputExample;