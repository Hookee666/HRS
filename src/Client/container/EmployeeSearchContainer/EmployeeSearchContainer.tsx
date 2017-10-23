/**
 *
 * EmployeeSearchContainer.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/10/22
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

class EmployeeSearchContainerComponent extends PureComponent <orderProps, any> {

    render() {
        return (
            <div className={'EmployeeSearchContainer'}>
                <div className="EmployeeSearch__Panel">

                </div>
                <div className="EmployeeSearch__Table">

                </div>
            </div>
        )
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(EmployeeSearchContainerComponent)
