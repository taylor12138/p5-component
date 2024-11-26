import React, { DOMAttributes, useMemo } from 'react';
import '../global.less';
import './index.less';

const ardVersionPattern = /Android\s+([\d.]+);/i;
const userAgent = navigator.userAgent;
export const IS_ANDROID = !!userAgent.match(ardVersionPattern);

export const getAndroidMainVersion = () => {
  const match = userAgent.match(ardVersionPattern);
  return match ? parseFloat(match[1]) : 0;
};

// 安卓6以下不用字体
const supportFontFace = !IS_ANDROID || getAndroidMainVersion() >= 6;

interface Props extends DOMAttributes<Element> {
  children: any;
  className?: string;
  weight?: string;
}

function Font({
  className = '',
  children,
  ...restProps
}: Props) {
  const fontClassName = useMemo(() => {
    if (supportFontFace) {
      // 方正盛世楷书简体_中
      return `${className} font-fz`;
    }
    return className;
  }, [className]);

  return (
    <div className={fontClassName} {...restProps}>
      {children}
    </div>
  );
}

export default Font;
