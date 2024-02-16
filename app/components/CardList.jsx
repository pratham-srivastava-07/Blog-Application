import React from 'react'
import Card from "./Card"

export default function CardList() {
  const img = '/p1.jpeg'
  return (
    <div className='container w-1/2 text-white'>
    <div className="title my-8">Recent Posts</div>
    <div className="posts">
        <div className="post space-y-6">
        <Card img={img} category ="CULTURE" link = "CULTURE"/>
        <Card img ={img} category="FASHION" link="FASHION"/>
        <Card img ={img} category="CODING" link="CODING"/>
        </div>
    </div>
    </div>
  )
}
