import { Box, Button, Group, Modal, Space, Stack, Text } from "@mantine/core";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddedServicesContext } from "../../App";
import image from "../../background/SolutionsBackground.png";
import axios from "../../axios/axios";
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Summary = () => {
  const navigate = useNavigate();
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",
    padding: "10px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const { services, setServices, userData, setUserData } =
    useContext(AddedServicesContext);
  console.log(services);
  console.log(userData);
  const [opened, setOpened] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/client/add", { ...userData }).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    for (let i = 0; i < services.length; i++) {
      let addingService = services[i];
      let newID = randomIntegerInRange(-21474836, 21474836);
      await axios
        .post("/addedfeatures/add", {
          sid: newID,
          name: addingService,
          client: {
            clientID: userData.clientID,
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
    navigate("/ending");
  };
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
        <form onSubmit={handleSubmit}>
          <Group position="right">
            <Button className="bg-black" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button className="bg-black" type="submit">
              Confirm
            </Button>
          </Group>
        </form>
      </Modal>
      <Text className="text-white text-7xl">Summary</Text>
      <Text className="text-white text-xl">User Details</Text>
      {userData.name !== undefined && (
        <Box className="bg-black bg-opacity-50 rounded-sm p-4 space-y-4 w-[600px]">
          <Text
            className="font-semibold
          text-white
          text-xl"
          >{`Name: ${userData.name}`}</Text>

          <Text
            className="font-semibold
          text-white
          text-xl"
          >{`Industry: ${userData.industry}`}</Text>
        </Box>
      )}

      <Text className="text-white text-xl">
        These are the services you have selected. Please confirm before clicking
        continue
      </Text>
      <Space h="lg" />

      {services.length !== 0 ? (
        <Box className="bg-black bg-opacity-50 rounded-sm p-4 w-[600px]">
          {services.map((service) => (
            <Group className="pb-4" position="apart">
              <Text className="font-semibold text-white text-lg">
                {service}{" "}
              </Text>
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
