import { Battery, Bulb, Capacitor, Inductor, Resistor } from "./icons";
import { COMPONENT_TYPE } from "./types";

const ElectricalComponentIcon: React.FC<{
  componentType: COMPONENT_TYPE;
  height?: number;
}> = ({ componentType, height = 24 }) => {
  switch (componentType) {
    case COMPONENT_TYPE.BATTERY:
      return <Battery height={height} />;
    case COMPONENT_TYPE.RESISTOR:
      return <Resistor height={height} />;
    case COMPONENT_TYPE.CAPACITOR:
      return <Capacitor height={height} />;
    case COMPONENT_TYPE.INDUCTOR:
      return <Inductor height={height} />;
    case COMPONENT_TYPE.BULB:
      return <Bulb height={height} />;
    default:
      return null;
  }
};

export default ElectricalComponentIcon;
