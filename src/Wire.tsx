import { BaseEdge, EdgeProps, getSmoothStepPath } from '@xyflow/react'

const Wire: React.FC<EdgeProps> = ({ sourceX, sourceY, targetX, targetY }) => {
  const [d] = getSmoothStepPath({ sourceX, sourceY, targetX, targetY })
  return <BaseEdge path={d} stroke="black" strokeWidth={1.5} fill="none" />
}

export default Wire
