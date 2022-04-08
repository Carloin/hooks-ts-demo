/*
 * @Author: hft
 * @Date: 2022-04-07 16:40:40
 * @LastEditors: hft
 * @LastEditTime: 2022-04-07 16:40:57
 * @Description: file content
 */
import React, { useState } from 'react'

type ArticleInfo = {
    title: string,
    content: string
}

const ExampleTwo: React.FC<ArticleInfo> = ({ title, content }) => {
    const [article, setArticle] = useState<ArticleInfo>({ title, content })

    return (
        <div>
            <p>Title: {article.title}</p>
            <section>{article.content}</section>
            <button onClick={() => setArticle({
                title: '下一篇',
                content: '下一篇的内容',
            })}>
                下一篇
            </button>
        </div>
    )
}

export default ExampleTwo