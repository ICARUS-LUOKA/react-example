import React,{Component} from 'react'
import  './../assets/css/error.css'
class Error extends Component{
    render(){
        return (
            <div className="w3layouts-bg">
            <div className="agileits-content">
                <h2><span>4</span><span>0</span><span>4</span></h2>
            </div>
            <div className="w3layouts-right">
                <div className="w3ls-text">
                    <h3>我们很抱歉！</h3>
                    <h4 className="w3-agileits2">您请求的页面无法找到。</h4>
                    <p>请 <a href="#">返回首页</a> </p>
                </div>
                    
            </div>
            <div className="clearfix"></div>
        </div>
        )
    }
}

export default Error;