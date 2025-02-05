import { Connection, Edge } from '@xyflow/react'

export const isValidConnection = (connection: Connection | Edge) => {
  return connection.source !== connection.target
}
