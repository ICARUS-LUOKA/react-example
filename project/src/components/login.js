import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {asyncLogin} from './../store/actions'
class Login extends Component{
	constructor(){
		super()
		this.state={
			tips:null,
			username:'',
			password:''
		}
	}
	changeValue(eve){
            this.setState({
                [eve.target.name]:eve.target.value
            })
        }
    render(){
		let {login} = this.props
        return (
<div className="mui-content">
	<div className="devider b-line"></div>
	<form className="mui-input-group">
		<div className="mui-input-row b-line">
			<label>用户名：</label>
			<input type="text" placeholder="请输入您的用户名" name="username" value={this.state.username}  onChange={this.changeValue.bind(this,)} ref='username'/>
		</div>
		<div className="mui-input-row b-line">
			<label>密码：</label>
			<input type="password" className="mui-input-clear" placeholder="请输入您的密码"  name="password" value={this.state.password}  onChange={this.changeValue.bind(this)} ref='password'/><span className="mui-icon mui-icon-clear mui-hidden"></span>
		</div>
		<div className="mui-button-row" style={{paddingTop:"20px", paddingBottom:"10px", height:"auto"}}>
			<a type="button" className="mui-btn mui-btn-primary" href="javascript:;" style={{width:"90%", padding:"10px 0"}} onClick={
					login.bind(null,this.state.username,this.state.password,this.props.history)
				}>立即登录</a>
		</div>
		<div style={{paddingBottom:"10px", textAlign:"right",paddingRight:"15px"}}>
			<span style={{color:'red'}}>{this.state.tips}</span>
			<NavLink to="/register">注册账号</NavLink>
		</div>
	</form>

</div>
        )
    }
}

const mapStateToProps=state=>{
	
	return {
		username:state.username
	}
}
const mapDispatchToProps=dispatch=>({
		login:(username,password,history)=>{
			asyncLogin('http://localhost:3000/login',dispatch,username,password,history)
			
		}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)
