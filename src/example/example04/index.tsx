/*
 * @Author: hft
 * @Date: 2022-04-08 09:40:54
 * @LastEditors: hft
 * @LastEditTime: 2022-04-08 10:28:52
 * @Description: file content
 */
import React, { useState, useEffect, useRef } from 'react'

const ExampleFour = () => {
    const [count, setCount] = useState<number>(0)
    const preCountRef = useRef<number>(count)

    useEffect(() => {
        preCountRef.current = count
    })


    return (
        <div>
            <p>pre count: {preCountRef.current}</p>
            <p>current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>加</button>
        </div>
    )
}
export default ExampleFour