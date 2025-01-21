import React, { DOMAttributes } from 'react';
import '../global.less';
import './index.less';
interface Props extends DOMAttributes<Element> {
    className?: string;
    max: number;
    min: number;
    placement?: string;
}
declare function Range({ className, max, min, placement }: Props): React.JSX.Element;
export default Range;
