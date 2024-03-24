import { Typography } from "@mui/material";
import { TitleType } from '../../../../../../types/TitleType';



export default function Title({title} : TitleType) {
  return (
    <Typography fontSize='1.2rem' fontWeight='bold' overflow='hidden'>{title}</Typography>
  )
}
