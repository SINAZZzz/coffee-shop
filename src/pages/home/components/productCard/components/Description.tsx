import { Typography } from "@mui/material";
import { DescriptionType } from "../../../../../types/CompoType";

export default function Description({ description }: DescriptionType) {
  return (
    <Typography fontSize="1rem" color="#9B9B9B">
      {description}
    </Typography>
  );
}
