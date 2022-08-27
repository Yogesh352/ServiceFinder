import React from "react";
import { Box, Button, Group, Text } from "@mantine/core";
import image from "../../background/LandingPageBackground.png";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Landing = () => {
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",

    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle} className="flex h-screen justify-center items-center">
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={0}
        alignItems="flex-end"
      >
        <Grid item className="pr-10">
          <Box className="font-['Goldman_Sans'] bg-white text-black font-extrabold text-7xl pb-20 pr-4 pl-4 w-80 h-80 align-bottom inline-block">
            Goldman Sachs
          </Box>
        </Grid>
        <Grid item>
          <Box className="flex flex-col p-4 space-y-8 bg-slate-50 bg-opacity-25 align-middle justify-center h-[526px] w-[762px] ">
            <Text className="text-white inline-block align-middle text-8xl  ">
              Get Started
            </Text>
            <Text className="text-white inline-block align-middle text-lg">
              Choose from an extensive array of features from our financial
              cloud to suit the needs of your application
            </Text>
            <Link to="/solutions">
              <Button className="bg-black text-base w-[194px] rounded-full">
                Get Started
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
