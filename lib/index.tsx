import * as React from "react";
import ReactDom from 'react-dom'
import Icon from "./Icon";


import wechat from './icons/wechat.svg'
import qq from './icons/qq.svg'
import  alipay from './icons/alipay.svg'


ReactDom.render(<div>
    <Icon name={wechat.id}/>
   <Icon name={qq.id}/>
   <Icon name={alipay.id}/>

</div>, document.getElementById('root'))