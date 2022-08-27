import { Box, Button, Group, Stack, Text } from "@mantine/core";
import React, { useContext } from "react";
import image from "../../background/LandingPageBackground.png";
import { useNavigate } from "react-router-dom";
import { AddedServicesContext } from "../../App";

const Ending = () => {
  const navigate = useNavigate();
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",

    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const { setServices } = useContext(AddedServicesContext);
  return (
    <div style={myStyle} className="flex h-screen justify-center items-center">
      <Box className="flex flex-col p-4 space-y-10 bg-black bg-opacity-30 align-middle justify-center  w-[762px] ">
        <Stack spacing={0}>
          <Text className="text-certainPurple-100">DESIGNED BY YOU</Text>
          <Text className="text-white">POWERED BY GOLDMAN SACHS</Text>
        </Stack>
        <Stack spacing={0}>
          <Text className="text-lg text-white">
            Your response has been received.
          </Text>
          <Text className="text-lg text-white">
            The Goldman Sachs team will reach out to you shortly.{" "}
          </Text>
          <Group position="right">
            <Button
              onClick={() => {
                setServices([]);
                navigate("/");
              }}
              className="text-white border-white rounded-full"
              size="lg"
              variant="outline"
            >
              Return to Homepage
            </Button>
          </Group>
        </Stack>
      </Box>
    </div>
  );
};

export default Ending;
