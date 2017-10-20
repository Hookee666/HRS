/**
 *
 * app.js 文件作用
 * @author Livermzsh<Livermzsh@hotmail.com>
 * @date 2017/8/17
 *
 * @内容 作用
 * @内容 作用
 */
import * as React from 'react';
import LoginComp from '../LoginContainer/LoginComp'
import './app.scss';
import HomeContainer from '../HomeContainer/HomeComp'
import {HashRouter,Switch,Route} from 'react-router-dom'
const App=()=>{
    return (
        <HashRouter>
            <Switch>
            <Route path="/" exact={true} render={()=><LoginComp/>}
            >
            </Route>
            <Route path={"/index"} render={()=>{
                return (<LoginComp>

                </LoginComp>)
            }}/>
            <Route path={"/6sHRSystem"} render={(props)=>{
                return (
                    <HomeContainer {...props}></HomeContainer>
                )
            }}>
            </Route>
            </Switch>
        </HashRouter>
    )

};

export default App;