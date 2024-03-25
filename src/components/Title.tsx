import { Typography } from '@mui/material';
import { TitleProps } from '../interfaces/TitleProps';

export default function Title({title , fontSize , mt , color , mx , textAlign} :TitleProps) {
  return (
    <Typography
     fontSize={`${fontSize}rem`} fontWeight='bold' mt={mt}
      color={color} mx={mx} textAlign={textAlign}>
        {title}
    </Typography>
  )
} 
