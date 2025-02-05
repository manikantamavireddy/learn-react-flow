import { ConnectionLineComponent, getSimpleBezierPath } from '@xyflow/react'

const ConnectionLine: ConnectionLineComponent = ({
  toX,
  toY,
  fromX,
  fromY,
  connectionStatus,
}) => {
  const color = connectionStatus === 'valid' ? 'black' : 'red'
  const [d] = getSimpleBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  })
  return <path fill="none" d={d} stroke={color} strokeWidth="1.5" />
}

export default ConnectionLine
