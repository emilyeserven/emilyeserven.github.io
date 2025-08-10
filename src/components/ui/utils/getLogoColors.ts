interface GetLogoColorsObject {
  theme: string;
  isStrokeShown: boolean;
}

interface LogoColorObject {
  bracketColor: string;
  sFillColor: string;
  sStrokeColor: string;
  textColor: string;
}

export default function getLogoColors({
  theme = "color",
  isStrokeShown = false,
}: GetLogoColorsObject): LogoColorObject {
  const colorBlack = "#000",
    colorWhite = "#FFF",
    colorDarkBlue = "#0C4D9D",
    colorLightBlue = "#BAD7ED";

  if (theme === "black") {
    return {
      bracketColor: colorBlack,
      sFillColor: colorBlack,
      sStrokeColor: colorBlack,
      textColor: colorBlack,
    };
  }
  if (theme === "white") {
    return {
      bracketColor: colorWhite,
      sFillColor: colorWhite,
      sStrokeColor: colorWhite,
      textColor: colorWhite,
    };
  }
  return {
    bracketColor: colorDarkBlue,
    sFillColor: colorLightBlue,
    sStrokeColor: isStrokeShown ? colorDarkBlue : colorLightBlue,
    textColor: colorBlack,
  };
}
