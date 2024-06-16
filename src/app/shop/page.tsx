import React from 'react'
import Link from 'next/link';
import Card from '@/Components/Card/Card';


function shop() {
  return (

    <div className='w-screen flex-col justify-center items-center bg-yellow-500'>
      <h1>Shop</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

    </div>
  )
}

export default shop