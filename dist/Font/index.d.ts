import React, { DOMAttributes } from 'react';
import '../global.less';
import './index.less';
export declare const IS_ANDROID: boolean;
export declare const getAndroidMainVersion: () => number;
interface Props extends DOMAttributes<Element> {
    children: any;
    className?: string;
    weight?: string;
}
declare function Font({ className, children, ...restProps }: Props): React.JSX.Element;
export default Font;
