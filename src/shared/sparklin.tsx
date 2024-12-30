import { Sparkline } from "@mantine/charts";

interface SparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  curveType?: "linear" | "curve" | "step";
  fillOpacity?: number;
  strokeWidth?: number;
}

const SparklineShared: React.FC<SparklineProps> = ({
  data,
  color = "blue",
  width = 200,
  height = 60,
  curveType = "linear",
  fillOpacity = 0.6,
  strokeWidth = 2,
}) => {
  return (
    <Sparkline
      w={width}
      h={height}
      data={data}
      curveType="linear"
      color={color}
      fillOpacity={fillOpacity}
      strokeWidth={strokeWidth}
    />
  );
};

export default SparklineShared;
