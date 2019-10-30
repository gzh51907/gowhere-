import React, { Component } from 'react';
import { Row, Col, Icon, Button ,Tabs} from 'antd';

class Goods extends Component {
    state = {
        activeKey: 'jingxuan',
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
                text: '亲自游学',
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
        datalist: [
            {
                photo:'https://qcommons.qunar.com/headshot/headshotsById/313563910.png?b&ssl=true',
                name:'去哪儿旅行种草机',
                title:'【旅行种草】极光季，小驼带你看极光系列1-「北欧三国冬季极光玩法」1',
                time:'6天前',
                num:0,
                img:'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/c52b00d4cb95dd3a1fa314550eab459a.gif_r_350x_326e32d3.gif?scale=1.815,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/dcd92a21169ed17c9ef80b6f8c6bb4f3.gif_r_350x_3a9afa44.gif?scale=2.201,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/efeed13fa1d152d7fd0a5256c57f1cb2.gif_r_350x_3ba1232c.gif?scale=1.699'
            },
            {
                photo:'https://qcommons.qunar.com/headshot/headshotsById/313563910.png?b&ssl=true',
                name:'去哪儿旅行种草机',
                title:'【旅行种草】极光季，小驼带你看极光系列1-「北欧三国冬季极光玩法」2',
                time:'6天前',
                num:0,
                img:'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/c52b00d4cb95dd3a1fa314550eab459a.gif_r_350x_326e32d3.gif?scale=1.815,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/dcd92a21169ed17c9ef80b6f8c6bb4f3.gif_r_350x_3a9afa44.gif?scale=2.201,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/efeed13fa1d152d7fd0a5256c57f1cb2.gif_r_350x_3ba1232c.gif?scale=1.699,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/c52b00d4cb95dd3a1fa314550eab459a.gif_r_350x_326e32d3.gif?scale=1.815'
            },
            {
                photo:'https://qcommons.qunar.com/headshot/headshotsById/313563910.png?b&ssl=true',
                name:'去哪儿旅行种草机',
                title:'【旅行种草】极光季，小驼带你看极光系列1-「北欧三国冬季极光玩法」3',
                time:'6天前',
                num:0,
                img:'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/c52b00d4cb95dd3a1fa314550eab459a.gif_r_350x_326e32d3.gif?scale=1.815,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/dcd92a21169ed17c9ef80b6f8c6bb4f3.gif_r_350x_3a9afa44.gif?scale=2.201,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/efeed13fa1d152d7fd0a5256c57f1cb2.gif_r_350x_3ba1232c.gif?scale=1.699'
            },
            {
                photo:'https://qcommons.qunar.com/headshot/headshotsById/313563910.png?b&ssl=true',
                name:'去哪儿旅行种草机',
                title:'【旅行种草】极光季，小驼带你看极光系列1-「北欧三国冬季极光玩法」4',
                time:'6天前',
                num:0,
                img:'https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/c52b00d4cb95dd3a1fa314550eab459a.gif_r_350x_326e32d3.gif?scale=1.815,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/dcd92a21169ed17c9ef80b6f8c6bb4f3.gif_r_350x_3a9afa44.gif?scale=2.201,https://tr-osdcp.qunarzz.com/tr-osd-vs-dapp-ugc/img/efeed13fa1d152d7fd0a5256c57f1cb2.gif_r_350x_3ba1232c.gif?scale=1.699'
            },
        ]
    }
    changeType=(key)=>{
        console.log(key)
    }

    render() {
        let { menu ,activeKey,datalist} = this.state;
        return (
            <div id="Goods">
                <div className="header" style={{ height: 44, width: '100%', backgroundColor: '#fff', position: 'fixed', top: 0, color: '#616161', zIndex: 10, borderBottom: '1px solid', borderColor: ' #e0e0e0' }}>
                    <Row style={{ height: '100%' }}>
                        <Col span={3} style={{ height: '100%', textAlign: 'center' }} ><Icon type="left" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                        <Col span={18} style={{ height: '100%', textAlign: 'center', fontSize: 18, lineHeight: '44px' }}>好货</Col>
                        <Col span={3} style={{ height: '100%', textAlign: 'center' }} ><Icon type="user" style={{ fontSize: 24, lineHeight: '44px' }} /></Col>
                    </Row>
                    <Tabs
                        defaultActiveKey={activeKey}
                        tabPosition='top'
                        onChange={this.changeType}
                        tabBarGutter={10}
                        size={"small"}
                        style={{background:'#fff',height:36,margin:0}}
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
                <ul style={{listStyle:'none' ,backgroundColor:'#f3f3f3',marginTop:79,padding:'20px 16px 0'}}>
                    {
                        datalist.map(item=>{
                            return(
                                <li key={item.title} style={{backgroundColor:'#fff',padding:'17px 12px',marginBottom:13,borderRadius:'13px'}}>
                                    <h3>
                                        <Row type={'flex'} justify={'center'} style={{marginBottom:13}}>
                                            <Col span={4}><img src={item.photo} style={{width:40,height:40}} /></Col>
                                            <Col span={16}><h4 style={{fontSize:15,margin:0}}>{item.name}</h4><h5 style={{color:'#9e9e9e',fontSize:12,margin:0}}>{item.time}</h5></Col>
                                            <Col span={4}><Button type="danger" style={{width:57,height:21,borderRadius:'27px',padding:'0 3px 0 0'}}><Icon type="plus" style={{padding:0}}/>关注</Button></Col>
                                        </Row>
                                    </h3>
                                    <p style={{fontSize:15,color:'#212121',lineHeight:'21px',marginBottom:12}}>
                                        {item.title}
                                    </p>
                                    <div style={{display:'flex',flexWrap:'wrap'}}>
                                        {
                                            item.img.split(',').map((item,idx)=>{
                                                return(
                                                    <img src={item} key={idx} style={{width:'31%',height:103,margin:'0 5px 5px 0',boxSizing:'border-box'}} />
                                                )
                                            })
                                        }
                                    </div>
                                    <div style={{display:'flex',justifyContent:'flex-end',fontSize:12,color:'#212121'}}>
                                        <span style={{marginRight:24}}><Icon type="heart" style={{fontSize:15,marginRight:3}} />{item.num}</span>
                                        <span><Icon type="share-alt" style={{fontSize:15,marginRight:3}} />转发</span>
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



export default Goods