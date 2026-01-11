import React from 'react'

export default function Button({ text = 'Button' }){
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded">{text}</button>
  )
}
