import React, { Component } from 'react';
import Top from './components/top'
import Footer from './components/footer'
import Index from './components/index/index'
import {Route,Switch,Redirect} from 'react-router-dom'
import Catagery from './components/catagery';
import Buycar from './components/buycar/buycar';
import User from './components/user/user';
import Error from './components/error'
import Newlist from './components/newlist/newlist';
import Barginsuit from './components/barginsuit/barginsuit';
import Detail from './components/detail'
import Hotlist from './components/hotlist'
import Login from './components/login'
import Reigister from './components/register'
import Authuser from './routes/authuser'

import {connect} from 'react-redux'
class App extends Component {
  render() {
    let path = this.props.location.pathname;
    let {view_topContent,userName,view_footer,footerShow} =this.props 
    if (/index/.test(path)) {
      setTimeout(() => {
        view_topContent(['海淘购',"mui-icon-search",'mui-icon-chatbubble'])
        view_footer(true)
      },0);
    }
    if (/user/.test(path) && userName) {
      setTimeout(() => {
          view_topContent(['用户中心'])
          view_footer(true)
      }, 0);
    }
    if (/login/.test(path)) {
      setTimeout(() => {
        view_topContent(['登录','mui-icon-arrowleft'])
        view_footer(true)
      }, 0);
    }
    if (/register/.test(path)) {
      setTimeout(() => {
        view_topContent(['注册','mui-icon-arrowleft'])
        view_footer(true)
      }, 0);
    }
    if (/buycar/.test(path)) {
      setTimeout(() => {
        view_topContent(['购物车','mui-icon-arrowleft',"mui-icon-trash"])
        view_footer(false)
      }, 0);
    }
    if (/newlist/.test(path)) {
      setTimeout(() => {
        view_topContent(['今日上新'])
        view_footer(true)
      }, 0);
    }
    if (/hotlist/.test(path)) {
      setTimeout(() => {
        view_topContent(['热销单品'])
        view_footer(true)
      }, 0);
    }
    if (/barginsuit/.test(path)) {
      setTimeout(() => {
        view_topContent(['优惠套装'])
        view_footer(true)
      }, 0);
    }
    if (/catagery/.test(path)) {
      setTimeout(() => {
        view_topContent(['分类',"mui-icon-search",'mui-icon-chatbubble'])
        view_footer(true)
      }, 0);
    }
    if (/detail/.test(path)) {
      setTimeout(() => {
        view_topContent(['宝贝详情','mui-icon-arrowleft',"mui-icon-extra mui-icon-extra-cart"])
        view_footer(false)
      }, 0);
    }
    return (
      <React.Fragment>
       <Top {...this.props}/>
        <Switch>
            <Route path='/index' component={Index}/>
            <Route path='/catagery' component={Catagery}/>
            <Route path='/buycar' component={Buycar}/>
            <Authuser path='/user' component={User}/>
            <Route path='/hotlist' component={Hotlist}/>
            <Route path='/newlist' component={Newlist}/>
            <Route path='/barginsuit' component={Barginsuit}/>
            <Route path='/detail/:aid' component={Detail}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Reigister}/>
            <Redirect exact from ='/' to='/index'/>
            <Route component={Error} />
        </Switch>
        {footerShow?<Footer />:null}
      </React.Fragment>
    );
  }
}

const mapStateToProps=state=>{
  return {
  topTitle:state.topTitle,
  topLeft:state.topLeft,
  topRight:state.topRight,
  userName:state.userName,
  footerShow:state.footer_show
}
}

const mapDispatchToProps=dispatch=>{
  return {
    view_topContent:(payload)=>{
    dispatch(
      {type:'view_topContent',payload:payload})
    },
    view_footer:(payload)=>{
      dispatch(
        {type:'footer_show',payload:payload})
    }
}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)