import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useWindowSize from "../../../../../functions/Utility";
import { priceType } from "../../../../../types/CompoType";

export default function Price({ price, onClick }: priceType) {
  const { width } = useWindowSize();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my="1rem"
    >
      <Typography
        fontWeight="bold"
        sx={{ fontSize: width > 375 ? "1.5rem" : "1rem" }}
      >
        ${price.toFixed(2)}
      </Typography>
      <Box
        component="button"
        sx={{
          background: "#C67C4E",
          color: "white",
          height: width > 375 ? "2.5rem" : "2rem",
          width: width > 375 ? "2.5rem" : "2rem",
          borderRadius: width > 375 ? "15px" : "12px",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <AddIcon />
      </Box>
    </Box>
  );
}
