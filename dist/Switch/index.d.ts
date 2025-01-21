import React, { DOMAttributes } from 'react';
import '../global.less';
import './index.less';
interface Props extends DOMAttributes<Element> {
    className?: string;
    modelValue?: boolean;
    size?: string;
}
declare function Range({ className, modelValue, size }: Props): React.JSX.Element;
export default Range;
