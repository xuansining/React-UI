import React, {Fragment} from 'react';
import Button from "./button";
import {Icon} from "../index";

const ButtonExample = () => {
    return (
        <Fragment>
            <div>
                <h1>实例一</h1>
                <div className={'button-example'}>
                    <Button buttonType="primary">primary Button</Button>
                    <Button buttonType="default">default Button</Button>
                    <Button buttonType="dashed">dashed Button</Button>
                    <Button buttonType="text">text Button</Button>
                    <Button buttonType="link">link Button</Button>
                </div>


            </div>
            <div>
                <h1>实例二</h1>
                <div className={'button-example'}>
                    <Button buttonType="primary" size='small'>primary Button</Button>
                    <Button buttonType="default" size='middle'>default Button</Button>
                    <Button buttonType="dashed" size='large'>dashed Button</Button>
                    <Button buttonType="text" size='middle'>text Button</Button>
                    <Button buttonType="link" size={'small'}>link Button</Button>
                </div>
            </div>
            <div>
                <h1>实例三</h1>
                <div className={'button-example'}>
                    <Button buttonType="primary" shape='round' icon={<Icon name={'download'}/>}/>
                    <Button buttonType="primary" size='circle' icon={<Icon name={'download'}/>}/>
                    <Button buttonType="primary" shape='round' icon={<Icon name={'download'}/>}>Download</Button>
                    <Button buttonType="default" size='circle' icon={<Icon name={'download'}/>}/>
                    <Button buttonType="default" size={'round'} icon={<Icon name={'search'}/>}>search</Button>
                </div >
            </div>
            <div>
                <h1>实例四</h1>
                <div className={'button-example'} >
                  <Button icon={<Icon name={'action_load'}/>} loading={true}>加载中</Button>
                    <Button icon={<Icon name={'action_load'}/>} buttonType={'primary'} shape={'round'} loading/>
                </div >
            </div>
            <div>
                <h1>实例五</h1>
                <div className={'button-example'} >
                    <Button buttonType={'primary'}>hello</Button>
                    <Button buttonType={'primary'} disabled>hello</Button>
                    <Button  disabled>disabled</Button>

                </div >
            </div>
            <div>
                <h1>实例六</h1>
                <div>
                    <Button buttonType={'primary'}>Button</Button>
                    <Button>Button</Button>
                    <Button  danger>danger</Button>
                    <Button buttonType={'dashed'}>Button</Button>

                </div>
            </div>

        </Fragment>
    );
};

export default ButtonExample;