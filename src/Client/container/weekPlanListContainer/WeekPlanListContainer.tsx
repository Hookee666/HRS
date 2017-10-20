/**
 *
 * WeekPlanListContainer.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/23
 *
 * @内容 作用
 * @内容 作用
 */





'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import './WeekPlanListContainer.scss'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EChart from 'echarts-for-react';
import {Tree} from 'antd'
const {TreeNode} = Tree
import WeekNoComp from '../../component/WeekNoItemComp/WeekNoComp'
import {VHLayoutHoc} from '../../hocs/layoutHoc/VHLayoutHoc'
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

class WeekPlanListContainer extends PureComponent <orderProps, any> {
    ChartBox:HTMLDivElement;
    option:any;
    constructor(){
        super()
        this.option = {
            title : {
                text: '党员分布',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['团员','无党籍','党员','入党积极分子','预备党员']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [

                {
                    name:'党员构成',
                    type:'pie',

                    roseType : 'area',
                    data:[
                        {value:10, name:'团员'},
                        {value:5, name:'无党籍'},
                        {value:15, name:'党员'},
                        {value:25, name:'入党积极分子'},
                        {value:20, name:'预备党员'},
                    ]
                }
            ]
        };
    }
    render() {
        return (
            <div className='WeekPlanContainer'>
                <div className="treeList">
                    <Tree
                        showLine
                        defaultExpandedKeys={['0-0-0']}

                    >
                        <TreeNode title="数据分析" key="0-0">
                            <TreeNode title="年龄分布" key="0-0-0">

                            </TreeNode>
                            <TreeNode title="学历构成" key="0-0-1">

                            </TreeNode>
                            <TreeNode title="党员分布" key="0-0-2">

                            </TreeNode>
                            <TreeNode title="工龄分布" key="0-0-3">

                            </TreeNode>
                        </TreeNode>
                    </Tree>
                </div>
                <div className="chart" >
                    <EChart
                        style={{width:"100%",height:'100%'}}
                        option={this.option}
                        notMerge={false}
                        lazyUpdate={true}
                        theme={"essos"}
                    />
                </div>
            </div>
        )
    }

}

export default VHLayoutHoc()(connect(mapStatetoProps, mapDispatchtoProps)(WeekPlanListContainer))
