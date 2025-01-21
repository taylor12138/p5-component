import React, { DOMAttributes } from 'react';
import './index.less';
interface Props extends DOMAttributes<Element> {
    top: number;
    left: number;
    character?: string;
    content: string;
    handleClose?: () => void;
}
declare function DialogBox({ top, left, character, content, handleClose }: Props): React.JSX.Element;
export declare const showDialog: ({ top, left, content, character, }: {
    top: number;
    left: number;
    content: string;
    character?: string | undefined;
}) => () => void;
export default DialogBox;
