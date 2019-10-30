import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Notelogin() {

    return (
        <>
            <div className="control">
                <div className="control-item" style={{ borderBottom: '1px solid #ddd' }}>
                    <label>手机号</label>
                    <input className="inp" type="text" placeholder="请输入手机号" />
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
        </>
    )    
}