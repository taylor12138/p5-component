import React, { DOMAttributes, useCallback, useMemo, useState } from 'react';
import '../global.less';
import './index.less';

interface Props extends DOMAttributes<Element> {
  className?: string;
  modelValue?: boolean;
  size?: string;
}

function Range({ className = '', modelValue = true, size = 'medium' }: Props) {
  const [isShow, setIsShow] = useState(false);
  const [value, setVal] = useState(modelValue)

  // 设置switch大小
  const setSwitchSize = useMemo(() => `p5-switch-size-${size}`, [size])

  const onChange = useCallback(
    (e: any) => {
      setVal(e.target.checked)
    },
    [],
  )

  return (
    <div className={value ? `p5-switch-ctn p5-switch-on ${setSwitchSize} ${className}`:` p5-switch-ctn p5-switch-off ${setSwitchSize} ${className}`}>
        <div className="p5-switch-bg-ctn">
            <span className={isShow ? 'p5-switch-bg-move p5-switch-bg' : 'p5-switch-bg'}></span>
        </div>
        <span className="p5-switch-icon"></span>
        <span className={isShow?'p5-switch-sub-icon':''}></span>
        <input type="checkbox" onClick={onChange} onMouseEnter={() => {
            setIsShow(true);
        }} onMouseLeave={() => {
            setIsShow(false);
        }} />
    </div>
  );
}

export default Range;
