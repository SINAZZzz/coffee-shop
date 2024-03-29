import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import useWindowSize from '../../../functions/Utility';

export default function BtnNavigation() {
    const [selected, setSelected] = useState<number | undefined>(0);
    
    const handleChipClick = (index: number) => {
        setSelected(index);
    };
  
    const iconStyles = { color: '#8D8D8D' };
    const selectedIconStyles = { color: '#C67C4E' };

    const { width } = useWindowSize();

  return (
    <BottomNavigation
              sx={{
                width: "100%",
                position: "fixed",
                bottom: 0,
                borderRadius:'1rem 1rem 0rem 0rem',
                height:'5rem',
              }}
              showLabels
            >
              <BottomNavigationAction 
                icon={<HomeIcon sx={selected === 0 ? selectedIconStyles : iconStyles} />}  
                onClick={() => handleChipClick(0)}
              />
              <BottomNavigationAction 
                icon={<FavoriteIcon sx={selected === 1 ? selectedIconStyles : iconStyles} />} 
                onClick={() => handleChipClick(1)}
              />
              <BottomNavigationAction 
                icon={<ShoppingBagIcon sx={selected === 2 ? selectedIconStyles : iconStyles} />}  
                onClick={() => handleChipClick(2)}
              />
              <BottomNavigationAction 
                icon={<NotificationsIcon sx={selected === 3 ? selectedIconStyles : iconStyles} />}  
                onClick={() => handleChipClick(3)}
              />
              {[0, 1, 2, 3].map((index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: "calc(100% - 20px)",
                    left: width > 670 ? `calc(${19.8 + index * 22}% - 2.8%)` : `calc(${20 + index * 25}% - 7.5%)`,
                    transform: "translate(-50%, -50%)",
                    width: width > 670 ? "20px" : "15px",
                    height: "9px",
                    borderRadius: "20px",
                    background: selected === index ? "linear-gradient(to left bottom, #C67C4E, #EDAB81)" : "transparent",
                    zIndex: 3
                  }}
                />
              ))} 
          </BottomNavigation>
  )
}
