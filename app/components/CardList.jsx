import React from 'react'
import Card from "./Card"

export default function CardList() {
  return (
    <div className='container text-white'>
    <div className="title my-8">Recent Posts</div>
    <div className="posts">
        <div className="post">
        <Card/>
        </div>
    </div>
    </div>
  )
}
