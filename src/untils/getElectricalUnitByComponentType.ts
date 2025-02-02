import { COMPONENT_TYPE } from "../types";

export const getElectricalUnitByComponentType = (
  componentType: COMPONENT_TYPE
) => {
  switch (componentType) {
    case "BATTERY":
      return "V";
    case "RESISTOR":
      return "Ω";
    case "CAPACITOR":
      return "F";
    case "INDUCTOR":
      return "H";
    case "BULB":
      return "W";
    default:
      return "";
  }
};
