import React,{Component} from 'react'
import './../../assets/css/user.css'

import {connect} from 'react-redux'
import Toggle from '../toggle';
class User extends Component{
    render(){
        let {clear_login,username} = this.props
        return (
            <div className="mui-scroll-wrapper ">
                <div className="mui-scroll " style={{top:'44px'}}>
                    <ul className="mui-table-view mui-table-view-chevron">
                        <li className="mui-table-view-cell mui-media b-line">
                            <a className="mui-navigate-right t-line" href="#account">
                                <div className="mui-media-body">{this.props.username}
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="mui-table-view mui-table-view-chevron t-line">
                        <li className="mui-table-view-cell b-line">
                            <a href="#account1" className="mui-navigate-right">我的订单</a>
                        </li>
                    </ul>
                    <ul className="mui-table-view mui-table-view-chevron t-line">
                        <li className="mui-table-view-cell b-line">
                            <a href="#privacy" className="mui-navigate-right">收货地址</a>
                        </li>
                        <li className="mui-table-view-cell b-line">
                            <a href="#notifications" className="mui-navigate-right">消息通知</a>
                        </li>
                        <li className="mui-table-view-cell b-line">
                            <a href="#general" className="mui-navigate-right">我的收藏</a>
                        </li>
                    </ul>
                    <Toggle />
                    <ul className="mui-table-view mui-table-view-chevron b-line">
                        <li className="mui-table-view-cell t-line">
                            <a href="#about" className="mui-navigate-right">关于海淘购 <i className="mui-pull-right update">2.0</i></a>
                        </li>
                    </ul>
                    <ul className="mui-table-view b-line">
                        <li className=" t-line" style={{textAlign: "center", padding:"14px 0"}}>
                            <a href="javascript:;" style={{color:"#ff3366", display:"inline-block", width:"100%"}} onClick={clear_login}>退出登录</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state=>{
    return {}
}
const mapDispatchToProps = dispatch =>{
    return {
        clear_login:()=>{
        dispatch({type:'clear_Login',payload:null})     
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)