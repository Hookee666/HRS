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
import {Icon,Menu}from 'antd'
const SubMenu=Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item
export interface ISiderComponentProps {
    color ?: string;
    theme ?: 'light' | 'dark';
    collapsed ?:boolean;
    logo?:any;
}

const SiderComponent: React.SFC<ISiderComponentProps> = (props) => {
    const {color='black',theme='dark'}=props;
    return (
        <div className="sidebar" data-color={color} data-image="assets/img/sidebar-5.jpg">
            <div className="sidebar-wrapper">
                <div className="logo">
                    {props.collapsed?<img src={props.logo} />:<a href="https://github.com/whisperfairy/" className="simple-text">
                        中电六所
                    </a> }

                </div>

                <Menu
                    mode="inline"
                    theme={theme}
                >
                    <SubMenu key="sub-m0" title={<span><Icon type="mail" /><span>人力资源</span></span>}>
                            <SubMenu key="sub-m0-1" title={<span><Icon type="mail" /><span>人员管理</span></span>}>
                                <MenuItem key={"sub-m0-1-1"}>
                                     人员录入
                                </MenuItem>
                                <MenuItem key={"sub-m0-1-2"}>
                                     人员信息
                                </MenuItem>
                                <MenuItem key={"sub-m0-1-3"}>
                                     统计分析
                                </MenuItem>
                                <MenuItem key={"sub-m0-1-4"}>
                                     打印导出
                                </MenuItem>
                            </SubMenu>
                            <SubMenu key="sub-m0-2" title={<span><Icon type="mail" /><span>组织机构</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-3" title={<span><Icon type="mail" /><span>报表管理</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-4" title={<span><Icon type="mail" /><span>合同管理</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-5" title={<span><Icon type="mail" /><span>人事变更</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-6" title={<span><Icon type="mail" /><span>考勤管理</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-7" title={<span><Icon type="mail" /><span>招聘管理</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-8" title={<span><Icon type="mail" /><span>薪酬管理</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-9" title={<span><Icon type="mail" /><span>保险福利</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-10" title={<span><Icon type="mail" /><span>培训管理</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-11" title={<span><Icon type="mail" /><span>绩效考核</span></span>}></SubMenu>
                            <SubMenu key="sub-m0-12" title={<span><Icon type="mail" /><span>分析决策</span></span>}></SubMenu>
                    </SubMenu>
                    <SubMenu key="sub-m1" title={<span><Icon type="mail" /><span>项目管理</span></span>}>
                    </SubMenu>

                </Menu>
            </div>
            <div className="slider-background"></div>
        </div>
    );
};
export {SiderComponent};