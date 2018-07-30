import React,{Component} from 'react'
import './../../assets/css/buycar.css'
import './../../assets/font/iconfont.css'
import {connect} from 'react-redux'
class Buycar extends Component{
    render(){
        let {goodslist,addToCar,reduceItem,deleteItem,sumPrice} = this.props
        return (
            <React.Fragment>
        <div className="mui-content" style={{background:"#fff"}} >
            <div className="aui-img-clear" style={{paddingTop:"15px"}}>
                {goodslist.length!=0 && <div className="title mui-input-row mui-checkbox mui-left b-line"><input name="checkbox" value="Item 1" type="checkbox" /><em className="ss-aui" >海淘购</em></div>}
                <ul className="mui-table-view mui-table-view" id="OA_task_1">
                {
                   goodslist.length==0?<div>您的购物车是空的,快去购物吧</div>:goodslist.map((item,index)=>{
                        return (
                            <li className="mui-table-view-cell  mui-table-view-cell mui-media b-line" key={item.id}>
                            <div className=" mui-input-row mui-checkbox mui-left"><input name="checkbox" value="Item 1" type="checkbox" /></div>
                            <div className="mui-slider-handle mui-table">
                                <a href="javascript:;">
                                    <img className="mui-media-object mui-pull-left" src={item.img} />
                                    <div className="mui-media-body">
                                        ¥{item.price*parseInt(item.numeber)}
                                        <p className="mui-ellipsis">{item.title}</p>
                                        <p>颜色：黑色  尺码：35</p>
                                    </div>
                                </a>
                            <span className="xuan">
                                <span id="min" className="iconfont" onClick={reduceItem.bind(null,item)}>&#xe61f;</span>
                                <span id="text_box" name="" className="count">{item.numeber}</span>
                                <span id="add" className="iconfont " onClick={addToCar.bind(null,item)}>&#xe6b7;</span> 
                                <span className="delete iconfont" onClick={deleteItem.bind(null,item)}>&#xe61d;</span>
                            </span>
                            </div>
                        </li>
                        )
                   })
                }
                </ul>
            </div>
        </div>
        <div style={{height:"50px"}}></div>
        {goodslist.length==0? "" : <nav className="mui-bar mui-bar-tab">
            <div className="t-line aui-on-cell">
                <div className="title mui-input-row mui-checkbox mui-left" style={{position:"absolute", top:"9px"}}><input name="checkbox" value="Item 1" type="checkbox" /><em className="ss-aui" >全选</em></div>
        
                <div className="aui-onc">
                    <p style={{display:"inline-block"}}><span style={{color:"#fb4545"}}>合计：¥{sumPrice} </span>不含运费</p>
                    <a href="#" className="aui-got">去结算</a>
                </div>
            </div>
        </nav>}
    </React.Fragment>
        )
    }
}

const mapStateToProps=state=>{
    return {
        goodslist:state.goodslist,
        sumPrice:state.sumprice
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        addToCar:(item)=>{
            dispatch({
                type:'addToCar',
                payload:item
            })
            dispatch({
                type:'sumPrice',
                payload:null
            })
        },
        reduceItem:(item)=>{
            dispatch({
                type:'reduceItem',
                payload:item
            })
            dispatch({
                type:'sumPrice',
                payload:null
            })
        },
        deleteItem:(item)=>{
            dispatch({
                type:'deleteItem',
                payload:item
            })
            dispatch({
                type:'sumPrice',
                payload:null
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buycar)

