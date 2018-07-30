import React,{Component} from 'react'
import './../assets/css/footer.css'
import './../assets/font/iconfont.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
class Footer extends Component{
    render(){
		let {num} = this.props
		console.log(num)
        return (
            <nav className="mui-bar mui-bar-tab">
				<div className="t-line">
					<NavLink to='/index' className="aui-tab-item " activeClassName='mui-active'>
						<span className="mui-icon mui-icon-home"></span>
						<span className="mui-tab-label">首页</span>
					</NavLink>
					<NavLink to='/catagery' className="aui-tab-item" activeClassName='mui-active'>
						<span className="mui-icon mui-icon-extra mui-icon-extra-class"></span>
						<span className="mui-tab-label">分类</span>
					</NavLink>
					<NavLink to='/buycar' className="aui-tab-item" activeClassName='mui-active' >
						<span className="mui-icon mui-icon-extra mui-icon-extra-cart" style={{position:"relative"}}>{num==0?null:<i className="num">{num}</i>}</span>
						<span className="mui-tab-label" >购物车</span>
					</NavLink>
					<NavLink to='/user' className="aui-tab-item" activeClassName='mui-active'>
						<span className="mui-icon mui-icon-extra iconfont">&#xe62b;</span>
						<span className="mui-tab-label">我的</span>
					</NavLink>
				</div>			
			</nav>
        )
    }
}

const mapStateToProps = state=>{
	return {
		num:state.goodslist.length
	}
}
const mapDispatchToProps=dispatch=>{
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer);