/*
 * @Author: hft
 * @Date: 2022-04-07 16:03:02
 * @LastEditors: hft
 * @LastEditTime: 2022-04-07 16:09:12
 * @Description: file content
 */
import React from 'react'
type UserInfo = {
    name: string,
    age: number,
}
// export default function ExampleOne() {
//     return (
//         <div>index</div>
//     )
// }
 const ExampleOne: React.FC<UserInfo> = ({ name, age }) => {
    return (
        <div className="User">
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}
export default ExampleOne
