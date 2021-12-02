import * as React from "react";
import ReactDom from 'react-dom'
import Icon from "./Icon";

import './importAll'


ReactDom.render(<div>
    <Icon name={'wechat'} onClick={()=>{
        console.log('hi')}} onMouseEnter={()=>{
        console.log('enter')}}/>
   <Icon name={'qq'}/>
   <Icon name={'alipay'}/>

</div>, document.getElementById('root'))