import React from 'react'
import Card from "./Card"

export default function CardList() {
  const img = '/p1.jpeg'
  return (
    <div className='container text-white'>
    <div className="title my-8">Recent Posts</div>
    <div className="posts">
        <div className="post space-y-6">
        <Card img={img} category ="CULTURE" link = "CULTURE"/>
        <Card img ={img} category="FASION" link="FASION"/>
        </div>
    </div>
    </div>
  )
}
