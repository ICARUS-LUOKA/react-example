import React,{Component} from 'react'
import './../..//assets/css/special.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { asyncAction } from '../../store/actions';
class Special extends Component{
    constructor(props){
        super()
        props.update_special()
    }
 
    render(){
        return (
            <div className="aui-list t-line">
            <h2>精品优选</h2>
            <ul className="mui-table-view mui-grid-view">
                {
                   this.props.special.map((item,index)=>{
                        return (<li className="mui-table-view-cell mui-media mui-col-xs-6" key={index}>
                    <NavLink to={{pathname:"/detail/"+item.id}} >
                        <img className="mui-media-object" src={item.img} />
                        <div className="mui-media-body">{item.title}</div>
                        <div className="goods_info"> <span className="price_info">￥{item.price}</span> <span className="fav_num">{item.purchaseNumber}</span> </div>
                    </NavLink>
                </li>   )
                    })
                } }
            </ul>
            <div style={{height:'50px'}}></div>
        </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        special:state.special
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        update_special:()=>{asyncAction('./assets/data/special.json',dispatch,"update_special")}
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Special)