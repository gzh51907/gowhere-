import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Captcha from '../components/captcha';

import { Icon } from 'antd'
import './css/Mine.scss'

export default class Reg extends Component {

    goBack = () => {
        window.history.go(-1)
    }

    render(){
        return (
            <div>
                <div id="header">
                    <Icon className="arrowleft" type="left" onClick={this.goBack} style={{zIndex: 1000}} />
                    <h2 style={{ position: "absolute", left: 0, top: 0, width: '100%' }}>注册</h2>
                </div>
                <div id="content">
                    <div className="form">
                        <div className="control">
                            <div className="control-item" style={{ borderBottom: '1px solid #ddd' }}>
                                <label>手机号</label>
                                <input className="inp" type="text" placeholder="请输入手机号" />
                            </div>
                            <div className="control-item">
                                <label>图形码</label>
                                <input className="inp" type="text" placeholder="请输入图形码" />
                                <Captcha length={4} onChange={function (code) { console.log(code) }} />
                            </div>
                            <div className="control-item">
                                <label>验证码</label>
                                <input className="inp" type="text" placeholder="请输入验证码" />
                                <input className="codebtn" type="button" value="获取验证码" />
                            </div>
                        </div>
                        <div className="login-btn"><a>登录</a></div>
                        <div className="agreement">
                            登录即同意去哪儿 &nbsp;
                    <Link to="">用户服务协议</Link>
                            &nbsp;和&nbsp;
                    <Link to="">隐私政策</Link>
                        </div>
                    </div>
                </div>
                <div id="footer">
                    <span>Qunar 京ICP备05021087</span>
                </div>
            </div>
        )
    } 
}