import React from 'react';
import Icon from './icon';
import './icon.example.scss'
const IconExample: React.FunctionComponent = () => {
  return (
    <div className={'icon-example'}>
      <Icon name="alipay"/>
      <Icon name="wechat"/>
      <Icon name="qq"/>
    </div>
  );
};

export default IconExample;