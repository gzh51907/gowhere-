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

<<<<<<< HEAD
export default class App extends Component {

    render() {
=======
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

>>>>>>> dev
        return (
            <div>
                <Layout className="backsys">
                    <Header className="header">
                        <div className="logo" style={{ float: 'left', width: 200, height: '100%', background: 'rgba(255, 255, 255, 0.2)' }}>
                            <h2 style={{ color: '#fff', textAlign: 'center' }}>后台管理系统</h2>
                        </div>
                        <div className="current-user">
                            欢迎您：<span>只为有你依靠</span>
                        </div>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
<<<<<<< HEAD
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            subnav 1
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop" />
                                            subnav 2
              </span>
                                    }
                                >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="notification" />
                                            subnav 3
              </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
=======
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
>>>>>>> dev
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