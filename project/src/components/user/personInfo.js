import React,{Component} from 'react'
import './../../assets/css/userInfo.css'
class UserInfo extends Component{
    render(){
        return (
			<div>
			<div className="mui-navbar-inner mui-bar mui-bar-nav b-line">
		<button type="button" className="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
		</button>
		<h1 className="mui-center mui-title">个人中心</h1>
	</div>
	<div className="mui-pages" >
            <div className="mui-page-content">
		<div className="mui-scroll-wrapper">
			<div className="mui-scroll">
				<ul className="mui-table-view">
					<li className="mui-table-view-cell t-line ">
						<a id="head" className="mui-navigate-right">头像
							<span className="mui-pull-right head">
									<img className="head-img mui-action-preview" id="head-img1" src=""/>
								</span>
						</a>
					</li>
					<li className="mui-table-view-cell t-line">
						<a>姓名<span className="mui-pull-right">艾薇儿</span></a>
					</li>
					<div className="b-line"></div>
				</ul>
				<ul className="mui-table-view t-line">
					<li className="mui-table-view-cell b-line">
						<a>QQ号<span className="mui-pull-right">88888888</span></a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a>手机<span className="mui-pull-right">885444444</span></a>
					</li>
					<li className="mui-table-view-cell b-line">
						<a>邮箱地址<span className="mui-pull-right">haitao@me.com</span></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	</div>
	</div>
        )
    }
}

export default UserInfo