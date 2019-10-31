import React, { Component } from 'react'
import { withRouter, Route,Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

// 引入组件
import Lookuser from './pages/Lookuser.jsx'
import Adduser from './pages/Adduser.jsx'

// 按需加载antd
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 引入antd样式
import './App.scss'

@withRouter
export default class App extends Component{

    handleClick = (path) => {
        this.props.history.push(path)
    }

    state = {
        silderData: [
            {
                title: '用户管理',
                icon: 'user',
                list: [{
                    name: 'lookuser',
                    path: '/lookuser',
                    tit: '查看用户',
                    isShow: true
                },
                {
                    name: 'adduser',
                    path: '/adduser',
                    tit: '添加用户',
                    isShow: false
                }]
            }
        ]
    }

    render(){
        // 解构数据
        let { silderData } = this.state

        return (
            <div>
                <Layout className="backsys">
                    <Header className="header">
                        <div className="logo" style={{ float: 'left', width: 200, height: '100%', background: 'rgba(255, 255, 255, 0.2)'}}>
                            <h2 style={{ color: '#fff', textAlign: 'center' }}>后台管理系统</h2>
                        </div>
                        <div className="current-user">
                            欢迎您：<span>只为有你依靠</span>
                        </div>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                        {
                            silderData.map((item, index) => {
                                return (
                                    <Menu
                                        key={index}
                                        theme="dark"
                                        mode="inline"
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        style={{ height: '100%', borderRight: 0 }}
                                    >
                                        <SubMenu
                                            key={index}
                                            title={
                                                <span>
                                                    <Icon type={item.icon} />
                                                    {item.title}
                                        </span>
                                            }
                                        >
                                            {
                                                item.list.map( (sub, idx) => {
                                                    return <Menu.Item 
                                                                key={idx}
                                                                onClick={this.handleClick.bind(this,sub.path)}
                                                            >
                                                                    {sub.tit}
                                                                </Menu.Item>
                                                })
                                            }
                                        </SubMenu>

                                    </Menu>
                                )
                            })
                        }
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Switch>
                                    <Route path="/lookuser" component={Lookuser} />
                                    <Route path="/adduser" component={Adduser} />
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>,
            </div>
        )
    }
}