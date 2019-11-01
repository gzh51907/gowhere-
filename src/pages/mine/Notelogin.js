import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Api from '../../Api/index'
const querystring =require ('querystring');
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
            // console.log('手机号合法')
            this.refs.codebtn.classList.add('active')
            this.setState({
                codeAbled: false
            })
        }else{
            this.refs.codebtn.classList.remove('active')
            this.setState({
                codeAbled: true
            })
        }
    }
    // 存储验证码
    changeCode = async (e) => {
        await this.setState({
            code: e.target.value.trim()
        })

        if (this.state.code.length === 6){
            if(this.state.phone.length === 11){
                this.setState({
                    loginAbled: false
                })
                this.refs.loginBtn.classList.add('show')
            }
        }
    }

    // 获取验证码
    handleCode = async () => {
    //     // console.log(request)
    //     // 发送请求
        let phone = this.state.phone
        console.log('11',phone)
        let datalist = await Api.get(phone);
   
    }

    // 判断验证码是否输入正确
    handleLogin = () => {
        let phone = this.state.phone
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
                        <input className="inp" onChange={this.changeCode} type="text" placeholder="请输入验证码" maxLength="6" />
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