interface LogoSizeObject {
    width: number;
    height: number;
    viewBox: string
}
export default function getLogoSize({size = "md", isTextShown = true}): LogoSizeObject {
    // Define the base width and height
    let width = 350,
        height = 66,
        viewBox = "0 0 720 137";

    // Change it if text isn't shown
    if (!isTextShown) {
        width = 67;
        height = 38;
        viewBox = "0 0 125 80";
    }

    // Modify the base width and heights for size options
    if (size === "sm") {
        return {
            width: width / 2,
            height: height / 2,
            viewBox
        }
    }
    if (size === "lg") {
        return {
            width: width * 2,
            height: height * 2,
            viewBox
        }
    }

    return {
        width, height, viewBox
    }
}