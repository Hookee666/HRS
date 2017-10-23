/**
 *
 * LoginContainer 文件作用
 * @author hurong <353486474@qq.com>
 * @date 2017/10/14
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './LoginComp.scss'
import bg from '../../asset/imgs/isometric-desk.png';
import bgmd from '../../asset/imgs/isometric-desk-md.png'
import {Icon} from 'antd'
export interface ILoginContainerProps {
}

const LoginComp: React.SFC<ILoginContainerProps> = (props) => {
    return (<div className="Login__Container">
         <div className="Login__ColorBG--orange"></div>
         <div className="Login__LowerColorBG--Gray"></div>
        <div className="LoginFormContainer_box">
        <div className="LoginFormContainer">
            <div className="LoginForm__Deco"/>
            <div className="LoginForm__Title">人力资源管理系统</div>
            <div className="LoginForm__Username">

                <span className="UsernameIcon"/>
                <input type="text" placeholder="用户名"/>
            </div>
            <div className="LoginForm__Password">

                <span className="PasswordIcon"/>
                <input type="password" placeholder="密码"/>
            </div>
            <div className="LoginForm__LoginButton">
                <button type="button">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </div>
        </div>
        </div>
        <figure className="illustrations">
            <img src={bgmd} className="hidden-md-down hidden-xl-up" data-rjs="next/illustrations/isometric-desk-md@2x.png" alt="Isometric desk md"></img>
            <img src={bg} className="hidden-lg-down wow fadeIn animated" data-rjs="next/illustrations/isometric-desk@2x.png" alt="Isometric desk" style={{visibility: 'visible'}}></img>
        </figure>
    </div>);
};
export default (LoginComp);