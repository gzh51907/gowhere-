import React, {Component} from 'react'

// 引入框架
import { Icon } from 'antd';

// 引入样式
import './css/Quit.scss'

// 导出组件
export default class Quit extends Component{
    state = {

    }

    // 点击切换到首页
    handleHome = () => {
        window.location.href = "http://localhost:8080/#/vacation"
    }

    // 点击退出，清除缓存
    handleQuit = () => {
        localStorage.removeItem('phone')
        window.location.href = "http://localhost:8080/#/mine/notelogin"
    }

    // 页面渲染前判断
    componentWillMount(){

    }

    render(){
        return (
            <div className="quit">
                <div className="header">
                    <div className="t-header">
                        <Icon onClick={this.handleHome} className="arrowleft" type="left" />
                    </div>
                    <div className="b-header">
                        <img src="https://s.qunarzz.com/usercenter_mobile/images/my/mybgnew-20161111.jpg" />
                    </div>
                    <div className="mineinfo">
                        <a><img src="https://qcommons.qunar.com/headshot/headshotsById/320032822.png?l&ssl=true&_=1572677160319" /></a>
                        <div className="username">{localStorage.getItem('phone')}</div>
                    </div>
                </div>
                <div className="content">
                    <ul className="con-list">
                        <li>
                            <Icon className="item-icon" type="ordered-list" style={{ backgroundColor: '#4fc3f7' }} />
                            <div className="item-con">
                                <span>我的订单</span>
                                <Icon className="right-arrow" type="right" />
                            </div>
                        </li>
                        <li>
                            <Icon className="item-icon" type="down-square" />
                            <div className="item-con">
                                <span>我的退款</span>
                                <Icon className="right-arrow" type="right" />
                            </div>
                        </li>
                        <li>
                            <Icon className="item-icon" type="cloud" />
                            <div className="item-con">
                                <span>我的发票</span>
                                <Icon className="right-arrow" type="right" />
                            </div>
                        </li>
                        <li>
                            <Icon className="item-icon" type="file-image" />
                            <div className="item-con">
                                <span>我的攻略</span>
                                <Icon className="right-arrow" type="right" />
                            </div>
                        </li>
                    </ul>
                    <div className="quit-wrap">
                        <input className="quit-btn" type="button" value="退出" onClick={this.handleQuit} />
                    </div>
                </div>
            </div>
        )
    }
}