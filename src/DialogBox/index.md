---
nav: 怪盗组件
---

# DialogBox

## 怪盗对话框
## 案例演示

```jsx
import { showDialog, Title } from 'p5-react-component';

export default () => {
    const onClick = () => {
        showDialog({
            top: 200, left: 100, content: '泥嚎泥嚎'
        })
    }
    return (
        <div>
            <div onClick={onClick}>
                <Title content="请点击我，谢谢"/>
            </div>
        </div>
    )
}
```
