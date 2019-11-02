/*
 * @Author: qiuziz
 * @Date: 2017-08-03 17:44:46
 * @Last Modified by: qiuziz
 * @Last Modified time: 2017-08-07 11:08:38
 */

import React from 'react';
import { propTypes, defaultProps } from 'prop-types';
import { OPTIONS, CODES } from './config';

export default
class Captcha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       result: [],
       style: {
         height: props.height + 'px', 
         width: props.width + 'px'
        }
      };
  }

  componentDidMount() {
    this.createCodes();
  }
          
  random(n, m) {
    const c = (m - n) + 1;
    const num = (Math.random() * c) + n;
    return Math.floor(num);
  }

  createCodes() {
    const { length, codes } = this.props;
    let result = [];
    for(let i = 0; i < length; i++) {
      result.push({code: codes[this.random(0, codes.length - 1)], style: this.codeStyle(i)});
    }
    this.setState({ result }, () => {
      this.onChange();
    });
  }

  codeStyle(i) {
  
    const uW = this.props.width / (this.props.length + 1);        // 每个字符占的宽度

    return {
      'fontSize': `${this.random(OPTIONS.fontSizeMin, OPTIONS.fontSizeMax)}px`,
      'color': `${OPTIONS.colors[this.random(0, OPTIONS.colors.length - 1)]}`,
      'position': 'absolute',
      'left': `${this.random(uW * i, ((uW * i) + uW) - (uW / 2))}px`,
      'top': '50%',
      'transform': `rotate(${this.random(-5, 5)}deg) translateY(-50%)`,
      'OTransform': `rotate(${this.random(-5, 5)}deg) translateY(-50%)`,
      'MsTransform': `rotate(${this.random(-5, 5)}deg) translateY(-50%)`,
      'MozTransform': `rotate(${this.random(-5, 5)}deg) translateY(-50%)`,
      'WebkitTransform': `rotate(${this.random(-5, 5)}deg) translateY(-50%)`,
      'fontFamily': `${OPTIONS.fonts[this.random(0, OPTIONS.fonts.length - 1)]}`,
      'fontWeight': 'bold',
      'zIndex': '2'
    }
  }

  onChange() {
    const { result } = this.state;
    let code = '';
    result.map(item => {
       code += item.code;
    })
    this.props.onChange(code);
  }


	render() {
    const { result } = this.state;
    const style = Object.assign({}, this.state.style, this.props.style);
		return (
      <div className="codebtn" style={style} onClick={() => this.createCodes()}>
        {
          result.map((item, index) => {
            return  <span key={index} style={item.style}>{item.code}</span>
          })
        }
      </div>
		);
	}
}


	Captcha.defaultProps = {
    height: '30',
		width: '100',
    style: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#fff',
      cursor: 'pointer',
      verticalAlign: 'middle',
      userSelect: 'none'
    },
    length: 4,
    onChange: () => {},
    codes: CODES
  };

