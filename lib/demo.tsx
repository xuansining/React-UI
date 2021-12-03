import React, {FC, useState} from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';
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
        <div>
            <div className="example">
                {props.children}
            </div>
            <div>
                <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
                {codeVisible && code}
            </div>
        </div>
    );
};

export default Demo;