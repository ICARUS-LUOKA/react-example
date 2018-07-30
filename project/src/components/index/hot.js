import React,{Component} from 'react'
import './../../assets/css/hot.css'
import {NavLink} from 'react-router-dom'

class Hot extends Component{
    render(){
        return (
        <div>
            <div className="aui-hot t-line">
                <h2>牛仔蓝不单调不低调</h2>
                <div>
                    <NavLink to='/detail/1'><img src="/assets/images/hot.jpg" alt="" /></NavLink>
                </div>
            </div>
            <div className="devider t-line"></div>
        </div>
        )
    }
}

export default Hot