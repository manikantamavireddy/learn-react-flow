import { Handle, NodeProps, Position } from "@xyflow/react";
import { ElectricalComponentNode } from "./types";

import { getElectricalUnitByComponentType } from "./untils";
import ElectricalComponentIcon from "./ElectricalComponentIcon";

type ElectricalComponentProps = NodeProps<ElectricalComponentNode>;

const ElectricalComponent: React.FC<ElectricalComponentProps> = (node) => {
  const unit = getElectricalUnitByComponentType(node.data.type);
  return (
    <div>
      <ElectricalComponentIcon componentType={node.data.type} />
      <p>{`${node.data.value} ${unit}`}</p>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default ElectricalComponent;
