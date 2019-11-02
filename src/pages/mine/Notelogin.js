import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Api from '../../Api/index'
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
    message.error('登录失败');
};


export default class Notelogin extends Component {

    state = {
        phone: '',
        code: '',
        codeAbled: true,
        loginAbled: true
    }

    // 存储手机号
    changePhone = async (e) => {
        await this.setState({
            phone: e.target.value.trim()
        })
        if(this.state.phone.length === 11){
            this.refs.codebtn.classList.add('btnactive')
            this.setState({
                codeAbled: false
            })
        }else{
            this.refs.codebtn.classList.remove('btnactive')
            this.refs.loginBtn.classList.remove('show')
            this.setState({
                codeAbled: true,
                loginAbled: true
            })
        }
    }
    // 输入验证码
    changeCode = async (e) => {
        if(e.target.value.length === 6 && this.state.phone.length === 11){
            await this.setState({
                loginAbled: false
            })
            this.refs.loginBtn.classList.add('show')            
        }else{
            await this.setState({
                loginAbled: true 
            })
            this.refs.loginBtn.classList.remove('show') 
        }
    }

    // 获取、存储验证码
    handleCode = async () => {
        console.log(1)
        let phone = this.state.phone
        let {data} = await Api.getCode(phone);
        this.setState({
            code: data
        })
        console.log(this.state.code)
    }

    // 登录验证
    handleLogin = async() => {
        let phone = this.state.phone.trim()
        let codeState = this.state.code
        let codeInp = this.refs.codeInp.value.trim()

        if(phone.length === 11 && codeInp == codeState){
            localStorage.setItem('phone', phone)
            // console.log(this.props)
            success()
        }else{
            error()
        }
    }
    render(){        
        return (
            <>
                <div className="control">
                    <div className="control-item" style={{ borderBottom: '1px solid #ddd' }}>
                        <label>手机号</label>
                        <input className="inp" type="text" placeholder="请输入手机号" onChange={this.changePhone} maxLength="11" />
                    </div>
                    <div className="control-item">
                        <label>验证码</label>
                        <input ref="codeInp" className="inp" onChange={this.changeCode} type="text" placeholder="请输入验证码" maxLength="6" />
                        <input ref="codebtn" onClick={this.handleCode} className="codebtn" type="button" value="获取验证码" disabled={this.state.codeAbled} />
                    </div>
                </div>
                <div className="login-btn"><a ref="loginBtn" className="login" onClick={this.handleLogin} disabled={this.state.loginAbled}>登录</a></div>
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