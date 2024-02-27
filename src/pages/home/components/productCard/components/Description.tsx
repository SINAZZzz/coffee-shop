import { Typography } from '@mui/material'
import { CardProductProps } from '../../../../../../types/CardProductProps';



export default function Description({description} : CardProductProps) {
  return (
    <Typography fontSize='1rem' color='#9B9B9B'>{description}</Typography>
  )
}
