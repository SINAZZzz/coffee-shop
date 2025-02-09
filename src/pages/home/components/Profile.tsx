import { Avatar, Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProfileImg from "../../../assets/img/Profile.jpg";
export default function Profile() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my="2rem"
      mx="2%"
    >
      <Box>
        <Typography color="#B7B7B7">Location</Typography>
        <Box display="flex" alignItems="center">
          <Typography
            color="#DDDDDD"
            sx={{ fontWeight: 600, fontSize: "20px" }}
          >
            Iran, Kashan
          </Typography>
          <IconButton>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Avatar sx={{ backgroundColor: "transparent" }} variant="rounded">
          <Box
            component="img"
            src={ProfileImg}
            sx={{ width: "3rem", borderRadius: "10px" }}
            alt="Profile"
            onClick={() =>
              window.open("https://my-blog-ten-ebon.vercel.app/", "_blank")
            }
          />
        </Avatar>
      </Box>
    </Box>
  );
}
