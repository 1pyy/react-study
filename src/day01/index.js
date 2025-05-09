import { createContext, useContext, useRef, useState } from "react";

export default function Day01() {

    let [count1, setCount1] = useState(1)
    const [form, setForm] = useState({
        name: 'pyy'
    })
    const list = [
        { id: 1, name: 'pyy' },
        { id: 2, name: 'pyy1' },
        { id: 3, name: 'pyy2' },
    ]
    const style = {
        color: 'blue',
        fontSize: '20px',
    }
    const isLogin = true;
    const artileType = 2;
    const count = 100

    // 在JSX中可以通过 大括号语法{} 识别 JavaScript中的表达式，比如常见的变量、函数调用、方法调用等等
    // 注意：if语句、switch语句、变量声明属于语句，不是表达式，不能出现在{}中
    function getName() {
        return 'pyy'
    }

    const getArtileType = () => {
        if (artileType == 1) {
            return '文章1'
        } else if (artileType == 2) {
            return '文章2'
        } else if (artileType == 3) {
            return '文章3'
        }
    }

    const clickBtn = (e) => {
        console.log(e, '点击按钮');
    }
    const clickBtn1 = (item) => {
        console.log(item, '点击按钮');
    }
    const clickBtn2 = (item, e) => {
        console.log(item, e, '点击按钮');
    }

    function Button() {
        return <button>按钮</button>
    }

    const handleClick = () => {
        // 错误写法：直接修改，无法更新视图
        // count1++
        // console.log(count1);

        // 正确写法：替换成新值
        setCount1(count1 + 1)
    }


    const handleClick1 = () => {
        // 错误写法：直接修改
        // form.name='lkx'

        // 正确写法：替换成新值
        setForm({
            ...form,
            name: form.name == 'lkx' ? 'pyy' : 'lkx'
        })
    }

    return (
        <div>
            <h1>day01</h1>
            {/* 1，使用引号传递字符串 */}
            {'hhhh'}
            {/* 2,使用js变量 */}
            {count}
            {/* 3,函数调用和方法调用 */}
            {getName()}
            {new Date().getDate()}
            {/* 4,使用js对象 */}
            <div style={{ color: 'red', fontSize: '20px' }}>这是红色文字</div>

            <br /><br />
            {'列表渲染：用map方法，循环哪个结构，就return哪个结构。必须绑定独一无二的key，否则报错'}
            <ul>
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>

            <br /><br />
            <h2>条件渲染</h2>
            {'逻辑与&&:'}
            {isLogin && <div>逻辑与</div>}
            {'三元表达式:'}
            {isLogin ? <span>三元1</span> : <span>三元2</span>}
            {'复杂条件渲染：'}
            {getArtileType()}
            <br /><br />

            <h2>基础事件绑定</h2>
            <button type="button" onClick={clickBtn}>点击</button>
            <br /><br />
            {'传递自定义参数：用箭头函数'}
            <button type="button" onClick={() => clickBtn1('aa')}>点击传参</button>
            <br /><br />
            {'事件对象e+传递自定义参数：'}
            <button type="button" onClick={(e) => clickBtn2('bb', e)}>点击传参</button>
            <br /><br />

            <h2>组件基础使用</h2>
            {'组件：大写字母开头，渲染组件只需要把组件当成标签书写即可'}<br />
            {/* 成对标签 */}
            <Button></Button>
            {/* 自闭合 */}
            <Button />
            <br /><br />

            <h2>useState基础使用</h2>
            {'useState 是一个 React Hook（函数），它允许我们向组件添加一个状态变量, 从而控制影响组件的渲染结果和普通JS变量不同的是，状态变量一旦发生变化组件的视图UI也会跟着变化（数据驱动视图）'}
            <button onClick={() => handleClick()}>{count1}</button>
            <br /><br />

            {'修改状态规则：在React中状态被认为是只读的，我们应该始终替换它而不是修改它, 直接修改状态不能引发视图更新'}
            <br /><br />

            {'对于对象类型的状态变量，应该始终给set方法一个全新的对象 来进行修改'}

            <button onClick={() => handleClick1()}>修改对象{form.name}</button>

            <h2>基础样式控制：</h2>
            <div style={style}>1，行内样式控制:</div>
            <div className="foo">2，class类名控制,必须叫className</div>
            <br /><br />

        </div>
    )
}


