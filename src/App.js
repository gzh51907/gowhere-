import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom';
import { Menu, Icon } from 'antd';


import Vacation from './pages/Vacation/Vacation.js';
import Goods from './pages/Goods';
import Special from './pages/Special';
import Mine from './pages/Mine';
import Reg from './pages/Reg';
import SpecialList from './pages/SpecialList';
import Quit from './pages/Quit.js';


const mapStateToProps = (state) => {//这里的state就是store里的state
    return {
        userInf: state.userReducer.userInf
    }
}
@connect(mapStateToProps)
@withRouter
class App extends Component {
    state = {
        menu: [
            {
                name: 'vacation',
                path: '/vacation',
                text: '度假',
                icon: 'home'
            }, {
                name: 'goods',
                path: '/goods',
                text: '好货',
                icon: 'compass'
            }, {
                name: 'special',
                path: '/special',
                text: '特卖',
                icon: 'history'
            }, {
                name: 'mine',
                path: '/mine',
                text: '我的',
                icon: 'user'
            }
        ]
    }

    async componentDidMount (){
        let phone = localStorage.getItem('phone')
        let menu = this.state.menu
        if(phone){
            menu = menu.map(item => {
                if(item.name == 'mine'){
                    item['path'] = '/quit'
                }
                return item;
            })
            await this.setState({
                menu
            })
            // console.log(this.state.menu)
        }else{
            menu = menu.map(item => {
                if (item.name == 'mine') {
                    item['path'] = '/mine'
                }
                return item;
            })
            await this.setState({
                menu
            })
            // console.log(this.state.menu)
        }
    }

    render() {
        let { menu } = this.state;
        let { history } = this.props;
        console.log(menu)
        return (
            <div>
                <div style={{ marginBottom: 52 }}>
                    <Switch>
                        <Route path="/vacation" component={Vacation} />
                        <Route path="/goods" component={Goods} />
                        <Route path="/special" component={Special} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/quit" component={Quit} />
                        <Route path="/reg" component={Reg} />
                        <Route path="/specialList" component={SpecialList} />
                        <Redirect from="/" to="/vacation" exact />
                        <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                    </Switch>
                </div>
                <Menu
                    style={{ position: "fixed", bottom: 0, width: '100%' }}
                    mode="horizontal"
                    selectedKeys={this.props.history.location.pathname}
                    onSelect={({ key }) => {
                        history.push(key)
                    }}
                >
                    {
                        menu ? menu.map(item => <Menu.Item key={item.path} style={{ width: '25%' }}>
                            <div style={{ height: 52, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                                <Icon type={item.icon} style={{ margin: 0, fontSize: 20 }} />
                                <p style={{ fontSize: 12, margin: 0, lineHeight: '18px' }}>
                                    {item.text}
                                </p>
                            </div>
                        </Menu.Item>)
                        :
                        '无数据'
                    }
                </Menu>
            </div>
        )
    }
}

export default App;