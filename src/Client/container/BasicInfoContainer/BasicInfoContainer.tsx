/**
 *
 * BasicInfoContainer 文件作用
 * @author
 * @date 2017/10/20
 *
 * @内容 作用
 * @内容 作用
 */


'use strict'
import React, {PureComponent} from 'react';
import './BasicInfoContainer.scss';
import {RouteComponentProps} from 'react-router-dom'
export interface IBasicInfoContainerProps {
    department?: string //部门名称
    employeenumber?: number //工号
    departmentnumber?: number //部门编号
    name?: string //姓名
    formername?: string //曾用名
    gender?: string //性别
    ethnicity?: string //民族
    age?: number //年龄
    idnumber?: string //身份证号
    birthdate?: number //出生日期
    birthplace?: string //出生地
    native?: string //籍贯
    political?: string //政治面貌
    partytime?: number //入党时间
    education?: string //学历
    degree?: string //学位
    university?: string //毕业院校
    major?: string //专业
    worktime?: number //参加工作时间
    employmentform?: string //用工形式
    title?: string //职称
    titlelevel?: string //职称等级
    titleappointmenttime?: number //职称聘任时间
    titleassessmenttime?: number //职称评定时间
    position?: string //职务
    conversiontime?: number //转正时间
    phonenumber?: string //手机号码
    post?: string //岗位
    postfullname?: string //干部岗位全程
    establishment?: string //编制类型
    workncsetime?: number //入所时间
    residence?: string //户口所在地
    workcompanytime?: number //入司时间
    marriage?: string //婚姻状况
    homephone?: string //家庭电话
    address?: string //家庭住址及邮编
    emergencycontact?: string //紧急联系人
    emergencynumber?: string //紧急联系人电话
    training?: string //培训记录
    email?: string //电子邮件
    abroadstudy?: string //留学国家
    documentplace?: string //档案所在地
    hobby?: string //爱好
    talent?: string //特长
    remarks?: string //备注
    talentfield2?: string //本人擅长专业领域二
    talentfield1?: string //本人擅长专业领域一
    departmentgroup?: string //部门分组
    documentremarks?: string //查档备注
    documentitems?: string //查档待核定事项
    workplace?: string //工作地点
    nationality?: string //国籍
    adressphone?: string //住址电话
    driverlicecse?: string //驾照号码
    dimissiontime?: string //离职时间
    personestatus?: string //人员状态
    height?: number //身高
    iscadre?: string //是否干部
    isconsult?: string //是否已查档
    weight?: number //体重
    language?: string //外语水平
    subcompany?: string //下属公司部门
    presentadress?: string //现住址
    bloodtype?: string //血型
    englishname?: string //英文名
    usernumber?: string //用户编号
    employeestatus?: string //员工状态
    selfcomment2?: string //专业领域二水平自评
    selfcomment1?: string //专业领域一水平自评
    religion?: string //宗教信仰
}

const BasicInfoContainer: React.SFC<IBasicInfoContainerProps> = (props) => {
    return (
        <div className="BasicInfoContainer">
            <table>
                <tr className="BasicInfo__row--dark">
                    <td className="BasicInfo__field">姓名:</td>
                    <td className="BasicInfo__data">{props.name}</td>
                    <td className="BasicInfo__field"></td>
                    <td className="photo" rowSpan={5}></td>
                </tr>
                <tr className="BasicInfo__row--light">
                    <td className="BasicInfo__field">职务：</td>
                    <td className="BasicInfo__data">{props.position}</td>
                    <td className="BasicInfo__field"></td>
                </tr>
                <tr className="BasicInfo__row--dark">
                    <td className="BasicInfo__field">身份证号：</td>
                    <td className="BasicInfo__data">{props.idnumber}</td>
                    <td className="BasicInfo__field">照片：</td>
                </tr>
                <tr className="BasicInfo__row--light">
                    <td className="BasicInfo__field">年龄：</td>
                    <td className="BasicInfo__data">{props.age}</td>
                    <td className="BasicInfo__field"></td>
                </tr>
                <tr className="BasicInfo__row--dark">
                    <td className="BasicInfo__field">性别：</td>
                    <td className="BasicInfo__data">{props.gender}</td>
                    <td className="BasicInfo__field"></td>
                </tr>
                <tr className="BasicInfo__row--light">
                    <td className="BasicInfo__field">出生日期：</td>
                    <td className="BasicInfo__data">{props.birthdate}</td>
                    <td className="BasicInfo__field">手机号码：</td>
                    <td className="BasicInfo__data">{props.phonenumber}</td>
                </tr>
                <tr className="BasicInfo__row--dark">
                    <td className="BasicInfo__field">用户编号：</td>
                    <td className="BasicInfo__data">{props.usernumber}</td>
                    <td className="BasicInfo__field">部门名称：</td>
                    <td className="BasicInfo__data">{props.departmentnumber}</td>
                </tr>
                <tr className="BasicInfo__row--light">
                    <td className="BasicInfo__field">岗位：</td>
                    <td className="BasicInfo__data">{props.post}</td>
                    <td className="BasicInfo__field">个人身份：</td>
                    <td className="BasicInfo__data">???</td>
                </tr>
                <tr className="BasicInfo__row--dark">
                    <td className="BasicInfo__field">部门分组：</td>
                    <td className="BasicInfo__data">{props.departmentgroup}</td>
                    <td className="BasicInfo__field">入司时间：</td>
                    <td className="BasicInfo__data">{props.workcompanytime}</td>
                </tr>
                <tr className="BasicInfo__row--light">
                    <td className="BasicInfo__field">工号：</td>
                    <td className="BasicInfo__data">{props.employeenumber}</td>
                    <td className="BasicInfo__field">籍贯：</td>
                    <td className="BasicInfo__data">{props.native}</td>
                </tr>
                <tr className="BasicInfo__row--dark">
                    <td className="BasicInfo__field">出生地：</td>
                    <td className="BasicInfo__data">{props.birthplace}</td>
                    <td className="BasicInfo__field">民族：</td>
                    <td className="BasicInfo__data">{props.ethnicity}</td>
                </tr>
                <tr className="BasicInfo__row--light">
                    <td className="BasicInfo__field">入所时间：</td>
                    <td className="BasicInfo__data">{props.workncsetime}</td>
                    <td className="BasicInfo__field">参加工作时间：</td>
                    <td className="BasicInfo__data">{props.worktime}</td>
                </tr>
                <tr className="BasicInfo__row--dark">
                    <td className="BasicInfo__field">学历：</td>
                    <td className="BasicInfo__data">{props.education}</td>
                    <td className="BasicInfo__field">学位：</td>
                    <td className="BasicInfo__data">{props.degree}</td>
                </tr>
                <tr className="BasicInfo__row--light">
                    <td className="BasicInfo__field">毕业院校：</td>
                    <td className="BasicInfo__data">{props.university}</td>

                </tr>
            </table>
        </div>
    );
};
export default BasicInfoContainer;