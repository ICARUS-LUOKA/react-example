import React,{Component} from 'react'
import './../assets/css/hotlist.css';
import './../assets/font/iconfont.css'
class Hotlist extends Component{
    render(){
        return (
            <div className="mui-content">
            <div className="aui-hots-img b-line"><img src="./assets/images/hots.jpg" alt="" /></div>
            <div className="devider b-line"></div>
            <div className="aui-img-clear" >
                <ul className="mui-table-view mui-table-view" id="OA_task_1">
                    <li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
                        <div className="mui-slider-handle mui-table">
                            <a href="javascript:;">
                                <img className="mui-media-object mui-pull-left" src="./assets/images/ad1.jpg" />
                                <div className="mui-media-body">
                                    ¥112.50
                                    <p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                    <p className="aui-sml">最热</p>
                                </div>
                            </a>
                            <span className='iconfont buy'>&#xe655; &nbsp;加入购物车</span>
                        </div>
                    </li>
                    <li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
                        <div className="mui-slider-handle mui-table">
                            <a href="javascript:;">
                                <img className="mui-media-object mui-pull-left" src="./assets/images/ad2.jpg" />
                                <div className="mui-media-body">
                                    ¥112.50
                                    <p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                    <p className="aui-sml">最热</p>
                                </div>
                            </a>
                            <span className='iconfont buy'>&#xe655; &nbsp;加入购物车</span>

                        </div>
                    </li>
                    <li className="mui-table-view-cell  mui-table-view-cell mui-media b-line">
                        <div className="mui-slider-handle mui-table">
                            <a href="javascript:;">
                                <img className="mui-media-object mui-pull-left" src="./assets/images/ad3.jpg" />
                                <div className="mui-media-body">
                                    ¥112.50
                                    <p className="mui-ellipsis">春季新款韩版小清新百搭短款重工花朵刺绣修身显瘦夹克牛仔外套</p>
                                    <p className="aui-sml">最热</p>
                                </div>
                            </a>
                            <span className='iconfont buy'>&#xe655; &nbsp;加入购物车</span>
                        </div>
                    </li>
                </ul>
            </div>
        
            <div className="devider "></div>
            <div className="aui-list t-line" style={{background:'#fff'}}>
                <h2>猜你喜欢</h2>
                <ul className="mui-table-view mui-grid-view">
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad1.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad2.jpg"/>
                            <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad3.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad4.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad1.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad2.jpg"/>
                            <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad3.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad4.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad1.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad2.jpg"/>
                            <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad3.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad4.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad1.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥58.00</span> <span className="fav_num">2889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad2.jpg"/>
                            <div className="mui-media-body">季新款原宿bf风宽松百搭学生条纹圆领短</div>
                            <div className="goods_info"> <span className="price_info">￥88.00</span> <span className="fav_num">7889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad3.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥158.00</span> <span className="fav_num">26889人购买</span> </div>
                        </a>
                    </li>
                    <li className="mui-table-view-cell mui-media mui-col-xs-6">
                        <a href="#">
                            <img className="mui-media-object" src="./assets/images/ad4.jpg"/>
                            <div className="mui-media-body">2017春季新款韩版后背蝴蝶结系带短袖t恤女装半袖打底衫上衣</div>
                            <div className="goods_info"> <span className="price_info">￥348.00</span> <span className="fav_num">889人购买</span> </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default Hotlist