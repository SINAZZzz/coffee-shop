import { Typography } from '@mui/material';

interface TitleProps {
  fontSize: number;
  title: string;
  mt?: string;
}

export default function Title({ fontSize, title , mt }: TitleProps) {
  return (
    <Typography fontSize={`${fontSize}rem`} fontWeight='bold' mt={mt}>
      {title}
    </Typography>
  );
}
