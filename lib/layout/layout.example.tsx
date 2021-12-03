import React, {Fragment} from 'react';
import Layout from './layout';
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import './layout.example.scss'
import Aside from "./aside";


export default function () {
    return (
        <Fragment>
            <div >
                <h1>示例1</h1>
                <Layout  style={{width:'600px',height:'500px'}}>
                    <Header className='x'>Header</Header>
                    <Main className={'y'}>Main</Main>
                    <Footer className={'z'}>Footer</Footer>
                </Layout>


            </div>
            <div>

                <h1>示例2</h1>
                <Layout style={{width:'600px',height:'500px'}}>
                    <Header className={'x'}>Header</Header>
                    <Layout>
                        <Aside className={'a'}>Aside</Aside>
                        <Main className={'y'}>Main</Main>
                    </Layout>
                    <Footer className={'z'}>Footer</Footer>
                </Layout>
            </div>

            <div>

                <h1>示例3</h1>
                <Layout style={{width:'600px',height:'500px'}}>
                    <Header className={'x'}>Header</Header>
                    <Layout>
                        <Main className={'y'}>Main</Main>
                        <Aside className={'a'}>Aside</Aside>

                    </Layout>
                    <Footer className={'z'}>Footer</Footer>
                </Layout>
            </div>

            <div>

                <h1>示例4</h1>

                <Layout style={{width:'600px',height:'500px'}}>
                    <Aside className={'a'}>Aside</Aside>

                    <Layout>
                        <Header className={'x'}>Header</Header>
                        <Main className={'y'}>Main</Main>
                        <Footer className={'z'}>Footer</Footer>
                    </Layout>

                </Layout>
            </div>
        </Fragment>

    );
};