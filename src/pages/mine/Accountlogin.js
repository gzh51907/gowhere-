import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../Api/index.js'
import { message } from 'antd';

// 弹窗函数
const success = () => {
    message.success({
        content: '登录成功',
    });
    setTimeout(() => {
        window.location.href = 'http://localhost:8080/#/vacation';
    }, 1000)
};
message.config({
    duration: 0.6,
    top: 350
});
const error = () => {
    message.error('用户名或密码错误！');
};

export default class Accountlogin extends Component {

    state = {
        phone: '',
        pwd: '',
        phoneAbled: true,
        pwdAbled: true,
        loginAbled: true
    }

    // 封装函数，判断登录按钮的状态
    loginBtnState = () => {
        let phoneAbled = this.state.phoneAbled
        let pwdAbled = this.state.pwdAbled
        if (!phoneAbled && !pwdAbled){
            this.setState({
                loginAbled: false
            })
            this.refs.loginBtn.classList.add('show')
        }else{
            this.setState({
                loginAbled: true
            })
            this.refs.loginBtn.classList.remove('show')
        }
    }

    // 存储手机号
    changePhone = async (e) => {
        if (e.target.value.trim()){
            await this.setState({
                phone: e.target.value.trim(),
                phoneAbled: false,
            });
            this.loginBtnState()
        }
    }

    // 存储密码
    changePwd = async (e) => {
        if (e.target.value.trim()) {
            await this.setState({
                pwd: e.target.value.trim(),
                pwdAbled: false,
            });
            this.loginBtnState()
        }
    }

    // 登录验证
    handleLogin =async () => {
        let username = this.state.phone
        let password = this.state.pwd
        // 发送请求
        let {data:{msg} }= await Api.Login('', {
            username,
            password
        })
        if (msg == 'success') {
            localStorage.setItem('phone', username)
            success()
        } else if(msg == 'fail'){
            error();
        }
    }

    render(){
        return (
            <>
                <div className="control">
                    <div className="control-item" style={{ borderBottom: '1px solid #ddd' }}>
                        <label>账号</label>
                        <input onChange={this.changePhone} className="inp" type="text" placeholder="请输入手机号" maxLength="11" />
                    </div>
                    <div className="control-item">
                        <label>密码</label>
                        <input onChange={this.changePwd} className="inp" type="password" placeholder="请输入密码"maxLength="20"/>
                    </div>
                </div>
                <div className="login-btn"><a onClick={this.handleLogin} ref="loginBtn" className="login" disabled={this.state.loginAbled}>登录</a></div>
                <Link to="" className="findpwd">找回密码</Link>
                <div className="agreement">
                    登录即同意去哪儿 &nbsp;
                <Link to="">用户服务协议</Link>
                    &nbsp;和&nbsp;
                <Link to="">隐私政策</Link>
                </div>
            </>
        )
    }
}