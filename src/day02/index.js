import { createContext, useContext, useRef, useState } from "react";

export default function Day02() {
    const [inpValue, setInputVal] = useState('')
    const [msg, setMsg] = useState('')
    const [cename, setName] = useState('')
    const msg1 = 'this is app msg'
    const MsgContext = createContext()


    // 1、useRef生成一个ref对象，绑定到dom元素上
    const inpValRef = useRef(null)
    const showDom = () => {
        // 2、dom可用时，ref.current获取dom元素
        console.log(inpValRef.current);
        console.dir(inpValRef.current);
    }

    const getMsg = (msg) => {
        console.log(msg);
        setMsg(msg)
    }

    const getAName = (name) => {
        console.log(name);
        setName(name)
    }



    const Son = (props) => {
        console.log(props);
        // props.name='pyy'
        return <div>this is son name:{props.name} {props.children}</div>
    }

    const Son1 = ({ onGetMsg }) => {
        const sonMsg = 'this is sonMsg'
        return <div>this is son
            <button type="button" onClick={() => onGetMsg(sonMsg)}>send</button>
        </div>
    }

    const A = ({ onGetAName }) => {
        const name = 'this is A name'
        return (
            <div>
                this is A
                <button type="button" onClick={() => onGetAName(name)}>send</button>
            </div>
        )
    }

    const B = ({ name }) => {
        return (
            <div>
                this is B,{name}
            </div>
        )
    }

    const D = () => {
        const msg1 = useContext(MsgContext)
        return (
            <div>
                this is D,{msg1}
            </div>
        )
    }

    const C = ({ name }) => {
        return (
            <div>
                this is C
                <D></D>
            </div>
        )
    }

    return (
        <div>
            <h1>Day 02</h1>
            <h2>表单受控绑定</h2>
            <input type="text" value={inpValue} onChange={(e) => setInputVal(e.target.value)} />
            <input type="text" ref={inpValRef} />
            <br /><br />

            <button onClick={showDom}>useRef钩子函数获取dom</button>

            <br /><br />
            <h2>组件通信：父传子</h2>
            <div>1,props可以传递任意的合法数据，比如数字、字符串、布尔值、数组、对象、函数、JSX。</div>
            <div>2,props是只读对象,子组件只能读取props中的数据，不能直接进行修改, 父组件的数据只能由父组件修改</div>

            <Son name={cename} age={10} isSon={true} obj={{ name: 'lkx' }} arr={[1, 2, 3]} cb={() => console.log('cb')} child={<div>hhh</div>}>
                <span>jjjj</span>
            </Son>

            <br /><br />
            <h2>组件通信：子传父。</h2>
            <div>核心：在子组件中调用父组件中的函数并传递实参</div>
            <div>
                this is app,{msg}
                <Son1 onGetMsg={getMsg}></Son1>
            </div>

            <br /><br />
            <h2>兄弟通信：</h2>
            <div>1，子组件向父组件传递数据 A传app</div>
            <div>2，父组件向子组件传递数据 app传B</div>
            <A onGetAName={getAName}></A>
            <B name={cename}></B>

            <br /><br />
            <h2>跨层组件通信:</h2>
            <div>
                1. 使用 createContext方法创建一个上下文对象Ctx<br />
                2. 在顶层组件（App）中通过 Ctx.Provider 组件提供数据<br />
                3. 在底层组件（B）中通过 useContext 钩子函数获取消费数据
            </div>
            <MsgContext.Provider value={msg1}>
                this is app
                <C></C>
            </MsgContext.Provider>


            <br /><br />
            <h2>React副作用管理-useEffect</h2>
            <div></div>
        </div>
    )
}