/**
 *
 * UIReducer.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/10/17
 *
 * @内容 作用
 * @内容 作用
 */
import {ON_COLLAPSED_TRIGGER} from '../constant/ActionTypes'
import immutable from 'immutable'

const INITIAL_STATE = immutable.Map(
    {
        siderCollapse:true,
    });
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ON_COLLAPSED_TRIGGER : {
            return state.update('siderCollapse', val => !val)
        }
        default:
            return state;
    }
}
