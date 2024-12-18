/* eslint-disable react/jsx-key */
import React, { DOMAttributes, useMemo } from 'react';
import './index.less';

interface Props extends DOMAttributes<Element> {
  content: string;
  selected_font_color?: string; // 选中字体的字体颜色
  font_color?: string; // 选中字体的字体颜色
  selected_bg_color?: string; // 选中字体的字体颜色
}

function Title({
  content,
  selected_font_color = '#fff',
  font_color = '#000',
  selected_bg_color = '#000',
}: Props) {
  // 选择需要添加特殊样式的字符
  const getSelectedIdx = useMemo(() => {
    const check_list = [' ', ',', '，', '.', '。', '!', '！', '?', '？'];
    let idx_map: any = check_list.includes(content[1]) ? {} : { 1: 1 };

    for (let i = 2; i < content.length; i++) {
      if (
        !check_list.includes(content[i]) &&
        check_list.includes(content[i - 2])
      )
        idx_map[i] = 1;
    }

    return idx_map;
  }, [content]);

  const getSpanStyle = (idx: number) => {
    let degree = Math.random() < 0.5 ? Math.random() * 10 : -Math.random() * 10;

    return {
      color: getSelectedIdx?.[idx] === 1 ? selected_font_color : font_color,
      'background-color': getSelectedIdx?.[idx] === 1 ? selected_bg_color : '',
      transform: `rotate(${degree}deg)`,
    };
  };

  const contentArr = content.split('');

  return (
    <p className="p5-title-ctn">
      {contentArr?.map((str, index) => {
        return <span style={getSpanStyle(index)}>{str}</span>;
      })}
    </p>
  );
}

export default Title;
