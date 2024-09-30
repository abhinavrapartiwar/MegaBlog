import React from 'react'
import { Children } from 'react'

function Button(
{
  children,
type='button',
bgColor='bg-indigo-900',
textColor='text-white',
className='',
...props
}
) {
  return (
    <button className={`px-4 py-2 rounded-lg ${textColor} ${bgColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button
