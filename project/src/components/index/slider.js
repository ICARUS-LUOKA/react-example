import React,{Component} from 'react'
import './../../assets/css/slider.css'
import {NavLink} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class Slider extends Component{
    render(){
        return (
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide "> 
                <div className="mui-slider-item">
                     <ul className="mui-table-view mui-grid-view">
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/3'><img className="mui-media-object" src="./assets/images/bd1.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/4'><img className="mui-media-object" src="./assets/images/bd2.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                     </ul>
                 </div>
                </div>
                <div class="swiper-slide"> 
                <div className="mui-slider-item">
                     <ul className="mui-table-view mui-grid-view">
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/3'><img className="mui-media-object" src="./assets/images/bd1.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/4'><img className="mui-media-object" src="./assets/images/bd2.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                     </ul>
                 </div>
                </div>
                <div class="swiper-slide"> 
                <div className="mui-slider-item">
                     <ul className="mui-table-view mui-grid-view">
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/3'><img className="mui-media-object" src="./assets/images/bd1.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/4'><img className="mui-media-object" src="./assets/images/bd2.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                     </ul>
                 </div>
                </div>
                <div class="swiper-slide"> 
                <div className="mui-slider-item">
                     <ul className="mui-table-view mui-grid-view">
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/3'><img className="mui-media-object" src="./assets/images/bd1.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                         <li className="mui-table-view-cell mui-media mui-col-xs-6">
                             <NavLink to='/detail/4'><img className="mui-media-object" src="./assets/images/bd2.jpg"/>
                                 <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                                 <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                             </NavLink>
                         </li>
                     </ul>
                 </div>
                </div>
            
            </div>
            <div class="swiper-pagination mui-slider-indicator" style={{position:'static'}}></div>
             <div className="devider t-line"></div>
        </div>
        )
    }
}

export default Slider