/*
 * @Author: hft
 * @Date: 2022-04-08 10:46:25
 * @LastEditors: hft
 * @LastEditTime: 2022-04-08 10:53:51
 * @Description: file content
 */
import React, { useState, useMemo } from 'react'
import Show from './sub'
// 父组件
const ExampleFive = () => {
    const [time, setTime] = useState<number>(0)
    const [random, setRandom] = useState<number>(0)

    return (
        <div>
            <button onClick={() => setTime(new Date().getTime())}>获取当前时间</button>
            <button onClick={() => setRandom(Math.random())}>获取当前随机数</button>
            <Show time={time}>{random}</Show>
        </div>
    )
}
export default ExampleFive