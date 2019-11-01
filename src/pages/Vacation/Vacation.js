import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userActions from '../../store/action/user';
import { Icon, Input, Carousel, Row, Col, Menu } from 'antd';
import './Vacation.scss';
import Api from '../../Api/index'
const mapStateToProps = (state) => {
    return {
        userInf: state.userReducer.userInf
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(userActions, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class Vacation extends Component {
    state = {
        itemlist: ['尾单特惠','低价预售','超值自由行'],
        imagelist: [
            'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
            'https://imgs.qunarzz.com/p/p23/1809/b3/ac42439392acc402.jpg_216x190_4d6d9e9c.jpg',
            'https://imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_216x190_cb36f98c.jpg',
            'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_216x190_f6cbf916.jpg',
            'https://imgs.qunarzz.com/p/p49/201302/28/f7876853b1e2279d93835fbb.jpg_216x190_6ebda0f4.jpg',
            'https://imgs.qunarzz.com/p/p46/201302/28/53587659e9bd347293835fbb.jpg_216x190_8449d786.jpg'
        ],
        contextlist: ['丽江', '哈尔滨', '桂林', '日本', '巴厘岛', '马尔代夫'],
        advimglist: [
            'https://s.qunarzz.com/package_mobile/home-activity/freetrip-190212.png',
            'https://s.qunarzz.com/package_mobile/home-activity/withGroup-190212.png',
            'https://s.qunarzz.com/package_mobile/home-activity/cruise-190212.png',
            'https://s.qunarzz.com/package_mobile/home-activity/group-190212.png'
        ],
        datalist: [],
    }
    async componentDidMount() {
        let datalist = await Api.getData();
        this.setState({
            datalist,
        });
        // console.log(datalist);
        let searchDOM = this.searchDOM;
        let cityDOM = this.cityDOM;
        let itemDOM = this.itemDOM;
        let boxDOM = this.boxDOM;
        // console.log(searchDOM);
        window.onscroll = function (e) {
            console.log(window.pageYOffset)
            if (window.pageYOffset > 900) {
                itemDOM.className = 'now';
            } else {
                itemDOM.className='fixed2'
            }
            // if (window.pageYOffset > 37) {
            //     searchDOM.className = 'active'
            //     cityDOM.style.display = 'none';
            // } else{
            //     searchDOM.style.className = 'sTop';
            //     cityDOM.style.display = 'inline-block';
            // }
            
        }
    }
    onClickChange = (index) => {
        if (index === 0) {
            window.scrollTo(0, 900)
        } else if (index === 1) {
            window.scrollTo(0,1213)
        } else {
            window.scrollTo(0,1474)
        }
    }
    render() {
        // console.log(this.props)
        const { Search } = Input;
        let { datalist, imagelist,itemlist } = this.state;
        // console.log("datalist", datalist);
        return (
            <div style={{ background: '#fff' }} className="fixed1">
                <div className="header" style={{ position: 'fixed', top: 0, left: 0, width: '100%',background:'#fff', zIndex: 9999 }}>
                    <i style={{ fontSize: 18, color: '#999', height: 20, display: 'inlineBlock', marginLeft: 18, paddingRight: 110 }}><Icon type="left" /></i>
                    <span style={{ color: '#444', fontWeight: 500 }} ref={el => this.cityDOM = el}>旅游度假 . 广州站</span><Icon type="caret-down" />
                    <Icon type="message" style={{ display: 'inlineBlock', fontSize: 18, position: 'fixed', top: 5, right: 10 }} />
                </div>
                <div className='search'>
                    <div className="sTop" ref={el => this.searchDOM = el}>
                        <Search placeholder="搜索目的地，城市，景点" size="small" style={{ width: '80%'}}
                        />
                    </div>
                </div>
                {/* 轮播图 */}
                <Carousel className="carousel" autoplay='true'>
                    <div className="li1"><img src="http://source.qunarzz.com/site/images/wns/20191023_dujia_homepage_750x192_1.jpg" /></div>
                    <div className="li2"><img src="http://source.qunarzz.com/site/images/wns/20191028_dujia_homepage_750x192_2.jpg" /></div>
                    <div className="li3"><img src="http://source.qunarzz.com/site/images/wns/20190916_qunar_dujia_750x192_3.jpg" /></div>
                    <div className="li4"><img src="http://source.qunarzz.com/site/images/wns/20191014_dujia_homepage_top_banner_4.jpg" /></div>
                    <div className="li5"><img src="http://source.qunarzz.com/site/images/wns/20191017_dujia_homepage_750x192_5.jpg" /></div>
                </Carousel>
                <div className="adv">
                    <p>广告</p>
                </div>
                <div className='main'>
                    <div className="contain">
                        <div className="hotcity">
                            <h3>当季热门目的地</h3>
                            <Row gutter={16} className="gutterAll">
                                <Col className="gutter-row" span={8}>
                                    <div className="gutter-box">
                                        <img src={this.state.imagelist[0]} />
                                        <div className="contents">{this.state.contextlist[0]}
                                            <p>2566人喜欢</p>
                                        </div>
                                    </div>

                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <div className="gutter-box"><img src={this.state.imagelist[1]} />
                                        <div className="contents">{this.state.contextlist[1]}
                                            <p>1088人喜欢</p>
                                        </div>
                                    </div>

                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <div className="gutter-box"><img src={this.state.imagelist[2]} />
                                        <div className="contents">{this.state.contextlist[2]}
                                            <p>1025人喜欢</p>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                            <Row gutter={16} className="gutterAll">
                                <Col className="gutter-row sp4" span={8}>
                                    <div className="gutter-box">
                                        <img src={this.state.imagelist[3]} />
                                        <div className="contents">{this.state.contextlist[3]}
                                            <p>2417人喜欢</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="gutter-row sp5" span={8}>
                                    <div className="gutter-box">
                                        <img src={this.state.imagelist[4]} />
                                        <div className="contents">{this.state.contextlist[4]}
                                            <p>1283人喜欢</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <div className="gutter-box">
                                        <img src={this.state.imagelist[5]} />
                                        <div className="contents">{this.state.contextlist[5]}
                                            <p>1071人喜欢</p>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </div><div className="city">
                            <Row gutter={16} className="gutterAll">
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <span>埃及</span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <span>吉林</span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box jiuzhaig">
                                        <span>九寨沟</span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <span>张家界</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={16} className='gutterAll'>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <span>北京</span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <span>美国</span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <span>维多利亚海港</span>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="gutter-box">
                                        <span>珠海长隆</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="ad-dest-post">
                            <Row gutter={16} className="gutterAll">
                                <Col span={8} className="gutter-row">
                                    <div className="china">
                                        <h2>国内自驾游</h2>
                                        <p></p>
                                        <div className="bigCircle">
                                            <span className="smCircle">
                                                <Icon type="right" className="right" />
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} className="gutter-row">
                                    <div className="yunnan">
                                        <h2>云南精品汇</h2>
                                        <p></p>
                                        <div className="bigCircle">
                                            <span className="smCircle">
                                                <Icon type="right" className="right" />
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={8} className="gutter-row">
                                    <div className="price">
                                        <h2>特价单尾</h2>
                                        <p></p>
                                        <div className="bigCircle">
                                            <span className="smCircle">
                                                <Icon type="right" className="right" />
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="freedom">
                            <Row gutter={16}>
                                <Col span={6} className="gutter-row">
                                    <div className="pic">
                                        <img src={this.state.advimglist[0]} />
                                    </div>
                                </Col>
                                <Col span={6} className="gutter-row">
                                    <div className="pic">
                                        <img src={this.state.advimglist[1]} />
                                    </div>
                                </Col>
                                <Col span={6} className="gutter-row">
                                    <div className="pic">
                                        <img src={this.state.advimglist[2]} />
                                    </div>
                                </Col>
                                <Col span={6} className="gutter-row">
                                    <div className="pic">
                                        <img src={this.state.advimglist[3]} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="menu">
                            <Row gutter={16} className="gutterAll">
                                <Col span={4}>
                                    <div className="near">
                                        <Icon type="instagram" />
                                        <p>周边游</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div className="global">
                                        <Icon type="global" />
                                        <p>出境游</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div className="country">
                                        <Icon type="bank" />
                                        <p>国内游</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div className="day">
                                        <Icon type="alert" />
                                        <p>一日游</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div className="qianzheng">
                                        <Icon type="container" />
                                        <p>签证</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div className="wifi">
                                        <Icon type="wifi" />
                                        <p>wi-fi</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="icongroup">
                            <Row gutter={16} className="gutterAll">
                                <Col span={4}>
                                    <div>
                                        <img src="https://imgs.qunarzz.com/vc/fd/55/94/6c7152c2a8b35a9c49bb26ea25.png_92.png" />
                                        <p>主题游</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div>
                                        <img src="https://imgs.qunarzz.com/vc/eb/d9/1b/e24bca3f1ef6ae6ebdee15e4ca.png_92.png" />
                                        <p>徒步徒山</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div>
                                        <img src="https://imgs.qunarzz.com/vc/c8/01/32/8f6e29b7b6ce0a807742c2587a.png_92.png" />
                                        <p>深度体验</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div>
                                        <img src="https://imgs.qunarzz.com/vc/c3/f2/54/2e1c8f9403de1ed28895c9ffa4.png_92.png" />
                                        <p>亲子.游学</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div>
                                        <img src="https://imgs.qunarzz.com/vc/68/4a/91/b7f09964d1e7a6280cca361c46.png_92.png" />
                                        <p>休闲潜游</p>
                                    </div>
                                </Col>
                                <Col span={4}>
                                    <div>
                                        <img src="https://imgs.qunarzz.com/vc/77/21/6b/64a35f4ab3ab1fad57731edb3d.png_92.png" />
                                        <p>高空飞行</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="item">
                            <div className="fixed2" ref={el => this.itemDOM = el}>
                                <Menu mode="horizontal">
                                    {/* <Menu.Item>
                                        尾单特惠
                                    </Menu.Item>
                                    <Menu.Item>
                                        低价预售
                                    </Menu.Item>
                                    <Menu.Item>
                                        超值自由行
                                    </Menu.Item> */}
                                    {
                                        itemlist.map((item,idx) => {
                                            return (<Menu.Item onClick={this.onClickChange.bind(this,idx)}>{item}</Menu.Item>);
                                        })
                                    }
                                </Menu>
                            </div>
                            {
                                <div className="box" ref={el => this.boxDOM = el}>
                                    <Row gutter={30} className="gutters">{
                                        datalist.map(item => {
                                            return <Col span={12} className="pics">
                                                <div className="classity">
                                                    <img src={item.img} />
                                                </div>
                                                <p>{item.title}</p>
                                                <span className="title">
                                                    {item.tag}
                                                </span>
                                                <div className="alls">
                                                    <i>￥</i>
                                                    <span className="price">
                                                        {item.price}
                                                    </span>
                                                    人/起
                                                </div>
                                            </Col>
                                        })
                                    }
                                    </Row>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {/* {this.props.userInf.username} */}
            </div>
        )
    }
}

export default Vacation