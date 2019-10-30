import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userActions from '../../store/action/user';
import { Icon, Input,Carousel,Row,Col } from 'antd';
import './Vacation.scss';

const mapStateToProps = (state) => {
    return {
        userInf: state.userReducer.userInf
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(userActions, dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)
class Vacation extends Component{
    state={
        imagelist: [
            'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
            'https://imgs.qunarzz.com/p/p23/1809/b3/ac42439392acc402.jpg_216x190_4d6d9e9c.jpg',
            'https://imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_216x190_cb36f98c.jpg',
            'https://imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_216x190_f6cbf916.jpg',
            'https://imgs.qunarzz.com/p/p49/201302/28/f7876853b1e2279d93835fbb.jpg_216x190_6ebda0f4.jpg',
            'https://imgs.qunarzz.com/p/p46/201302/28/53587659e9bd347293835fbb.jpg_216x190_8449d786.jpg'
        ],
        contextlist:['丽江','哈尔滨','桂林','日本','巴厘岛','马尔代夫']
    }
    render(){
        // console.log(this.props)
        console.log(this.state.imagelist);
        let { imagelist } = this.state;
        return(
            <div>
                <div className="header">
                    <i style={{ fontSize: 18, color: '#999',height:20,display:'inlineBlock',marginLeft:18,paddingRight:110}}><Icon type="left" /></i>
                    <span style={{ color: '#444', fontWeight: 500 }}>旅游度假 . 广州站</span><Icon type="caret-down" />
                    <Icon type="message" style={{display:'inlineBlock',marginLeft:110,fontSize:18}}/>
                </div>
                <div className='search'>
                    <Input size='small' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;搜索目的地，主题，景点' style={{ width: 330 }} />
                    <Icon type="search" className='sousuo'/>
                </div>
                {/* 轮播图 */}
                <Carousel className="carousel" autoplay='true'>
                    <div className="li1"><img src="http://source.qunarzz.com/site/images/wns/20191023_dujia_homepage_750x192_1.jpg"/></div>
                    <div className="li2"><img src="http://source.qunarzz.com/site/images/wns/20191028_dujia_homepage_750x192_2.jpg"/></div>
                    <div className="li3"><img src="http://source.qunarzz.com/site/images/wns/20190916_qunar_dujia_750x192_3.jpg"/></div>
                    <div className="li4"><img src="http://source.qunarzz.com/site/images/wns/20191014_dujia_homepage_top_banner_4.jpg"/></div>
                    <div className="li5"><img src="http://source.qunarzz.com/site/images/wns/20191017_dujia_homepage_750x192_5.jpg"/></div>
                </Carousel>
                <div className="adv">
                    <p>广告</p>
                </div>
                <div className='main'>
                    <div className="contain">
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
                    </div>
                </div>
                {/* {this.props.userInf.username} */}
            </div>
        )
    }
}

export default Vacation