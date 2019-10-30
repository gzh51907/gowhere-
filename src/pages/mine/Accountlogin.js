import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Accountlogin() {

    return (
        <>
            <div className="control">
                <div className="control-item" style={{ borderBottom: '1px solid #ddd' }}>
                    <label>账号</label>
                    <input className="inp" type="text" placeholder="手机号/邮箱/用户名" />
                </div>
                <div className="control-item">
                    <label>密码</label>
                    <input className="inp" type="text" placeholder="请输密码" />
                </div>
            </div>
            <div className="login-btn"><a>登录</a></div>
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