import React from 'react'

import './Button.css'

export default function Button({text, color='black-text', disabled=false}) {
  return (
    <button className={`calltoaction ${color} ${disabled ? 'disabled' : ''}`} disabled={disabled}>
      {text}
    </button>
  )
}
