import React from 'react'

function Button({value, inputHandler, operation, displayValue}) {
  return (
    <button data-value={value} onClick={(e)=>inputHandler(e.target.dataset.value)} className={`digit ${operation}`}>{displayValue|| value}</button>

  )
}

export default Button