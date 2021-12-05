import React, {FC, useState} from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';
import {Button} from "./index";
import  './demo.scss'
type DemoProps={
    code: string
}
const Demo:FC<DemoProps> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false);
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx" theme={vsDark}>
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
              {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                      {line.map((token, key) => (
                          <span {...getTokenProps({token, key})} />
                      ))}
                  </div>
              ))}
            </pre>
            )}
        </Highlight>
    );
    return (
        <div className={'demo-wrapper'}>
            <h2>常规用法</h2>
            <div className="example">
                {props.children}
            </div>
            <div>
                <Button onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>
                {codeVisible && code}
            </div>
        </div>
    );
};

export default Demo;