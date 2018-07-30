import React,{Component} from 'react'
import "./../assets/css/top.css"
import {connect} from 'react-redux'
class Top extends Component{
  
    render(){
        let {num} = this.props
        return (
            <header className={`mui-bar mui-bar-nav aui-header b-line`}>
                <a className={` mui-icon ${this.props.topLeft} mui-pull-left `}href="javascript:;" onClick={()=>{
                    switch (this.props.topLeft) {
                        case "mui-icon-search":
                        this.props.history.push('/error')
                            break;
                        case 'mui-icon-arrowleft':
                            this.props.history.push('/index')
                            break;
                        default:
                            break;
                    }
                }}></a>
                <h1 className="mui-title">{this.props.topTitle}</h1>
                <a className={ `mui-icon ${this.props.topRight} mui-pull-right` }href="javascript:;" onClick={()=>{
                     switch (this.props.topRight) {
                        case "mui-icon-extra mui-icon-extra-cart":
                            this.props.history.push('/buycar')
                        default:
                            break;
                } 
                }}>{num == 0 || this.props.topRight!="mui-icon-extra mui-icon-extra-cart"?null:<i className="num1">{num}</i>}</a>
            </header>
        )
    }
}

const mapStateToProps = state=>{
	return {
		num:state.goodslist.length
	}
}
const mapDispatchToProps=dispatch=>{
	return {}
}

  export default connect(mapStateToProps,mapDispatchToProps)(Top)
  
