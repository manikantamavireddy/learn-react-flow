import { Handle, HandleProps } from '@xyflow/react'
import React from 'react'

const Terminal: React.FC<HandleProps> = props => {
  return (
    <Handle
      {...props}
      style={{
        background: 'transparent',
        width: '0.5rem',
        height: '0.5rem',
        border: '2px solid black',
        padding: '1px',
      }}
    />
  )
}

export default Terminal
