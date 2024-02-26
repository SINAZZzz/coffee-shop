import { Box, Chip } from '@mui/material'
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';



export default function Categories() {
  const {selectedChip , setSelectedChip , categories} = useContext(AppContext)

    if (!categories) {
      return null; 
    } 

  const handleChipClick = (index: number) => {
    setSelectedChip(index);
  }; 
 
  return (
    <Box sx={{width:'100%' , overflowX:'auto' , whiteSpace:'nowrap' , scrollbarWidth:'none'}}>
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