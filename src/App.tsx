import {
  Background,
  BackgroundVariant,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
  Connection,
} from "@xyflow/react";
import ElectricalComponent from "./ElectricalComponent";
import AddNodeContainer from "./AddNode";
import Wire from "./Wire";
const nodeTypes = { electricalComponent: ElectricalComponent };
const edgeTypes = { wire: Wire };

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([] as Node[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([] as Edge[]);

  const handleConnect = (connection: Connection) => {
    const edge: Edge = {
      ...connection,
      id: `${Date.now()}`,
      type: "wire",
    };
    setEdges((previousEdges) => previousEdges.concat(edge));
  };

  return (
    <ReactFlowProvider>
      <div style={{ height: "100vh", width: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onConnect={handleConnect}
        >
          <Background variant={BackgroundVariant.Lines} />
          <AddNodeContainer setNodes={setNodes} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}

export default App;
