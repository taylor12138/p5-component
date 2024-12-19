/* eslint-disable react/jsx-key */
import React, { DOMAttributes, useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Title from '../Title';
import akechi from './assets/akechi.png';
import ann from './assets/ann.png';
import futaba from './assets/futaba.png';
import haru from './assets/haru.png';
import lavenza from './assets/lavenza.png';
import makoto from './assets/makoto.png';
import mona from './assets/mona.png';
import ryuji from './assets/ryuji.png';
import sumire from './assets/sumire.png';
import yusuke from './assets/yusuke.png';
import notification from './assets/notification.png';
import './index.less';

const character_data = [
  {
    chinese: '摩尔 加纳',
    eng: 'mona',
  },
  {
    chinese: '坂本 龙司',
    eng: 'ryuji',
  },
  {
    chinese: '高卷 杏',
    eng: 'ann',
  },
  {
    chinese: '喜多川 祐介',
    eng: 'yusuke',
  },
  {
    chinese: '新岛 真',
    eng: 'makoto',
  },
  {
    chinese: '佐仓 双叶',
    eng: 'futaba',
  },
  {
    chinese: '奥村 春',
    eng: 'haru',
  },
  {
    chinese: '明智 吾郎',
    eng: 'akechi',
  },
  {
    chinese: '芳泽 霞',
    eng: 'kasumi',
  },
  {
    chinese: '芳泽 堇',
    eng: 'sumire',
  },
  {
    chinese: '拉雯妲',
    eng: 'lavenza',
  },
];

interface Props extends DOMAttributes<Element> {
  top: number;
  left: number;
  character?: string;
  content: string;
  handleClose?: () => void;
}

function DialogBox({ top, left, character, content, handleClose }: Props) {
  const image = useMemo(() => {
    switch (character) {
      case 'akechi':
        return akechi;
      case 'ann':
        return ann;
      case 'futaba':
        return futaba;
      case 'lavenza':
        return lavenza;
      case 'haru':
        return haru;
      case 'makoto':
        return makoto;
      case 'yusuke':
        return yusuke;
      case 'mona':
        return mona;
      case 'ryuji':
        return ryuji;
      case 'kasumi':
        return sumire;
      default:
        return sumire;
    }
  }, [character]);

  const [currentLeft, setCurrentLeft] = useState(0)
  useEffect(() => {
    setTimeout(() => {
        setCurrentLeft(left)
    }, 0)
  }, [left])
  

  const chineseName = character_data.find(item => item.eng === character)?.chinese || ''

  return (
    <div
      className="p5-noti-ctn"
      style={{ top: top + 'px', left: currentLeft + 'px' }}
      onClick={handleClose}
    >
      <div className="p5-noti-sub-ctn">
        <img className="p5-portrait-img" src={image} alt="" />
        <div className="p5-dialog-ctn">
          <img
            className="p5-dialog-img"
            src={notification}
            alt=""
          />
          <div className="p5-noti-title">
            <Title content={chineseName} />
          </div>
          <div className="p5-noti-text">{content}</div>
        </div>
      </div>
    </div>
  );
}

let showing = false;

export const showDialog = ({
    top,
    left,
    content,
    character = 'kasumi',
}:{
    top: number, left: number, content: string, character?: string
}) => {
    if(showing) {
        return () => {
            console.log('already showing');
        };
    }
    showing = true;
    const container = document.createElement('div');
    document.body.appendChild(container);

    //@ts-ignore
    const root = ReactDOM.createRoot(container); // 使用 createRoot 创建 root
  
    const handleClose = () => {
        if(!showing) {
            return;
        }
        showing = false;

        // 卸载并移除 DOM 节点
        root.unmount();
        document.body.removeChild(container);
      };
  
    root.render(
    <DialogBox
        top={top}
        left={left}
        content={content}
        character={character}
        handleClose={handleClose}
    />);
  
    console.log('Dialog rendered to body');

    return handleClose
}

export default DialogBox;
