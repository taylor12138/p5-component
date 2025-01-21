import React, { DOMAttributes } from 'react';
import './index.less';
interface Props extends DOMAttributes<Element> {
    content: string;
    selected_font_color?: string;
    font_color?: string;
    selected_bg_color?: string;
}
declare function Title({ content, selected_font_color, font_color, selected_bg_color, }: Props): React.JSX.Element;
export default Title;
