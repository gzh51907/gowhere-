import React, { Component } from 'react';
import { Row, Col, Icon, Button, Tabs } from 'antd';
import Api from '../Api';

class SpecialList extends Component {
    state = {
        title: '',
        type: '',
        selectPage: 1,
        datalist: []
    }
    async componentDidMount() {
        let type = this.props.history.location.search;
        let typeStr = type.replace('?type=', '')
        // console.log(typeStr)
        if (typeStr === 'weidan') {
            let { data } = await Api.weidan({ page: 1 })
            this.setState({ datalist: data, title: '甩位特惠·广深香出发', type: typeStr })
        }
        else if (typeStr === 'dijia') {
            let { data } = await Api.dijia({ page: 1 })
            this.setState({ datalist: data, title: '低价预售·广深香出发', type: typeStr })
        }
        else if (typeStr === 'ziyouxing') {
            let { data } = await Api.ziyouxing({ page: 1 })
            this.setState({ datalist: data, title: '超值自由行·广深香出发', type: typeStr })
        }
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = async () => {
        let winTop = window.scrollY + window.innerHeight;
        let iTop = this.boxRef.offsetHeight + this.boxRef.offsetTop;
        if (winTop >= iTop) {
            window.removeEventListener("scroll", this.handleScroll);
            let changePage = this.state.selectPage + 1;
            let { type, datalist } = this.state;
            if (type === 'weidan') {
                let { data } = await Api.weidan({ page: changePage })
                if (data.length !== 0) {
                    this.setState({ datalist: [...datalist, ...data], selectPage: changePage })
                    window.addEventListener("scroll", this.handleScroll);
                } else if (data.length === 0) {
                    window.removeEventListener("scroll", this.handleScroll);
                }
            }

            else if (type === 'dijia') {
                let { data } = await Api.dijia({ page: changePage })
                if (data.length !== 0) {
                    this.setState({ datalist: [...datalist, ...data], selectPage: changePage })
                    window.addEventListener("scroll", this.handleScroll);
                } else if (data.length === 0) {
                    window.removeEventListener("scroll", this.handleScroll);
                }
            }

            else if (type === 'ziyouxing') {
                let { data } = await Api.ziyouxing({ page: changePage })
                if (data.length !== 0) {
                    this.setState({ datalist: [...datalist, ...data], selectPage: changePage })
                    window.addEventListener("scroll", this.handleScroll);
                } else if (data.length === 0) {
                    window.removeEventListener("scroll", this.handleScroll);
                }
            }
        }
    }


    render() {
        let { title, datalist } = this.state
        return (
            <div id="SpecialList">
                <div className="header" style={{ height: 44, width: '100%', backgroundColor: '#fff', position: 'fixed', top: 0, color: '#616161', zIndex: 10, borderBottom: '1px solid', borderColor: ' #e0e0e0' }}>
                    <Row style={{ height: '100%' }}>
                        <Col onClick={this.props.history.goBack} span={3} style={{ height: '100%', textAlign: 'center' }} ><Icon type="left" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                        <Col span={18} style={{ height: '100%', textAlign: 'center', fontSize: 18, lineHeight: '44px' }}>{title}</Col>
                        <Col span={3} style={{ height: '100%', textAlign: 'center' }} ><Icon type="share-alt" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                    </Row>
                    <div style={{ display: 'flex', backgroundColor: '#fff', padding: '10px 0' }}>
                        <span style={{ width: '33%', textAlign: 'center', fontSize: 12, color: '#212121' }}>特惠类型<Icon type="caret-down" style={{ color: '#9e9e9e' }} /></span>
                        <span style={{ width: '33%', textAlign: 'center', fontSize: 12, color: '#212121', borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }}>广深香<Icon type="caret-down" style={{ color: '#9e9e9e' }} /></span>
                        <span style={{ width: '33%', textAlign: 'center', fontSize: 12, color: '#212121' }}>目的地<Icon type="caret-down" style={{ color: '#9e9e9e' }} /></span>
                    </div>
                </div>
                <ul ref={el => this.boxRef = el} style={{ backgroundColor: '#f5f5f5', listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 81, padding: '10px 15px' }}>
                    {
                        datalist.map((item, index) => {
                            return (
                                <li key={index} style={{ width: '48%', marginBottom: 10, backgroundColor: '#fff' }}>
                                    <img src={item.img} style={{ width: '100%', height: 114 }} />
                                    <div style={{ padding: '5px 10px 11px' }}>
                                        <p style={{ marginBottom: 0, color: '#333', fontSize: 14, fontWeight: 500, lineHeight: '19px', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.title}</p>
                                        <h4 style={{ color: '#ff8300', fontSize: 12, marginBottom: 0 }}>￥<strong style={{ fontSize: 18, fontWeight: 600 }}>{item.price}</strong>起/人</h4>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default SpecialList;