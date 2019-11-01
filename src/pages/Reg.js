import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Captcha from '../components/captcha';

import { Icon } from 'antd'
import './css/Mine.scss'

export default class Reg extends Component {

    state = {
        regAbled: true
    }

    // 封装函数，判断注册按钮的状态
    regBtnState = () => {
        let phoneLen = this.refs.phone.value.length
        let pwdLen = this.refs.pwd.value.length
        let codeLen = this.refs.code.value.length
        console.log(phoneLen, pwdLen, codeLen)

        if (phoneLen === 11 && pwdLen > 3 && codeLen === 4) {
            this.setState({
                regAbled: false
            })
            this.refs.regBtn.classList.add('show')
        } else {
            this.setState({
                regAbled: true
            })
            this.refs.regBtn.classList.remove('show')
        }
    }

    // 返回上一页
    goBack = () => {
        window.history.go(-1)
    }

    // 改变用户名
    changePhone = () => {
        this.regBtnState()
    }
    // 改变密码
    changePwd = () => {
        this.regBtnState()
    }
    // 改变验证码
    changeCode = () => {
        this.regBtnState()
    }

    // 注册
    handleReg = () => {
        // 获取用户名/密码/验证码
        let phone = this.refs.phone
        let code = this.refs.code
        let pwd = this.refs.pwd
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
                                <input ref="phone" onChange={this.changePhone} className="inp" type="text" placeholder="请输入手机号" maxLength="11" />
                            </div>

                            <div className="control-item" style={{ borderBottom: '1px solid #ddd' }}>
                                <label style={{letterSpacing: 15}}>密码</label>
                                <input ref="pwd" onChange={this.changePwd} className="inp" type="text" placeholder="请输入密码" />
                            </div>

                            <div className="control-item">
                                <label>图形码</label>
                                <input ref="code" onChange={this.changeCode} className="inp" type="text" placeholder="请输入图形码" maxLength="4" />
                                <Captcha length={4} onChange={function (code) { console.log(this) }} />
                            </div>
                        </div>
                        <div className="login-btn"><a onClick={this.handleReg} ref="regBtn" className="login" disabled={this.state.regAbled}>注册</a></div>
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