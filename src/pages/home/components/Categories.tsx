import { Box, Chip } from '@mui/material'
import { useState } from 'react'
import { handleChipClick } from '../../../functions/handleChipClick';
const categories = ['Cappuccino', 'Machiato', 'Latte', 'Category 4', 'Category 5'];

export default function Categories() {

  
  return (
    <Box sx={{width:'100%' , overflowX:'auto' , whiteSpace:'nowrap' , scrollbarWidth:'none'}} className='categories-div'>
        {categories.map((category, index) => (
                <Chip
                key={index}
                label={category}
                variant="outlined"
                style={{borderRadius:'10px',
                    margin: '1rem 5px',
                    backgroundColor: selectedChip === index ? '#C67C4E' : '#ffffff',
                    color: selectedChip === index ? '#ffffff' : '#000000',
                    border:'none'
                }}
                 onClick={() => handleChipClick(index)}
            />
        ))}
    </Box>
  )
}
