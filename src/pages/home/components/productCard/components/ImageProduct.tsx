import { Box } from "@mui/material";
import { ImageType } from "../../../../../types/CompoType";

export default function ImageProduct({ image }: ImageType) {
  return <Box sx={{ width: "94%", m: "0.3rem" }} component="img" src={image} />;
}
