import { Box, Group, Stack, Text, Button } from "@mantine/core";

import React, { useContext, useState } from "react";
import { AddedServicesContext } from "../../../App";

const initialState = false;

const IndividualFeature = ({ feature }) => {
  const { services, setServices } = useContext(AddedServicesContext);

  const [selected, setSelected] = useState(services.includes(feature.title));

  console.log(services);

  return (
    <Box className="p-4 shadow-2xl bg-white w-[278px] h-[270px] ">
      <Group position="right">
        {!selected ? (
          <Button
            onClick={(event) => {
              setSelected(true);
              setServices([...services, feature.title]);
            }}
            className="bg-certainGreen-100"
          >
            Add
          </Button>
        ) : (
          <Button
            onClick={(event) => {
              setSelected(false);
              setServices((current) =>
                current.filter((selected) => {
                  console.log(selected);
                  return selected !== feature.title;
                })
              );
            }}
            className="bg-red-500"
          >
            Delete
          </Button>
        )}
      </Group>
      <Stack spacing="md" className="h-full w-full justify-center ">
        <Text className="text-2xl font-bold text-certainGreen-100">
          {feature.title}
        </Text>
        <Text className="text-base text-certainGreen-100">
          {feature.shortDescription}
        </Text>
      </Stack>
    </Box>
  );
};

export default IndividualFeature;
