import { Typography } from "@mui/material";
import { CardProductProps } from "../../../../../../types/CardProductProps";

export default function Title({title} : CardProductProps) {
  return (
    <Typography fontSize='1.2rem' fontWeight='bold'>{title}</Typography>
  )
}
