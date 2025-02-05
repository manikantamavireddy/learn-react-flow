import { NodeProps, Position } from '@xyflow/react'
import { ElectricalComponentNode } from './types'

import { getElectricalUnitByComponentType } from './untils'
import ElectricalComponentIcon from './ElectricalComponentIcon'
import Terminal from './Terminal'

type ElectricalComponentProps = NodeProps<ElectricalComponentNode>

const ElectricalComponent: React.FC<ElectricalComponentProps> = node => {
  const unit = getElectricalUnitByComponentType(node.data.type)
  return (
    <div className="node" tabIndex={0}>
      <ElectricalComponentIcon componentType={node.data.type} />
      <p className="text-sm absolute">{`${node.data.value} ${unit}`}</p>
      <Terminal type="source" position={Position.Right} />
      <Terminal type="target" position={Position.Left} />
    </div>
  )
}

export default ElectricalComponent
