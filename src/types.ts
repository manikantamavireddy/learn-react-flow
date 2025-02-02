import { Node } from "@xyflow/react";

export enum COMPONENT_TYPE {
  BATTERY = "BATTERY",
  RESISTOR = "RESISTOR",
  CAPACITOR = "CAPACITOR",
  INDUCTOR = "INDUCTOR",
  BULB = "BULB",
}

export type ElectricalComponentData = { type: COMPONENT_TYPE; value: number };

export type ElectricalComponentNode = Node<ElectricalComponentData, "string">;
