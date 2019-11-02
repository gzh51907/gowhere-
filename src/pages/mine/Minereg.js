/* import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Api from '../../Api/index.js'
import { message } from 'antd';

// 弹窗函数
const success = () => {
    message.success({
        content: '登录成功',
    });
    setTimeout(() => {
        window.history.go(-1)
    }, 1000)
};
message.config({
    duration: 0.6,
    top: 350
});
const error = () => {
    message.error('用户名或密码错误！');
};

export default class Minereg extends Component {

    state = {
        phone: '',
        pwd: '',
        phoneAbled: true,
        pwdAbled: true,
        loginAbled: true
    }
    
    
    render(){
        return (
            <>
                <div className="control">
                    <div className="control-item" style={{ borderBottom: '1px solid #ddd' }}>
                        <label>手机号</label>
                        <input className="inp" type="text" placeholder="请输入手机号" />
                    </div>
                    <div className="control-item">
                        <label>图形码</label>
                        <input className="inp" type="text" placeholder="请输入图形码" />
                        <input className="codebtn" type="button" value="1234" />
                    </div>
                    <div className="control-item">
                        <label>验证码</label>
                        <input className="inp" type="text" placeholder="请输入验证码" />
                        <input className="codebtn" type="button" value="获取验证码" />
                    </div>
                </div>
                <div className="login-btn"><a onClick={this.handleLogin} ref="loginBtn" className="login" disabled={this.state.loginAbled}>注册</a></div>
                <div className="agreement">
                    登录即同意去哪儿 &nbsp;
                    <Link to="">用户服务协议</Link>
                    &nbsp;和&nbsp;
                    <Link to="">隐私政策</Link>
                </div>
            </>
        )
    }
} */