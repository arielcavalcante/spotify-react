import React from 'react'

import './Button.css'

export default function Button({text}) {
  return (
    <button className='calltoaction'>
      {text}
    </button>
  )
}
