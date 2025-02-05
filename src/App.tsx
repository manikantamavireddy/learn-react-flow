import {
  Background,
  BackgroundVariant,
  ReactFlow,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
  Connection,
  useReactFlow,
} from '@xyflow/react'
import ElectricalComponent from './ElectricalComponent'
import AddNodeContainer from './AddNode'
import Wire from './Wire'
import { useCallback } from 'react'
import { COMPONENT_TYPE } from './types'
import ConnectionLine from './ConnectionLine'
import { isValidConnection } from './untils'
const nodeTypes = { electricalComponent: ElectricalComponent }
const edgeTypes = { wire: Wire }

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState([] as Node[])
  const [edges, setEdges, onEdgesChange] = useEdgesState([] as Edge[])
  const { screenToFlowPosition } = useReactFlow()

  const handleConnect = (connection: Connection) => {
    const edge: Edge = {
      ...connection,
      id: `${Date.now()}`,
      type: 'wire',
    }
    setEdges(previousEdges => previousEdges.concat(edge))
  }

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      const type = event.dataTransfer.getData('component-type')
      if (type?.length) {
        setNodes(previousNodes =>
          previousNodes.concat({
            id: `${Date.now()}`,
            data: { type: type as COMPONENT_TYPE, value: 0 },
            position: screenToFlowPosition({
              x: event.clientX,
              y: event.clientY,
            }),
            type: 'electricalComponent',
          })
        )
      }
    },
    [screenToFlowPosition, setNodes]
  )

  return (
    <div
      style={{ height: '100vh', width: '100%' }}
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnect={handleConnect}
        connectionLineComponent={ConnectionLine}
        isValidConnection={isValidConnection}
      >
        <Background variant={BackgroundVariant.Lines} id="1" />
        <Background
          variant={BackgroundVariant.Lines}
          color="#000"
          gap={100}
          id="2"
        />
        <AddNodeContainer />
      </ReactFlow>
    </div>
  )
}

export default App
