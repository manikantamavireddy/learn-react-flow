import React, { useCallback } from 'react'
import { COMPONENT_TYPE } from './types'
import ElectricalComponentIcon from './ElectricalComponentIcon'
const AddNodeContainer: React.FC = () => {
  const handleDragstart = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setDragImage(event.target as HTMLDivElement, 0, 0)
      ;(event.target as HTMLDivElement).classList.add('dragging')
      const componentType = (event.target as HTMLDivElement).getAttribute(
        'data-component-type'
      )
      if (componentType) {
        event.dataTransfer.setData('component-type', componentType)
      }
    },
    []
  )

  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = useCallback(
    event => (event.target as HTMLDivElement).classList.remove('dragging'),
    []
  )

  return (
    <div
      className="p-4 border-2 border-solid border-blue-500 z-10 absolute top-12 right-12 flex flex-col gap-4 bg-amber-300"
      onDragStart={handleDragstart}
      onDragEnd={handleDragEnd}
    >
      {Object.values(COMPONENT_TYPE).map(type => (
        <div key={type} data-component-type={type} draggable>
          <ElectricalComponentIcon componentType={type} />
        </div>
      ))}
    </div>
  )
}

export default AddNodeContainer
