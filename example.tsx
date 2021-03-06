import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';


import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";


import './example.scss'
import IconDemo from "./lib/icon/iconDemo";
import ButtonExample from "./lib/Button/button.example";
import InputExample from "./lib/input/input.example";
import TabsExample from "./lib/tabs/tabs.example";
import SwitchExample from "./lib/switch/switch.example";
import {Icon} from "./lib";
import {classes} from "./lib/helpers/classes";



const App = () => {
    const [visible, setVisible] = useState(false)
    const visibleClass = visible && 'visible' || undefined
    const onMenuClick = () => {
        setVisible(!visible)
    }
    return (<Router>
        <div>
            <header className={'site-header'}>

                <div className={'menu'} onClick={onMenuClick}>
                    <Icon name={'menu'}/>
                </div>
                <div className="logo">
                    <img width={70} height={70} src={require('./logo.png')} alt='Mui'/>
                </div>

            </header>
            <div className={'site-page'}>
                <aside className={classes('site-aside', visibleClass)}>

                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to="/icon">Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to="/button">Button</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dialog'>Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to='/input'>Input</NavLink>
                        </li>
                        <li>
                            <NavLink to='/tabs'>Tabs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/switch'>Switch</NavLink>
                        </li>
                    </ul>


                </aside>


                <main className={'site-main'}>
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                    <Route path="/input" component={InputExample}/>
                    <Route path="/tabs" component={TabsExample}/>
                    <Route path="/switch" component={SwitchExample}/>
                </main>


            </div>
            <footer className={'site-footer'}>
                &copy; xuan
            </footer>
        </div>

    </Router>)
}
ReactDOM.render(
    <App/>
    , document.querySelector('#root'));