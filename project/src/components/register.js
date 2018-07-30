
import React,{Component} from 'react'
import "./../assets/css/top.css"
import {connect} from 'react-redux'
import { asyncRegister } from '../store/actions';
class Register extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:"",
            confirmPassword:''
        }
        this.changeValue=this.changeValue.bind(this)
    }
    changeValue(eve){
        this.setState({
            [eve.target.name]:eve.target.value
        })
    }
    render(){
        let {register} = this.props
        let username = this.state.username
        let password = this.state.password
        let confirmPassword = this.state.confirmPassword
        let history = this.props.history
        return (
            <div className="mui-content">
            <div className="devider b-line"></div>
            <form className="mui-input-group">
                <div className="mui-input-row b-line">
                    <label>用户名：</label>
                    <input type="text" placeholder="请输入您的用户名" value={this.state.username} name='username' onChange={this.changeValue}/>
                </div>
                <div className="mui-input-row b-line">
                    <label>密码：</label>
                    <input type="password" className="mui-input-clear" placeholder="请输入您的密码" data-input-clear="5" value={this.state.password} name='password' onChange={this.changeValue} /><span className="mui-icon mui-icon-clear mui-hidden"></span>
                </div>
                <div className="mui-input-row b-line">
                    <label>确认密码：</label>
                    <input type="password" placeholder="请确认您的密码" value={this.state.confirmPassword} name='confirmPassword' onChange={this.changeValue}/>
                </div>
        
                <div className="mui-button-row" style={{paddingTop:"20px",paddingBottom:'10px', height:"auto"}}>
                    <a type="button" className="mui-btn mui-btn-primary" href="javascript:;" style={{width:"90%", padding:"10px 0"}} onClick={register.bind(null,username,password,confirmPassword,history)}>立即注册</a>
        
                </div>
                <div style={{paddingBottom:"10px", textAlign:"right", paddingRight:"15px"}}>
                    <a href="javascript" >已有账号 登录</a>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps=state=>{
    return {

    }
}

const mapDispatchToProps=dispatch=>{
    return {
        register:(username,password,confirmPassword,history)=>{
            if (password === confirmPassword) {
                asyncRegister(username,password,history)
            }else{
                alert("密码不符")
            }
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Register)

