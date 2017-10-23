/**
 *
 * SiderComponent 文件作用
 * @author hurong <>
 * @date 2017/9/11
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './Sider.scss'

export interface ISiderComponentProps {
    color ?: string;
    collapsed ?:boolean;
    logo?:any;
    Content:any
}

const SiderComponent: React.SFC<ISiderComponentProps> = (props) => {
    const {color='black'}=props;
    const marginBottom=props.collapsed?0:'48px'
    return (
        <div className="sidebar" data-color={color} data-image="assets/img/sidebar-5.jpg">
            <div className="sidebar-wrapper" style={{marginBottom}}>
                <div className="logo">
                    {props.collapsed?<img src={props.logo} />:<a href="https://github.com/whisperfairy/" className="simple-text">
                        中电六所
                    </a> }
                </div>
                {props.Content}
            </div>
            <div className="slider-background"></div>
        </div>
    );
};
export {SiderComponent};