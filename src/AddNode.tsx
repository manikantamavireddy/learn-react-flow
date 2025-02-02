import React, { useCallback } from "react";
import { COMPONENT_TYPE } from "./types";
import ElectricalComponentIcon from "./ElectricalComponentIcon";
import { Node } from "@xyflow/react";
const AddNodeContainer: React.FC<{
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
}> = ({ setNodes }) => {
  const handleAddNode = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const type = event.currentTarget.getAttribute("data-component-type");
      if (type?.length) {
        setNodes((previousNodes) =>
          previousNodes.concat({
            id: `${Date.now()}`,
            data: { type: type as COMPONENT_TYPE, value: 0 },
            position: { x: 0, y: 0 },
            type: "electricalComponent",
          })
        );
      }
    },
    [setNodes]
  );
  return (
    <div className="p-4 border-2 border-solid border-blue-500 z-10 bg-white absolute top-12 right-12 flex flex-col gap-4">
      {Object.values(COMPONENT_TYPE).map((type) => (
        <button key={type} data-component-type={type} onClick={handleAddNode}>
          <ElectricalComponentIcon componentType={type} />
        </button>
      ))}
    </div>
  );
};

export default AddNodeContainer;
