/*
 * @Author: hft
 * @Date: 2022-04-07 17:21:34
 * @LastEditors: hft
 * @LastEditTime: 2022-04-07 17:27:42
 * @Description: file content
 */
import React, { useEffect } from 'react'

const ExampleThree: React.FC = () => {
    useEffect(() => {
        const handler = () => {
            document.title = Math.random().toString()
        }

        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])
    return (
        <div>ExampleThree</div>
    )
}
export default ExampleThree