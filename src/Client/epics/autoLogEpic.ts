/**
 *
 * AutoLogEpics.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/10/17
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
export const AutoLogEpic = action$ =>
    action$.map(
        (action)=>{
            console.log(action.type)
        }
    )
