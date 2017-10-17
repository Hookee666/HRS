/**
 *
 * HomeReduxHoc.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/10/17
 *
 * @内容 作用
 * @内容 作用
 */





'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function mapStatetoProps(state, ownProps) {
    state.ui
    return {}
}

function mapDispatchtoProps(dispatch) {
    //return bindActionCreators({
    //    
    //}, dispatch)
    return {}
}

interface orderProps {

}

export function HomeReduxHoc() {
    return function (Comp: React.ComponentClass<any> | React.SFC<any>) {
        class HomeReduxHocComponent extends PureComponent <orderProps, any> {

            render() {
                return (
                    <Comp {...this.props}/>
                )
            }
        }

        return connect(mapStatetoProps, mapDispatchtoProps)(HomeReduxHocComponent)
    }
}