import React, {FC, useState} from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import {Button} from "./index";
import  './demo.scss'
import {classes} from "./helpers/classes";
type DemoProps={
    code: string
}
const Demo:FC<DemoProps> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false);
    const code = (
        <Highlight {...defaultProps} code={props.code} language="jsx" theme={oceanicNext} >
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={classes(className,'mui-code')} style={style}>
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
            <div className={'example-code'}>
                <Button onClick={() => setCodeVisible(!codeVisible)}>查看代码</Button>

                    {codeVisible && code}


            </div>
        </div>
    );
};

export default Demo;