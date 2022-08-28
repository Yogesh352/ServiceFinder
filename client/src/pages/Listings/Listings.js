import { Box, Button, Group, Stack, Text } from "@mantine/core";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../background/SolutionsBackground.png";
import Solutions from "./Solutions/Solutions";

const Listings = () => {
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
          <Solutions />
        </Grid>
        <Grid item>
          <Box className="bg-certainblue-100 p-4">
            <Stack>
              <Text className="text-white text-lg">
                Not sure what you need?
              </Text>
              <Text className="text-white text-sm">
                Let us guide you through a tailor made experience to find just
                what you need
              </Text>
              <Link to="/form">
                <Group position="right">
                  <Button className="bg-white w-34 text-black rounded-full">
                    Get Help
                  </Button>
                </Group>
              </Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Listings;
