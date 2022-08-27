import { Box, Button, Group, Modal, Space, Stack, Text } from "@mantine/core";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddedServicesContext } from "../../App";
import image from "../../background/SolutionsBackground.png";

const Summary = () => {
  const navigate = useNavigate();
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",

    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const { services, setServices } = useContext(AddedServicesContext);
  const [opened, setOpened] = useState(false);
  return (
    <div
      style={myStyle}
      className="flex flex-col h-screen justify-center items-center space-y-4 "
    >
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Confirmation"
      >
        Are you sure you want to continue with the selected services?
        <Group position="right">
          <Button className="bg-black" onClick={() => setOpened(false)}>
            Cancel
          </Button>
          <Button className="bg-black" onClick={() => navigate("/ending")}>
            Confirm
          </Button>
        </Group>
      </Modal>
      <Text className="text-white text-7xl">Summary</Text>

      <Text className="text-white text-xl">
        These are the services you have selected. Please confirm before clicking
        continue
      </Text>
      <Space h="lg" />
      {services.length !== 0 ? (
        <Box className="bg-white rounded-sm p-4 w-[600px]">
          {services.map((service) => (
            <Group className="pb-4" position="apart">
              <Text className="font-semibold text-lg">{service} </Text>
              <Button
                className="bg-red-500"
                onClick={(event) => {
                  setServices((current) =>
                    current.filter((selected) => {
                      return selected !== service;
                    })
                  );
                }}
              >
                Delete
              </Button>
            </Group>
          ))}
        </Box>
      ) : (
        <Text className="text-white text-xl">
          No services have been selected
        </Text>
      )}
      <Group position="apart">
        <Button onClick={() => navigate("/walkthrough")} className="bg-black">
          Return to walkthrough
        </Button>

        <Button onClick={() => setOpened(true)} className="bg-black">
          Continue
        </Button>
      </Group>
    </div>
  );
};

export default Summary;
