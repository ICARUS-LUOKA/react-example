import React, { Component } from 'react';
import '../assets/css/detail.css'
import '../assets/css/mui.min.css'
import '../assets/css/icons-extra.css'
import {connect} from 'react-redux'
class Detail extends Component {
	constructor(props){
		super()
		this.state={
			detail:{}
		}
		let id = props.match.params.aid;
		fetch(
			'/assets/data/special.json',
		).then(
			res=>{
			   return res.json()
			}
		).then(
			res=>{
				this.setState({
					detail:res[id-1]
				})
			}
		)
	}
  render() {
	let detail = this.state.detail
	let {addToCar} = this.props
    return (
		<React.Fragment>
<div className="mui-content" style={{background:"#fff"}}>
	<div id="slider" className="mui-slider" >
		<div className="mui-slider-group">
			<div className="mui-slider-item">
				<a href="#">
					<img src={detail.img}/>
				</a>
			</div>
			<div className="mui-slider-item">
				<a href="#">
					<img src={detail.img}/>
				</a>
			</div>
		</div>
		<div className="mui-slider-indicator">
			<div className="mui-indicator mui-active"></div>
			<div className="mui-indicator"></div>
		</div>
	</div>
	<div className="aui-title-h b-line">
		<h3>{detail.title}</h3>
		<em>¥{detail.price}</em>
		<div className="aui-title-sp "><span className="mui-icon-extra mui-icon-extra-heart">销量 {detail.purchaseNumber}</span>  <span className="mui-icon-extra mui-icon-extra-heart">收藏475人</span>  <span className="mui-icon-extra mui-icon-extra-heart">顺丰快递</span>  </div>
	</div>
	<div className="devider b-line"></div>
	<div className="">
		<div style={{padding:"0 10px", margintop:"10px"}}className="">
			<div id="segmentedControl" className="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
				<a className="mui-control-item mui-active" href="#item1">商品详情</a>
				<a className="mui-control-item" href="#item2">规格尺码</a>
				<a className="mui-control-item" href="#item3">商品评价</a>

			</div>
		</div>
		<div>
			<div id="item1" className="mui-control-content mui-active" style={{height:"1200px"}}>
				<div className="aui-p">
					<p>{detail.title}</p>
				</div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
				<div className="aui-kill aui-op"><img src={detail.img} alt=""/></div>
			</div>

			<div id="item2" className="mui-control-content">
				<ul className="mui-table-view ">
					<li className="mui-table-view-cell b-line">尺码: 均码</li>
					<li className="mui-table-view-cell b-line">腰围： 68 紧身</li>
					<li className="mui-table-view-cell b-line">裤长：37</li>
					<li className="mui-table-view-cell b-line">衣长：59</li>
					<li className="mui-table-view-cell b-line">胸围：109</li>
					<li className="mui-table-view-cell b-line">裤口：32</li>
					<li className="mui-table-view-cell b-line">袖长：38</li>
					<li className="mui-table-view-cell b-line">颜色：黑色/白色/黄色</li>
					<li className="mui-table-view-cell b-line">风格：基本款</li>
					<li className="mui-table-view-cell b-line">季节：春季</li>
					<li className="mui-table-view-cell b-line">领型：连衣</li>
				</ul>

			</div>
			<div id="item3" className="mui-control-content">
				评价
			</div>
		</div>
	</div>

	<div style={{height:"900px"}}></div>
</div>



<div style={{height:"50px"}}></div>
<nav className="mui-bar mui-bar-tab">
	<div className="t-line aui-on-cell">
		<div className="aui-ons">
			<a href="#"><span className="mui-icon-extra mui-icon-extra-addpeople"></span><i>客服</i></a>
			<a href="#"><span className="mui-icon-extra mui-icon-extra-university"></span><i>店铺</i></a>
			<a href="#"><span className="mui-icon-extra mui-icon-extra-heart-filled"></span><i>收藏</i></a>
		</div>
		<div className="aui-onc">
			<a href="javascript:;" style={{marginRight:'-4px'}} onClick={addToCar.bind(null,detail)}>加入购物车</a>
			<a href="javascript:;" className="aui-got">立即购买</a>
		</div>
	</div>
</nav>
</React.Fragment>
    );
  }
}

const mapStateToProps=state=>{
	return {}
}

const mapDispatchToProps=dispatch=>{
	return{
		addToCar:(detail)=>{
			dispatch({type:'addToCar',payload:detail})
			dispatch({
                type:'sumPrice',
                payload:null
            })
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);