import { Box, Button, Group, Text, TextInput } from "@mantine/core";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddedServicesContext } from "../../App";
import image from "../../background/SolutionsBackground.png";
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const Form = () => {
  const { userData, setUserData } = useContext(AddedServicesContext);
  const [clientData, setClientData] = useState({
    clientID: 0,
    name: "",
    industry: "",
  });
  const navigate = useNavigate();
  const myStyle = {
    backgroundImage: `url(${image})`,
    height: "100vh",

    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newID = randomIntegerInRange(-21474836, 21474836);

    await setUserData({ ...clientData, clientID: newID });
    navigate("/walkthrough");
    clear();
  };

  const clear = () => {
    setClientData({
      name: "",
      industry: "",
    });
  };

  return (
    <div style={myStyle} className="flex h-screen justify-center items-center">
      <Box className="bg-black bg-opacity-40 p-4 rounded-md">
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Text className="text-5xl text-white font-bold">
            Client Particulars
          </Text>

          <TextInput
            label="Title"
            required
            className="w-full p-2"
            size="lg"
            placeholder="Name"
            value={clientData.name}
            onChange={(e) =>
              setClientData({ ...clientData, name: e.target.value })
            }
          />
          <TextInput
            label="Industry"
            className="w-full p-2"
            required
            size="lg"
            placeholder="Industry"
            value={clientData.industry}
            onChange={(e) =>
              setClientData({ ...clientData, industry: e.target.value })
            }
          />

          <Group position="right">
            <Button
              className="bg-black rounded full"
              color="primary"
              type="submit"
            >
              Continue
            </Button>
            <Button variant="contained" onClick={clear}>
              Clear
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
};

export default Form;
