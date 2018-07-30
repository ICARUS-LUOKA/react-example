import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class Banner extends Component{
    constructor(){
        super()   
    }
    componentDidMount(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
    }
    render(){
        return(
        <div className="wxchat-banner" style={{paddingTop:'44px'}}>
        <section className="new_custom swiper-container index_tab_con" ref={self => this.swiperID = self}>
            <ul className="swiper-wrapper">
            <li className="mui-slider-item  mui-slider-item-duplicate swiper-slide">
                       <NavLink to="/detail">
                           <img src="/assets/images/banner.jpg" />
                       </NavLink>
                   </li>
                   <li className="mui-slider-item  mui-slider-item-duplicate swiper-slide">
                       <NavLink to="/detail">
                             <img src="/assets/images/banner.jpg" />
                         </NavLink>
                     </li>
                     <li className="mui-slider-item  mui-slider-item-duplicate swiper-slide">
                         <NavLink to="/detail">
                             <img src="/assets/images/banner1.jpg" />
                         </NavLink>
                     </li>
                     <li className="mui-slider-item  mui-slider-item-duplicate swiper-slide">
                         <NavLink to="/detail">
                             <img src="/assets/images/banner.jpg" />
                         </NavLink>
                     </li>
                     <li className="mui-slider-item  mui-slider-item-duplicate swiper-slide">
                         <NavLink to="/detail">
                             <img src="/assets/images/banner1.jpg" />
                         </NavLink>
                     </li>
            </ul>
            <div className="swiper-pagination banner-pagination" ref={self => this.paginateID = self}></div>
        </section>
    </div>
        )
    }
}

export default Banner