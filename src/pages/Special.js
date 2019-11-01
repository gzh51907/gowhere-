import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import Api from '../Api';

class Special extends Component {
    state = {
        datalist: []
    }

    async componentDidMount(){
        let {data} = await Api.special();
        let {datalist} = data[0]
        this.setState({datalist})
    }

    goto = (path) => {
        let {history} = this.props;
        history.push(path)
     }
    render() {
        let { datalist } = this.state;
        return (
            <div id="Special" style={{ backgroundColor: '#ebebeb' }}>
                <div className="header" style={{ height: 44, width: '100%', backgroundColor: '#00bcd4', position: 'fixed', top: 0, color: '#fff' ,zIndex:10}}>
                    <Row style={{ height: '100%' }}>
                        <Col onClick={this.goto.bind(this,'/vacation')} style={{ height: '100%', textAlign: 'center' }} span={3}><Icon type="left" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                        <Col span={18} style={{ height: '100%', textAlign: 'center', fontSize: 18, lineHeight: '44px' }}>特卖· 广深香出发<Icon type="caret-down" style={{ fontSize: 10 }} /></Col>
                        <Col style={{ height: '100%', textAlign: 'center' }} span={3}><Icon type="share-alt" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                    </Row>
                </div>
                <div className="listCon" style={{ marginTop: 44 }}>
                    {
                        datalist.map(item => {
                            return (
                                <div key={item.title} style={{ backgroundColor: '#fff', marginBottom: 10, paddingBottom: 20 }}>
                                    <div className="listTitle" style={{ padding: 15, display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <Icon type={item.icon} theme="twoTone" style={{ fontSize: 22 }} />
                                            <h3 style={{ marginBottom: 0, margin: '0 7px 0 7px', fontSize: 18 }}>{item.title}</h3>
                                            <h5 style={{ marginBottom: 0, fontSize: 12, color: '#9e9e9e' }}>{item.text}</h5>
                                        </span>
                                        <span style={{ fontSize: 12, color: '#00afc7', lineHeight: '27px' }}>
                                            低价提醒
                                            <Icon type="right" />
                                        </span>
                                    </div>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '0 15px 15px 15px', margin: 0 }}>
                                        {
                                            item.pro.map(goods => {
                                                return (
                                                    <li key={goods.title} style={{ width: '48%' }}>
                                                        <img src={goods.img} style={{ width: '100%', height: 114 }} />
                                                        <div style={{ padding: '5px 10px 10px 10px' }}>
                                                            <p style={{ margin: 0, fontSize: 14, lineHeight: '19px', color: '#333', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{goods.title}</p>
                                                            <h4 style={{ fontSize: 12, color: '#ff8300' }}>￥<strong style={{ fontSize: 18 }}>{goods.price}</strong>起/人</h4>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div style={{ textAlign: 'center' }}>
                                        <Button style={{ color: '#40a9ff', borderColor: '#40a9ff' }}>更多预售产品</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Special