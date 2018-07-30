import React,{Component} from 'react'
import "./../../assets/css/nav.css"
import {NavLink} from 'react-router-dom'
class Nav extends Component{
    render(){
        return (
            <div className="aui-nav">
		<ul className="mui-table-view mui-grid-view mui-grid-9">
			<li className="mui-table-view-cell mui-media mui-col-sm-3 ">
				<NavLink to="/hotlist">
					<span className="aui-cell-img"><img src="/assets/images/icon/icon-1.png" alt=""/></span>
					<div className="mui-media-body">热销单品</div>
				</NavLink>
			</li>
			<li className="mui-table-view-cell mui-media mui-col-sm-3 ">
				<NavLink to="/newlist">
					<span className="aui-cell-img"><img src="/assets/images/icon/icon-2.png" alt=""/></span>
					<div className="mui-media-body">今日上新</div>
				</NavLink>
			</li>
			<li className="mui-table-view-cell mui-media mui-col-sm-3 ">
				<NavLink to="/barginsuit">
					<span className="aui-cell-img"><img src="/assets/images/icon/icon-3.png" alt=""/></span>
					<div className="mui-media-body">优惠套装</div>
				</NavLink>
			</li>
			<li className="mui-table-view-cell mui-media mui-col-sm-3 ">
				<NavLink to="/error">
					<span className="aui-cell-img"><img src="/assets/images/icon/icon-4.png" alt=""/></span>
					<div className="mui-media-body">秒杀专场</div>
				</NavLink>
			</li>
		</ul>
        <div className="devider t-line"></div>
	</div>
        )
    }
}

export default Nav