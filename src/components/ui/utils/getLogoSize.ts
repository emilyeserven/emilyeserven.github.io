import type { LogoMode, LogoSize } from "@/components/ui/Logo.tsx";

interface GetLogoSizeProps {
  size: LogoSize;
  mode: LogoMode;
}

interface LogoSizeObject {
  width: number;
  height: number;
  viewBox: string;
}
export default function getLogoSize({
  size = "md",
  mode = "full",
}: GetLogoSizeProps): LogoSizeObject {
  // Define the base width and height
  // Default is for "full" mode + "md" size
  let width = 350,
    height = 66,
    viewBox = "0 0 720 137";

  switch (mode) {
    case "icon":
      width = 67;
      height = 38;
      viewBox = "0 0 125 80";
      break;
    case "arrow":
      width = 18;
      height = 28;
      viewBox = "90 10 40 58";
      break;
  }

  switch (size) {
    case "xs":
      return {
        width: width / 3,
        height: height / 3,
        viewBox,
      };
    case "sm":
      return {
        width: width / 2,
        height: height / 2,
        viewBox,
      };
    case "lg":
      return {
        width: width * 2,
        height: height * 2,
        viewBox,
      };
    default:
      return {
        width,
        height,
        viewBox,
      };
  }
}
