import { Typography } from '@mui/material';

type TextAlign ={
  align?: 'left' | 'center' | 'right' | 'justify';
}

interface TitleProps {
    fontSize: number;
    title: string;
    mt?: string;
    mx?: string;
    color?: string;
    textAlign?: TextAlign;
  }

export default function Title({title , fontSize , mt , color , mx , textAlign} :TitleProps) {
  return (
    <Typography
     fontSize={`${fontSize}rem`} fontWeight='bold' mt={mt}
      color={color} mx={mx} textAlign={textAlign}>
        {title}
    </Typography>
  )
} 
