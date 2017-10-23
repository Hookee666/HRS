/**
 *
 * InfoTablesContainer 文件作用
 * @author
 * @date 2017/10/20
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './InfoTablesContainer.scss';
import {RouteComponentProps} from 'react-router-dom'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import BasicInfo from '../BasicInfoContainer/BasicInfoContainer'
export interface IInfoTablesContainerProps {
        basicinfo?: any
}

const InfoTablesContainer: React.SFC<IInfoTablesContainerProps> = (props) => {
    return (
        <Tabs type="card">
            <TabPane tab="基本情况" key="1">
                <BasicInfo {...props.basicinfo}/>
            </TabPane>
            <TabPane tab="教育经历" key="2">

            </TabPane>
            <TabPane tab="工作经历" key="3">

            </TabPane>
            <TabPane tab="家庭成员" key="4">

            </TabPane>
            <TabPane tab="证书扫描件" key="5">

            </TabPane>
            <TabPane tab="培训经历" key="6">

            </TabPane>
            <TabPane tab="奖惩情况" key="7">

            </TabPane>
            <TabPane tab="合同及协议" key="8">

            </TabPane>
            <TabPane tab="主要科研成果" key="9">

            </TabPane>
            <TabPane tab="项目经历" key="10">

            </TabPane>
            <TabPane tab="发表论文" key="11">

            </TabPane>
            <TabPane tab="职务变动表" key="12">

            </TabPane>
            <TabPane tab="职称评定记录" key="13">

            </TabPane>
        </Tabs>
    );
};
export default InfoTablesContainer;