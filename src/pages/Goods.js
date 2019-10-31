import React, { Component } from 'react';
import { Row, Col, Icon, Button, Tabs, Spin, message } from 'antd';
import Api from '../Api';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.userInf.username
    }
}
@connect(mapStateToProps)
class Goods extends Component {
    state = {
        activeKey: 'jingxuan',
        selectPage: 1,
        menu: [
            {
                text: '精选',
                type: 'jingxuan'
            },
            {
                text: '关注',
                type: 'guanzhu'
            },
            {
                text: '特价游',
                type: 'tejiayou'
            },
            {
                text: '亲子游学',
                type: 'qinziyouxue'
            },
            {
                text: '徒步登山',
                type: 'tubudengshan'
            },
            {
                text: '滑雪',
                type: 'huaxue'
            },
            {
                text: '深度游',
                type: 'shenduyou'
            },
            {
                text: '自驾',
                type: 'zijia'
            },
        ],
        datalist: []
    }

    goto = (path) => {
        let { history } = this.props;
        history.push(path)
    }
    changeType = async (key) => {
        window.scrollTo(0, 0);
        this.noMore.style.display = 'none';
        window.addEventListener("scroll", this.handleScroll);
        this.setState({
            selectPage: 1,
            datalist: [],
            activeKey: key
        })
        if (key !== 'guanzhu') {
            let { data } = await Api.list({
                page: 1,
                tabName: key
            })
            this.setState({ datalist: data })
        } else {
            if (this.props.username) {
                let { data } = await Api.checkAttention({
                    username: this.props.username
                })
                let dataArr = data.map(item => {
                    return item.info
                })
                let datas = []
                dataArr.forEach(item => {
                    datas = [...datas, ...item]
                })
                await this.setState({ datalist: datas })
                if(this.state.datalist.length!==0){
                    this.noAttention.style.display='none'
                }else{
                    this.noAttention.style.display='block'
                }
            } 
        }
    }

    handleScroll = async () => {
        if (this.state.activeKey !== 'guanzhu') {
            let winTop = window.scrollY + window.innerHeight;
            let iTop = this.boxRef.offsetHeight + this.boxRef.offsetTop;


            if (winTop >= iTop) {
                window.removeEventListener("scroll", this.handleScroll);
                this.hidebox.style.display = 'block';
                let changePage = this.state.selectPage + 1;
                setTimeout(async () => {//再次请求数据
                    let { data } = await Api.list({
                        page: changePage,
                        tabName: this.state.activeKey
                    })
                    // console.log(data.length)
                    if (data.length !== 0) {
                        let newArr = [...this.state.datalist, ...data]
                        this.setState({
                            datalist: newArr,
                            selectPage: changePage
                        })
                        window.addEventListener("scroll", this.handleScroll);
                    } else if (data.length === 0) {
                        this.noMore.style.display = 'block';
                        window.removeEventListener("scroll", this.handleScroll);
                    }
                    this.hidebox.style.display = 'none';
                }, 1500)
            }
        } else {
            this.hidebox.style.display = 'none';
        }

    }

    addAttention = async (name) => {
        if (this.state.activeKey !== 'guanzhu') {
            await Api.addAttention({
                username: this.props.username,
                name
            })
        } else {
            message.info('您已经关注过了噢~');
        }
    }

    gotoAttention = ()=>{
        if(this.props.username){
            this.changeType('jingxuan')
        }else{
            let {history} = this.props;
            history.push('/mine')
        }
    }

    async componentDidMount() {
        let { data } = await Api.list({
            page: 1,
            tabName: this.state.activeKey
        })
        this.setState({ datalist: data })

        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        let { menu, activeKey, datalist } = this.state;
        return (
            <div id="Goods">
                <div className="header" style={{ height: 44, width: '100%', backgroundColor: '#fff', position: 'fixed', top: 0, color: '#616161', zIndex: 10, borderBottom: '1px solid', borderColor: ' #e0e0e0' }}>
                    <Row style={{ height: '100%' }}>
                        <Col onClick={this.goto.bind(this, './vacation')} span={3} style={{ height: '100%', textAlign: 'center' }} ><Icon type="left" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                        <Col span={18} style={{ height: '100%', textAlign: 'center', fontSize: 18, lineHeight: '44px' }}>好货</Col>
                        <Col onClick={this.goto.bind(this, './mine')} span={3} style={{ height: '100%', textAlign: 'center' }} ><Icon type="user" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                    </Row>
                    <Tabs
                        defaultActiveKey={'jingxuan'}
                        tabPosition='top'
                        onChange={this.changeType}
                        tabBarGutter={10}
                        size={"small"}
                        style={{ background: '#fff', height: 36, margin: 0 }}
                    >
                        {
                            menu.map(item => {
                                return (
                                    <Tabs.TabPane tab={item.text} key={item.type}></Tabs.TabPane>
                                )
                            })
                        }
                    </Tabs>
                </div>
                <ul ref={el => this.boxRef = el} style={{ listStyle: 'none', backgroundColor: '#f3f3f3', marginTop: 79, padding: '20px 16px 0' }}>
                    {
                        datalist.map((item, index) => {
                            return (
                                <li key={index} style={{ backgroundColor: '#fff', padding: '17px 12px', marginBottom: 13, borderRadius: '13px' }}>
                                    <h3>
                                        <Row type={'flex'} justify={'center'} style={{ marginBottom: 13 }}>
                                            <Col span={4}><img src={item.photo} style={{ width: 40, height: 40 }} /></Col>
                                            <Col span={16}><h4 style={{ fontSize: 15, margin: 0 }}>{item.name}</h4><h5 style={{ color: '#9e9e9e', fontSize: 12, margin: 0 }}>{item.time}</h5></Col>
                                            <Col span={4}><Button onClick={this.addAttention.bind(this, item.name)} type="danger" style={{ width: 57, height: 21, borderRadius: '27px', padding: '0 3px 0 0' }}><Icon type="plus" style={{ padding: 0 }} />关注</Button></Col>
                                        </Row>
                                    </h3>
                                    <p style={{ fontSize: 15, color: '#212121', lineHeight: '21px', marginBottom: 12, width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
                                        {item.title}
                                    </p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {
                                            item.img.split(',').map((item, idx) => {
                                                if (item) {
                                                    return (
                                                        <img src={item} key={idx} style={{ width: '31%', height: 103, margin: '0 5px 5px 0', boxSizing: 'border-box' }} />
                                                    )
                                                } else {
                                                    return '无图片'
                                                }
                                            })
                                        }
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 12, color: '#212121' }}>
                                        <span style={{ marginRight: 24 }}><Icon type="heart" style={{ fontSize: 15, marginRight: 3 }} />{item.num}</span>
                                        <span><Icon type="share-alt" style={{ fontSize: 15, marginRight: 3 }} />转发</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                    <div style={{ display: 'none' }} ref={el => this.hidebox = el}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Spin spinning={true} />
                        </div>
                    </div>
                    <div ref={el => this.noMore = el} style={{ width: '100%', textAlign: 'center', fontSize: 17, paddingBottom: 15, display: 'none' }}>
                        没有更多了
                    </div>
                    <div ref={el => this.noAttention = el} style={{ width: '100%', textAlign: 'center', display: 'block', height: 600 }}>
                        <img src='https://s.qunarzz.com/package_ugc/index/noAttention.png' style={{ display: 'block', margin: 'auto', marginTop: 54 }} />
                        <img onClick={this.gotoAttention} src='https://s.qunarzz.com/package_ugc/index/attentionBtn.png' style={{ display: 'block', margin: 'auto', marginTop: 12 }} />
                    </div>
                </ul>
            </div>
        )
    }
}

message.config({
    top: 90,
    duration: 2,
    maxCount: 1,
});

export default Goods