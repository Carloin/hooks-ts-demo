/*
 * @Author: hft
 * @Date: 2022-04-08 10:48:10
 * @LastEditors: hft
 * @LastEditTime: 2022-04-08 11:18:36
 * @Description: file content
 */
import React, { useMemo, useCallback } from 'react'

type Data = {
    time: number
}
// 子组件
const Show: React.FC<Data> = ({ time, children }) => {
    function changeTime(time: number): string {
        console.log('changeTime excuted...')
        return new Date(time).toISOString()
    }

    const getNewTime = useCallback(() => {
        return changeTime(time)
    }, [time])

    return (
        <div>
            <p>Time is: {getNewTime()}</p>
            <p>Random is: {children}</p>
        </div>
    )
}
export default Show