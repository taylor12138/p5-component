import React, { DOMAttributes, useMemo, useState } from 'react';
import '../global.less';
import './index.less';

interface Props extends DOMAttributes<Element> {
  className?: string;
  max: number;
  min: number;
  placement?: string
}

function Range({ className = '', max, min, placement = 'top' }: Props) {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState('');

const iconPosition = useMemo(() => {
    const width = document.querySelector('#volume')?.clientWidth;
    console.log(width, value, 'width');
    
    if(!value || !width) {
        return {
            left: '0px',
            top: placement==='top'?'-30px':'24px'
        };
    }
    const val = +value;
    const left = (val - min) / (max - min) * (width - 14) - 4;
    console.log(val, max);
    
    return {
        left: `${left}px`,
        top: placement==='top'?'-30px':'24px'
    }

}, [max, min, placement, value])


  return (
    <div className={`p5-range ${className}`} onMouseEnter={() => {
        setIsShow(true)
    }} onMouseLeave={() => {
        setIsShow(false)
    }}>
      {isShow && (
        <span
          className="p5-slider-icon p5-text"
          style={{left: iconPosition.left, top: iconPosition.top}}
        >
          {value}
        </span>
      )}
      <input className={isShow ? "p5-slider-progress p5-slider-progress-hover" : "p5-slider-progress p5-slider-progress-static"} type="range" id="volume" name="volume"  min={min} max={max} onChange={(v) => {
        setValue(v.target.value);
      }}/>
    </div>
  );
}

export default Range;
