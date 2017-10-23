/**
 *
 * SIderContainer.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/10/18
 *
 * @内容 作用
 * @内容 作用
 */


'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SiderComponent} from '../../component/Sider/SiderComponent'
import {Layout} from 'antd'
import cecLogo from '../../asset/imgs/CECLogo.png'
const {Sider} = Layout
import "./SiderContainer.scss"
import SiderMenu from './SiderMenuContainer/SiderMenuContainer'
function mapStatetoProps(state, ownProps) {
    return {}
}

function mapDispatchtoProps(dispatch) {
    //return bindActionCreators({
    //    
    //}, dispatch)
    return {}
}

interface orderProps {
    SiderCollapsed?:boolean
    onSiderCollapse?:()=>void
}

class SIderContainerComponent extends PureComponent <orderProps, any> {
    static __ANT_LAYOUT_SIDER: any = true;
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed:collapsed });
    }
    render() {
        return (
            <Sider  className={'HRSider'}
                     collapsible
                     collapsed={this.state.collapsed}
                     onCollapse={this.onCollapse}
                     width={260} style={{minHeight:'100vh'}}><SiderComponent Content={<SiderMenu theme={'light'}></SiderMenu>} color="orange" logo={cecLogo} collapsed={this.state.collapsed}/></Sider>
        )
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(SIderContainerComponent)
