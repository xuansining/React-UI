import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,  NavLink} from 'react-router-dom';

import ButtonExample from './lib/button.example';
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import Layout, {Header, Main, Aside, Footer} from "./lib/layout/layout";

import './example.scss'
import IconDemo from "./lib/icon/iconDemo";
ReactDOM.render(
    <Router>
        <div >
            <Layout className={'site-page'}>
                <Header  className={'site-header'}>
                    <div className="logo">
                        <img width={90} height={90} src={require('./logo.png')} alt='Mui'/>
                    </div>
                </Header>
                <Layout>
                    <Aside className={'site-aside'}>

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
                            </ul>


                    </Aside>
                    <Main >

                        <main>
                            <Route path="/icon" component={IconDemo}/>
                            <Route path="/button" component={ButtonExample}/>
                            <Route path="/dialog" component={DialogExample}/>
                            <Route path="/layout" component={LayoutExample}/>
                        </main>

                    </Main>
                </Layout>
                <Footer className={'site-footer'}>
                    &copy; xuan
                </Footer>
            </Layout>
        </div>

    </Router>
    , document.querySelector('#root'));