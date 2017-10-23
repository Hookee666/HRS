/**
 *
 * HomeContainer 文件作用
 * @author hurong <353486474@qq.com>
 * @date 2017/9/11
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './HomeContainer.scss';
import { Layout } from 'antd';
import {SiderComponent} from '../../component/Sider/SiderComponent'
import InfoTablesContainer from '../InfoTablesContainer/InfoTablesContainer'
import {Route,Switch,RouteComponentProps} from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;
export interface IHomeContainerProps extends RouteComponentProps<any>{
    SiderCollapsed?:boolean
    onSiderCollapse?:()=>void
}

const HomeComp: React.SFC<IHomeContainerProps> = (props) => {
    return (
        <Layout>
            <Sider   collapsible
                     collapsed={true}
                     onCollapse={()=>{
                         props.onSiderCollapse();
                     }}
                     width="260" style={{minHeight:'100vh'}}><SiderComponent theme="light" color="orange"/></Sider>
            <Layout>
                <Header className="home_header">人力资源管理系统</Header>
                <Content>
                    {/*<Switch>*/}
                        {/*<Route path={`${props.match.url}/project/week_list`} component={WeekPlanListContainer}/>*/}
                    {/*</Switch>*/}
                    <InfoTablesContainer/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default HomeComp;