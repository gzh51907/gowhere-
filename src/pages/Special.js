import React, { Component } from 'react';
import { Row, Col, Icon, Button } from 'antd';
import Api from '../Api';

class Special extends Component {
    state = {
        datalist: [
            {
                title: '尾单特惠',
                text: '近期出行任性低价',
                bottom: '更多尾单产品',
                icon: 'pound-circle',
                pro: [
                    {
                        img: 'https://imgs.qunarzz.com/vc/66/7c/f9/7a142961d4cdfaee22b3025b26.jpg_92.jpg',
                        title: '淡季甩位🔥赠双下午茶/巴厘岛乌布秋千鸟巢/蓝梦岛浮潜/恶魔眼泪/情人崖1',
                        price: 1880
                    },
                    {
                        img: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/3af41332-4b00-4751-b973-a5a346921879.jpg_r_240x160x90_9f8786bd.jpg',
                        title: '〖冬日暖阳〗入住新银盏温泉酒店（享受无限次温泉、2自助餐）+古龙峡云天玻霸1',
                        price: 497
                    },
                    {
                        img: 'https://imgs.qunarzz.com/p/tts0/1811/63/2a67b7449ae3ae02.jpg_r_240x160x90_3d68e109.jpg',
                        title: '纯玩国际五星丨畅滑3小时+千元礼包+陆地头等舱保姆车丨哈尔滨亚布力雪乡5日游1',
                        price: 3215
                    },
                    {
                        img: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/74086b4f-a317-4c1f-ae29-ee0aee1b7a1d.jpg_r_240x160x90_e492c46f.jpg',
                        title: '特价错峰游巴厘岛5天团，蓝梦岛+贝尼达岛出海+精油SPA+金巴兰海滩+下午茶1',
                        price: 1399
                    }
                ]
            },
            {
                title: '低价预售',
                text: '早做打算多省钱',
                bottom: '更多预售产品',
                icon: 'dollar',
                pro: [
                    {
                        img: 'https://imgs.qunarzz.com/vc/66/7c/f9/7a142961d4cdfaee22b3025b26.jpg_92.jpg',
                        title: '淡季甩位🔥赠双下午茶/巴厘岛乌布秋千鸟巢/蓝梦岛浮潜/恶魔眼泪/情人崖2',
                        price: 1880
                    },
                    {
                        img: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/3af41332-4b00-4751-b973-a5a346921879.jpg_r_240x160x90_9f8786bd.jpg',
                        title: '〖冬日暖阳〗入住新银盏温泉酒店（享受无限次温泉、2自助餐）+古龙峡云天玻霸2',
                        price: 497
                    },
                    {
                        img: 'https://imgs.qunarzz.com/p/tts0/1811/63/2a67b7449ae3ae02.jpg_r_240x160x90_3d68e109.jpg',
                        title: '纯玩国际五星丨畅滑3小时+千元礼包+陆地头等舱保姆车丨哈尔滨亚布力雪乡5日游2',
                        price: 3215
                    },
                    {
                        img: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/74086b4f-a317-4c1f-ae29-ee0aee1b7a1d.jpg_r_240x160x90_e492c46f.jpg',
                        title: '特价错峰游巴厘岛5天团，蓝梦岛+贝尼达岛出海+精油SPA+金巴兰海滩+下午茶2',
                        price: 1399
                    }
                ]
            },
            {
                title: '超值自由行',
                text: '精挑细选组合多变',
                bottom: '更多自由行产品',
                icon: 'euro',
                pro: [
                    {
                        img: 'https://imgs.qunarzz.com/vc/66/7c/f9/7a142961d4cdfaee22b3025b26.jpg_92.jpg',
                        title: '淡季甩位🔥赠双下午茶/巴厘岛乌布秋千鸟巢/蓝梦岛浮潜/恶魔眼泪/情人崖3',
                        price: 1880
                    },
                    {
                        img: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/3af41332-4b00-4751-b973-a5a346921879.jpg_r_240x160x90_9f8786bd.jpg',
                        title: '〖冬日暖阳〗入住新银盏温泉酒店（享受无限次温泉、2自助餐）+古龙峡云天玻霸3',
                        price: 497
                    },
                    {
                        img: 'https://imgs.qunarzz.com/p/tts0/1811/63/2a67b7449ae3ae02.jpg_r_240x160x90_3d68e109.jpg',
                        title: '纯玩国际五星丨畅滑3小时+千元礼包+陆地头等舱保姆车丨哈尔滨亚布力雪乡5日游3',
                        price: 3215
                    },
                    {
                        img: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/74086b4f-a317-4c1f-ae29-ee0aee1b7a1d.jpg_r_240x160x90_e492c46f.jpg',
                        title: '特价错峰游巴厘岛5天团，蓝梦岛+贝尼达岛出海+精油SPA+金巴兰海滩+下午茶3',
                        price: 1399
                    }
                ]
            }
        ]
    }

    async componentDidMount(){
        let data = await Api.special({});
        console.log(data)
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