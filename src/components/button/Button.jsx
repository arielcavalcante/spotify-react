import React from 'react'

import './Button.css'

export default function Button({text, color='black-text'}) {
  return (
    <button className={`calltoaction ${color}`}>
      {text}
    </button>
  )
}
