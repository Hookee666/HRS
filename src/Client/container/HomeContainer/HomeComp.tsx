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
import projectComp from '../../container/ProjectContainer/ProjectContainer'
import WeekPlanListContainer from '../weekPlanListContainer/WeekPlanListContainer'
import Sider from '../SiderContainer/SIderContainer'
import {Route,Switch,RouteComponentProps} from 'react-router-dom'
const { Header, Content } = Layout;
export interface IHomeContainerProps extends RouteComponentProps<any>{
}

const HomeComp: React.SFC<IHomeContainerProps> = (props) => {
    return (
        <Layout>
            <Sider content></Sider>
            <Layout>
                <Header className="home_header">人力资源管理系统</Header>
                <Content>
                    <Switch>
                    {/*<LightComp/>*/}
                       <Route path={`${props.match.url}/project/week_list`} component={WeekPlanListContainer}></Route>
                        <Route path={`${props.match.url}/employee/search`} component={WeekPlanListContainer}></Route>

                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};
export default HomeComp;